#!/usr/bin/env node

/**
 * STUBriDGe AI Chatbot Test Script
 * Run with: node scripts/test-chatbot.js
 */

const https = require('https')
const http = require('http')

async function testChatbot() {
  console.log('🧪 Testing STUBriDGe AI Chatbot')
  console.log('==============================\n')
  
  const testMessages = [
    "Hello, can you help me?",
    "I'm looking for a job in software development",
    "How do I improve my resume?",
    "What skills should I learn for data science?",
    "Can you help me prepare for interviews?"
  ]
  
  const baseUrl = 'http://localhost:3000'
  
  console.log('Testing chatbot API endpoint...\n')
  
  for (let i = 0; i < testMessages.length; i++) {
    const message = testMessages[i]
    console.log(`Test ${i + 1}: "${message}"`)
    
    try {
      const response = await makeRequest(baseUrl + '/api/chatbot', {
        message: message,
        context: 'stubridge_platform'
      })
      
      if (response.message) {
        console.log(`✅ Response: ${response.message.substring(0, 100)}...`)
      } else {
        console.log(`❌ No message in response:`, response)
      }
      
    } catch (error) {
      console.log(`❌ Error: ${error.message}`)
    }
    
    console.log('---')
    
    // Wait 1 second between requests to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }
  
  console.log('\n🎯 Test Results Summary:')
  console.log('- If you see ✅ responses, your chatbot is working!')
  console.log('- If you see ❌ errors, check your API configuration')
  console.log('- Mock responses are normal during development')
  console.log('\n📚 For setup help, see: docs/AI_CHATBOT_SETUP_PROMPT.md')
}

function makeRequest(url, data) {
  return new Promise((resolve, reject) => {
    const postData = JSON.stringify(data)
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(postData)
      }
    }
    
    const req = http.request(url, options, (res) => {
      let body = ''
      
      res.on('data', (chunk) => {
        body += chunk
      })
      
      res.on('end', () => {
        try {
          const response = JSON.parse(body)
          resolve(response)
        } catch (error) {
          reject(new Error(`Invalid JSON response: ${body}`))
        }
      })
    })
    
    req.on('error', (error) => {
      reject(error)
    })
    
    req.write(postData)
    req.end()
  })
}

// Run the test
testChatbot().catch(console.error)