import { NextRequest, NextResponse } from 'next/server'
import axios from 'axios'

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const messageLower = message.toLowerCase().trim()

    // 🧠 Enhanced Message Classification System
    
    // 1. Greeting Detection (more comprehensive)
    const isGreeting = /(^|\s)(hi|hello|hey|hii+|helo|good\s+(morning|afternoon|evening|night)|greetings|namaste|yo|sup|wassup|whats\s*up)(\s|$)/i.test(message)
    
    // 2. BriDGe-Related Keywords (expanded and more specific)
    const bridgeKeywords = [
      // Core platform terms
      'bridge', 'bridg', 'brdg',
      // Features
      'career', 'job', 'resume', 'interview', 'skill', 'mentor', 'mentoring',
      'dashboard', 'profile', 'portfolio', 'hackquest', 'ai guide', 'ai coach',
      // User types
      'student', 'employer', 'university', 'recruiter',
      // Actions
      'login', 'signup', 'register', 'password', 'account', 'settings',
      'course', 'learning', 'guidance', 'recommendation', 'matching',
      // Platform specific
      'empbridge', 'ai career', 'job matching', 'resume builder'
    ]
    
    // 3. Conversational/Polite Keywords
    const conversationalKeywords = [
      'how are you', 'how r u', 'how you doing', 'thanks', 'thank you', 
      'bye', 'goodbye', 'see you', 'nice to meet', 'pleasure'
    ]
    
    // 4. Clearly Unrelated Topics (expanded)
    const unrelatedTopics = [
      // General knowledge
      'weather', 'climate', 'temperature', 'rain', 'snow',
      'recipe', 'cooking', 'food', 'restaurant', 'meal',
      'movie', 'film', 'cinema', 'actor', 'actress',
      'music', 'song', 'singer', 'band', 'album',
      'sports', 'football', 'cricket', 'basketball', 'tennis',
      'politics', 'government', 'president', 'election', 'minister',
      'news', 'current events', 'breaking news',
      // Personal/Random
      'joke', 'funny', 'story', 'personal life', 'family',
      'health', 'medical', 'doctor', 'medicine',
      'travel', 'vacation', 'holiday', 'trip',
      // Tech (non-BriDGe)
      'facebook', 'instagram', 'twitter', 'google', 'apple',
      'programming help', 'code debug', 'javascript help', 'python help'
    ]

    // 🔍 Classification Logic
    const hasBridgeKeyword = bridgeKeywords.some(keyword => messageLower.includes(keyword))
    const hasConversationalKeyword = conversationalKeywords.some(keyword => messageLower.includes(keyword))
    const hasUnrelatedTopic = unrelatedTopics.some(topic => messageLower.includes(topic))
    
    // AI/Self-reference questions (allowed)
    const isAiSelfQuery = /(who are you|what are you|how do you work|openai|chatgpt|gpt|artificial intelligence)/i.test(message)

    // 🚦 Decision Tree
    
    // Case 1: Pure Greeting
    if (isGreeting && !hasBridgeKeyword && !hasUnrelatedTopic) {
      return NextResponse.json({
        reply: "Hey there 👋! How can I assist you with BriDGe today? I can help with features, account issues, career guidance, or any questions about our platform!"
      })
    }
    
    // Case 2: Conversational (thanks, bye, etc.)
    if (hasConversationalKeyword && !hasBridgeKeyword && !hasUnrelatedTopic) {
      return NextResponse.json({
        reply: "You're welcome! Feel free to ask me anything about BriDGe - whether it's about our AI career guidance, job matching, or any platform features. I'm here to help! 😊"
      })
    }
    
    // Case 3: Clearly Unrelated Query (reject without API call)
    if (hasUnrelatedTopic && !hasBridgeKeyword && !isAiSelfQuery) {
      return NextResponse.json({
        reply: "Sorry! I can only assist with BriDGe-related questions. Would you like to know about our AI career guidance, job matching features, or how to use the platform? 🚀"
      })
    }
    
    // Case 4: Ambiguous/General Query (let AI decide but with strict instructions)
    if (!hasBridgeKeyword && !isAiSelfQuery && !isGreeting && !hasConversationalKeyword) {
      // Let AI handle but with very strict instructions
      console.log('Ambiguous query - letting AI decide:', message)
    }

    // 🧠 Enhanced System Prompt - Production Ready
    const systemPrompt = `You are the official AI Chat Bot for **BriDGe** - a comprehensive AI-powered career platform that connects students, mentors, and employers for skill development and job opportunities.

🎯 **YOUR PURPOSE**: Help users ONLY with BriDGe-related topics such as:
- Platform features, navigation, and functionality
- Account issues (login, signup, password reset, profile setup)
- Career guidance and AI mentor services
- Job matching, resume building, and interview coaching
- Course recommendations and learning paths
- Technical support and bug reporting
- Pricing and subscription information

⚙️ **STRICT BEHAVIORAL RULES**:

1. **BriDGe Topics**: Answer comprehensively and helpfully about any BriDGe feature or service
2. **Greetings**: Respond warmly to greetings and redirect to BriDGe assistance
3. **Self-Reference**: You may answer questions about yourself (AI, OpenAI, how you work)
4. **Unrelated Queries**: For ANY non-BriDGe topic, respond EXACTLY with:
   "Sorry! I can only assist with BriDGe-related questions. Would you like to know about our AI career guidance, job matching features, or how to use the platform? 🚀"

🏢 **ABOUT BriDGe PLATFORM**:
- **AI Career Chat Bot**: ₹200/session for personalized 24/7 career guidance
- **Student Dashboard**: Profile completion, skills assessment, AI-powered job recommendations
- **Employer Dashboard (EMPBriDGe)**: Job posting, candidate analytics, applicant tracking
- **University Integration**: Student management and industry partnership tools
- **AI Job Matching**: 95% accuracy in matching candidates with opportunities
- **AI Resume Builder**: Job-specific optimization with ATS compatibility
- **Portfolio Builder**: AI-powered design and content generation
- **AI Interview Coach**: Facial expression detection and real-time feedback
- **HackQuest Gaming**: Coding challenges and educational competitions
- **AI Mentor**: Emotional detection and personalized career advisory

💬 **TONE**: Professional yet friendly, concise, and always redirect back to BriDGe topics.

🚫 **NEVER**: Answer questions about weather, recipes, movies, sports, politics, other companies, personal advice, or general knowledge unrelated to BriDGe.`

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
    )

    const botReply = response.data.choices[0].message.content
    return NextResponse.json({ reply: botReply })

  } catch (error: any) {
    console.error('Chat API Error:', error.response?.data || error.message)

    if (error.response?.status === 401) {
      return NextResponse.json({ error: 'Invalid OpenAI API key' }, { status: 401 })
    } else if (error.response?.status === 429) {
      return NextResponse.json({ error: 'Rate limit exceeded. Please try again later.' }, { status: 429 })
    } else {
      return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
    }
  }
}