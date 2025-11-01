#!/usr/bin/env node

/**
 * STUBriDGe AI Chatbot Setup Script
 * Run with: node scripts/setup-chatbot.js
 */

const fs = require('fs')
const path = require('path')
const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

console.log('🤖 STUBriDGe AI Chatbot Setup Wizard')
console.log('=====================================\n')

async function question(prompt) {
  return new Promise((resolve) => {
    rl.question(prompt, resolve)
  })
}

async function setupChatbot() {
  try {
    console.log('This wizard will help you set up your AI chatbot in 5 minutes!\n')
    
    // Step 1: Choose AI Provider
    console.log('Step 1: Choose your AI provider')
    console.log('1. OpenAI GPT (Recommended - $0.002/1K tokens)')
    console.log('2. Google Gemini (Free tier available)')
    console.log('3. Anthropic Claude (Premium - $0.008/1K tokens)')
    console.log('4. Skip for now (use mock responses)\n')
    
    const provider = await question('Enter your choice (1-4): ')
    
    let envContent = ''
    let apiKey = ''
    
    switch (provider) {
      case '1':
        console.log('\n📝 OpenAI Setup:')
        console.log('1. Go to: https://platform.openai.com/api-keys')
        console.log('2. Create new API key')
        console.log('3. Copy the key (starts with sk-)\n')
        
        apiKey = await question('Paste your OpenAI API key: ')
        if (apiKey.startsWith('sk-')) {
          envContent = `# OpenAI Configuration
OPENAI_API_KEY=${apiKey}
OPENAI_MODEL=gpt-3.5-turbo

# Security Configuration
CHATBOT_RATE_LIMIT_REQUESTS=10
CHATBOT_RATE_LIMIT_WINDOW_MS=60000
CHATBOT_MAX_MESSAGE_LENGTH=1000`
          
          console.log('✅ OpenAI configuration ready!')
        } else {
          console.log('❌ Invalid OpenAI API key format')
          process.exit(1)
        }
        break
        
      case '2':
        console.log('\n📝 Google Gemini Setup:')
        console.log('1. Go to: https://makersuite.google.com/app/apikey')
        console.log('2. Create API key')
        console.log('3. Copy the key (starts with AIza)\n')
        
        apiKey = await question('Paste your Google API key: ')
        if (apiKey.startsWith('AIza')) {
          envContent = `# Google Gemini Configuration
GOOGLE_API_KEY=${apiKey}

# Security Configuration
CHATBOT_RATE_LIMIT_REQUESTS=10
CHATBOT_RATE_LIMIT_WINDOW_MS=60000
CHATBOT_MAX_MESSAGE_LENGTH=1000`
          
          console.log('✅ Google Gemini configuration ready!')
        } else {
          console.log('❌ Invalid Google API key format')
          process.exit(1)
        }
        break
        
      case '3':
        console.log('\n📝 Anthropic Claude Setup:')
        console.log('1. Go to: https://console.anthropic.com/')
        console.log('2. Create API key')
        console.log('3. Copy the key (starts with sk-ant-)\n')
        
        apiKey = await question('Paste your Anthropic API key: ')
        if (apiKey.startsWith('sk-ant-')) {
          envContent = `# Anthropic Claude Configuration
ANTHROPIC_API_KEY=${apiKey}

# Security Configuration
CHATBOT_RATE_LIMIT_REQUESTS=10
CHATBOT_RATE_LIMIT_WINDOW_MS=60000
CHATBOT_MAX_MESSAGE_LENGTH=1000`
          
          console.log('✅ Anthropic Claude configuration ready!')
        } else {
          console.log('❌ Invalid Anthropic API key format')
          process.exit(1)
        }
        break
        
      case '4':
        console.log('\n⏭️  Skipping AI setup - using mock responses')
        console.log('You can set up AI later by following the guide in docs/AI_CHATBOT_SETUP_PROMPT.md')
        envContent = `# Mock Configuration - No AI provider
# Add your AI API keys here when ready

# Security Configuration
CHATBOT_RATE_LIMIT_REQUESTS=10
CHATBOT_RATE_LIMIT_WINDOW_MS=60000
CHATBOT_MAX_MESSAGE_LENGTH=1000`
        break
        
      default:
        console.log('❌ Invalid choice')
        process.exit(1)
    }
    
    // Step 2: Create .env.local file
    console.log('\nStep 2: Creating environment file...')
    
    const envPath = path.join(process.cwd(), '.env.local')
    
    if (fs.existsSync(envPath)) {
      const overwrite = await question('.env.local already exists. Overwrite? (y/n): ')
      if (overwrite.toLowerCase() !== 'y') {
        console.log('❌ Setup cancelled')
        process.exit(1)
      }
    }
    
    fs.writeFileSync(envPath, envContent)
    console.log('✅ Created .env.local file')
    
    // Step 3: Update API route (if not mock)
    if (provider !== '4') {
      console.log('\nStep 3: Updating API route...')
      
      const apiRoutePath = path.join(process.cwd(), 'app/api/chatbot/route.ts')
      
      if (fs.existsSync(apiRoutePath)) {
        let apiContent = fs.readFileSync(apiRoutePath, 'utf8')
        
        // Update based on provider
        switch (provider) {
          case '1': // OpenAI
            apiContent = apiContent.replace(
              'return getMockResponse(message, context)',
              '// return getMockResponse(message, context) // Disabled - using OpenAI'
            )
            break
          case '2': // Gemini
            apiContent = apiContent.replace(
              'const aiResponse = await getOpenAIResponse(sanitizedMessage, context)',
              'const aiResponse = await getGeminiResponse(sanitizedMessage, context)'
            )
            break
          case '3': // Claude
            apiContent = apiContent.replace(
              'const aiResponse = await getOpenAIResponse(sanitizedMessage, context)',
              'const aiResponse = await getClaudeResponse(sanitizedMessage, context)'
            )
            break
        }
        
        fs.writeFileSync(apiRoutePath, apiContent)
        console.log('✅ Updated API route configuration')
      }
    }
    
    // Step 4: Install dependencies
    if (provider === '1') {
      console.log('\nStep 4: Installing OpenAI package...')
      console.log('Run: npm install openai')
      console.log('Or: yarn add openai')
    }
    
    // Final instructions
    console.log('\n🎉 Setup Complete!')
    console.log('================')
    console.log('Next steps:')
    console.log('1. Restart your development server: npm run dev')
    console.log('2. Click the chatbot button (bottom-right corner)')
    console.log('3. Test with a message like: "Help me find a job"')
    
    if (provider !== '4') {
      console.log('4. Monitor your API usage in the provider dashboard')
      console.log('5. Set up billing alerts to avoid unexpected charges')
    }
    
    console.log('\n📚 For detailed setup guide, see: docs/AI_CHATBOT_SETUP_PROMPT.md')
    console.log('🆘 For troubleshooting, see: docs/CHATBOT_INTEGRATION_GUIDE.md')
    
  } catch (error) {
    console.error('❌ Setup failed:', error.message)
    process.exit(1)
  } finally {
    rl.close()
  }
}

// Run the setup
setupChatbot()