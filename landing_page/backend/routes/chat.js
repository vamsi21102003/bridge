import express from 'express';
import axios from 'axios';

const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Pre-filter obvious non-BriDGe questions to save API costs
    const bridgeKeywords = ['bridge', 'career', 'job', 'resume', 'interview', 'skill', 'student', 'employer', 'university', 'ai chat bot', 'mentor', 'hackquest', 'portfolio', 'dashboard'];
    const aiKeywords = ['openai', 'chatgpt', 'ai', 'artificial intelligence', 'machine learning', 'gpt', 'who are you', 'what are you', 'how do you work'];
    const conversationalKeywords = [
      'hello', 'hi', 'hii', 'hiiii', 'hey', 'heyy', 'helo', 'hii there', 'hi there',
      'how are you', 'how r u', 'how are u', 'how r you', 'how you doing', 'how are you doing',
      'good morning', 'good afternoon', 'good evening', 'good night',
      'thanks', 'thank you', 'thankyou', 'thx', 'ty',
      'bye', 'goodbye', 'good bye', 'see you', 'see ya', 'cya', 'ttyl',
      'nice to meet you', 'nice meeting you', 'pleasure to meet you',
      'how is your day', 'hows your day', 'how was your day',
      'whats up', 'what\'s up', 'wassup', 'sup', 'whatsup',
      'greetings', 'salutations', 'yo', 'hola', 'namaste'
    ];
    const messageLower = message.toLowerCase();
    const hasBridgeKeyword = bridgeKeywords.some(keyword => messageLower.includes(keyword));
    const hasAiKeyword = aiKeywords.some(keyword => messageLower.includes(keyword));
    const hasConversationalKeyword = conversationalKeywords.some(keyword => messageLower.includes(keyword));

    // Additional check for simple greetings (single words or very short phrases)
    const simpleGreetings = /^(hi+|hey+|hello|sup|yo|hola|namaste|thanks?|thx|ty|bye+|goodbye)$/i;
    const isSimpleGreeting = simpleGreetings.test(message.trim());

    // Check for "how are you" variations more flexibly
    const howAreYouPattern = /how\s+(are|r)\s+(you|u)/i;
    const isHowAreYou = howAreYouPattern.test(message);

    const isConversational = hasConversationalKeyword || isSimpleGreeting || isHowAreYou;

    // Special handling for pure conversational messages
    const isPureConversational = isConversational && !hasBridgeKeyword && !hasAiKeyword;

    // If it's a pure conversational message, send it to OpenAI with special context
    if (isPureConversational) {
      console.log('Pure conversational message detected:', message);
    }

    // Common non-BriDGe topics that should be filtered out (but allow AI-related questions)
    const nonBridgeTopics = ['weather', 'recipe', 'movie', 'music', 'sports', 'politics', 'news', 'math problem', 'homework', 'coding help', 'programming', 'javascript', 'python', 'java'];
    const hasNonBridgeTopic = nonBridgeTopics.some(topic => messageLower.includes(topic));

    // If clearly not about BriDGe, AI, or basic conversation, return standard response without API call
    if (hasNonBridgeTopic && !hasBridgeKeyword && !hasAiKeyword && !isConversational) {
      return res.json({
        reply: "Sorry, I can't help with this. I can only help with topics related to the BriDGe website. Do you have any queries about BriDGe?"
      });
    }



    // Choose system prompt based on message type
    let systemPrompt;

    if (isPureConversational) {
      systemPrompt = `You are BriDGe AI Chat Bot. The user is greeting you or making basic conversation. Respond warmly and naturally to their greeting/question, then briefly mention that you're here to help with BriDGe platform features like career guidance, job matching, resume building, etc. Keep it friendly and conversational.

Examples:
- If they say "hi" or "hello": Respond with a warm greeting and mention BriDGe
- If they ask "how are you": Say you're doing great and mention you're here to help with BriDGe
- If they say "thanks": Acknowledge and offer further BriDGe chat bot assistance

Always be warm, friendly, and naturally conversational.`;
    } else {
      systemPrompt = `You are BriDGe AI Chat Bot, a specialized chatbot EXCLUSIVELY for the BriDGe Platform - an innovative AI-powered career platform that bridges the gap between university talent and industry opportunities.

STRICT GUIDELINES:
- You can communicate in ANY language the user prefers
- You ONLY respond to questions about BriDGe platform, its features, services, and career-related topics within the platform context
- You CAN answer questions about yourself (OpenAI, ChatGPT, AI capabilities, etc.) - this is allowed
- You MUST respond warmly to ALL basic conversational interactions
- For ANY other question not related to BriDGe platform, yourself, or basic conversation, you MUST respond EXACTLY with: "Sorry, I can't help with this. I can only help with topics related to the BriDGe website. Do you have any queries about BriDGe?"
- Never provide information about general topics, other websites, companies, or unrelated subjects (except yourself)
- Always be helpful, friendly, and professional when discussing BriDGe

ABOUT BriDGe PLATFORM:
BriDGe is a comprehensive career ecosystem with:

CORE FEATURES:
- AI Career Chat Bot (₹200/session for 24/7 career guidance)
- Student Dashboard with profile completion, skills assessment, job recommendations
- Employer Dashboard (EMPBriDGe) with job posting, analytics, applicant tracking
- University Integration for student management and industry partnerships
- AI-powered job matching (95% accuracy), resume optimization, skill gap analysis
- Advanced AI Chatbot with natural language processing and multi-modal support
- AI Mentor with emotional detection, career guidance, and advisory services
- HackQuest gaming platform with coding challenges, educational games, and competitions
- AI Resume Builder with job-specific optimization and ATS compatibility
- Portfolio Webpage Builder with AI-powered design and content generation
- AI Interview Coach with facial expression detection and real-time feedback

PRICING:
- AI Career Chat Bot: ₹200 per session
- Other services: Contact for pricing details

REMEMBER: If the question is not about BriDGe platform, yourself (OpenAI/AI), or basic conversation, respond with the exact message: "Sorry, I can't help with this. I can only help with topics related to the BriDGe website. Do you have any queries about BriDGe?"`;
    }

    // Make request to OpenAI API
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: systemPrompt
          },
          {
            role: 'user',
            content: message
          }
        ],
        max_tokens: 200,
        temperature: 0.7
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    const botReply = response.data.choices[0].message.content;
    res.json({ reply: botReply });

  } catch (error) {
    console.error('Chat API Error:', error.response?.data || error.message);

    if (error.response?.status === 401) {
      res.status(401).json({ error: 'Invalid OpenAI API key' });
    } else if (error.response?.status === 429) {
      res.status(429).json({ error: 'Rate limit exceeded. Please try again later.' });
    } else {
      res.status(500).json({ error: 'Internal server error' });
    }
  }
});

export default router;