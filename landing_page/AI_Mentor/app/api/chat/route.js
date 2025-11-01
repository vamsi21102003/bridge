import OpenAI from 'openai';
import { NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request) {
  try {
    const { message, conversationHistory = [] } = await request.json();

    if (!message) {
      return NextResponse.json(
        { error: 'Message is required' },
        { status: 400 }
      );
    }

    // Build conversation context for better AI responses
    const messages = [
      {
        role: 'system',
        content: `You are an AI Mentor - a supportive, knowledgeable, and encouraging learning companion. Your role is to:

- Provide personalized guidance and learning support
- Offer motivation and encouragement
- Help users set and achieve their goals
- Break down complex topics into understandable steps
- Ask thoughtful questions to help users reflect and learn
- Adapt your communication style to the user's needs
- Be patient, empathetic, and constructive

Keep responses conversational, helpful, and focused on the user's growth and learning journey. Aim for responses that are informative but not overwhelming.`
      },
      ...conversationHistory.map(msg => ({
        role: msg.type === 'user' ? 'user' : 'assistant',
        content: msg.content
      })),
      {
        role: 'user',
        content: message
      }
    ];

    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: messages,
      max_tokens: 500,
      temperature: 0.7,
    });

    const aiResponse = completion.choices[0].message.content;

    return NextResponse.json({ 
      response: aiResponse,
      success: true 
    });

  } catch (error) {
    console.error('OpenAI API Error:', error);
    
    // Return a fallback response if OpenAI fails
    const fallbackResponses = [
      "I'm here to help you learn and grow! Could you tell me more about what you'd like to work on?",
      "That's an interesting question! Let me think about how I can best support your learning journey.",
      "I'm experiencing some technical difficulties right now, but I'm still here to help! Could you rephrase your question?",
      "Great question! Learning is all about curiosity. What specific aspect would you like to explore further?"
    ];

    return NextResponse.json({ 
      response: fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)],
      success: false,
      fallback: true
    });
  }
}