import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ 
    status: 'OK', 
    message: 'BriDGe AI Chatbot API is running',
    timestamp: new Date().toISOString()
  })
}