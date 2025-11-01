# 🤖 Complete AI Chatbot Setup Guide - Step by Step

## 🎯 **GOAL**: Transform your mock chatbot into a fully functional AI-powered assistant

---

## 📋 **PREREQUISITES CHECKLIST**

Before starting, ensure you have:
- [ ] Node.js and npm/yarn installed
- [ ] Next.js project running locally
- [ ] Access to create environment variables
- [ ] Credit card for AI service (OpenAI/Anthropic) OR free Google account (Gemini)
- [ ] 30 minutes of setup time

---

## 🚀 **OPTION 1: OpenAI GPT Integration (RECOMMENDED)**

### **Step 1: Get OpenAI API Key (5 minutes)**

1. **Visit OpenAI Platform**
   ```
   Go to: https://platform.openai.com/
   ```

2. **Create Account/Login**
   - Sign up with email or login if you have account
   - Verify your email address

3. **Add Payment Method**
   ```
   Navigate to: Billing → Payment methods
   Add your credit card (required for API access)
   ```

4. **Generate API Key**
   ```
   Navigate to: API keys → Create new secret key
   Name: "STUBriDGe Chatbot"
   Copy the key: sk-proj-xxxxxxxxxxxxxxxxxx
   ```

5. **Set Usage Limits (Important!)**
   ```
   Navigate to: Billing → Usage limits
   Set monthly limit: $10 (recommended for testing)
   Set email alerts at: $5
   ```

### **Step 2: Configure Environment Variables (2 minutes)**

1. **Create Environment File**
   ```bash
   # In your project root, create .env.local
   touch .env.local
   ```

2. **Add Your API Key**
   ```bash
   # Open .env.local and add:
   OPENAI_API_KEY=sk-proj-your-actual-key-here
   OPENAI_MODEL=gpt-3.5-turbo
   ```

3. **Verify File is Ignored**
   ```bash
   # Check .gitignore contains:
   .env.local
   .env*.local
   ```

### **Step 3: Activate OpenAI Integration (3 minutes)**

1. **Open API Route File**
   ```
   File: app/api/chatbot/route.ts
   ```

2. **Install OpenAI Package**
   ```bash
   npm install openai
   # OR
   yarn add openai
   ```

3. **Replace the Mock Function**
   
   **FIND THIS CODE** (around line 45):
   ```typescript
   // TODO: Replace this with your actual AI integration
   // Example integrations:
   
   // 1. OpenAI GPT Integration
   const aiResponse = await getOpenAIResponse(sanitizedMessage, context)
   ```

   **REPLACE WITH**:
   ```typescript
   // OpenAI GPT Integration - ACTIVE
   const aiResponse = await getOpenAIResponse(sanitizedMessage, context)
   ```

4. **Update OpenAI Function**
   
   **FIND THIS CODE** (around line 70):
   ```typescript
   async function getOpenAIResponse(message: string, context: string): Promise<string> {
     try {
       // Uncomment and configure when ready to use OpenAI
       /*
   ```

   **REPLACE WITH**:
   ```typescript
   async function getOpenAIResponse(message: string, context: string): Promise<string> {
     try {
       const { OpenAI } = await import('openai')
       
       const openai = new OpenAI({
         apiKey: process.env.OPENAI_API_KEY,
       })

       const response = await openai.chat.completions.create({
         model: process.env.OPENAI_MODEL || 'gpt-3.5-turbo',
         messages: [
           {
             role: 'system',
             content: `You are an AI assistant for STUBriDGe, a career platform that bridges the gap between students and industry opportunities. 
                      You help with career guidance, job opportunities, skill development, resume advice, and interview preparation.
                      Be helpful, professional, and encouraging. Keep responses concise but informative.
                      Context: ${context}`
           },
           {
             role: 'user',
             content: message
           }
         ],
         max_tokens: 500,
         temperature: 0.7,
       })

       return response.choices[0]?.message?.content || "I'm sorry, I couldn't process that request."
   ```

5. **Comment Out Mock Response**
   
   **FIND THIS LINE** (around line 110):
   ```typescript
   // Temporary mock response for development
   return getMockResponse(message, context)
   ```

   **REPLACE WITH**:
   ```typescript
   // Temporary mock response for development
   // return getMockResponse(message, context)
   ```

### **Step 4: Test Your Integration (5 minutes)**

1. **Restart Development Server**
   ```bash
   # Stop server (Ctrl+C) then restart
   npm run dev
   # OR
   yarn dev
   ```

2. **Test the Chatbot**
   - Click the floating chatbot button (bottom-right corner)
   - Send a test message: "Help me find a job"
   - Wait for AI response (should take 2-5 seconds)

3. **Verify Success**
   - ✅ AI responds with relevant career advice
   - ✅ No error messages in browser console
   - ✅ Responses are contextual and helpful

---

## 🚀 **OPTION 2: Google Gemini Integration (FREE)**

### **Step 1: Get Google API Key (3 minutes)**

1. **Visit Google AI Studio**
   ```
   Go to: https://makersuite.google.com/app/apikey
   ```

2. **Create API Key**
   - Login with Google account
   - Click "Create API Key"
   - Copy the key: AIzaSyxxxxxxxxxxxxxxxxxx

### **Step 2: Configure Environment (1 minute)**

```bash
# In .env.local add:
GOOGLE_API_KEY=AIzaSy-your-actual-key-here
```

### **Step 3: Activate Gemini Integration (2 minutes)**

1. **Update API Route**
   
   **FIND** (line ~45):
   ```typescript
   const aiResponse = await getOpenAIResponse(sanitizedMessage, context)
   ```

   **REPLACE WITH**:
   ```typescript
   const aiResponse = await getGeminiResponse(sanitizedMessage, context)
   ```

2. **Uncomment Gemini Function**
   
   **FIND** (around line 150):
   ```typescript
   /*
   // Google Gemini Integration
   async function getGeminiResponse(message: string, context: string): Promise<string> {
   ```

   **REMOVE THE COMMENT MARKERS** and update:
   ```typescript
   // Google Gemini Integration
   async function getGeminiResponse(message: string, context: string): Promise<string> {
     try {
       const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${process.env.GOOGLE_API_KEY}`, {
         method: 'POST',
         headers: {
           'Content-Type': 'application/json',
         },
         body: JSON.stringify({
           contents: [{
             parts: [{
               text: `You are an AI assistant for STUBriDGe career platform. Help with career guidance, job opportunities, skill development, resume advice, and interview preparation. Be helpful and professional. Context: ${context}\n\nUser message: ${message}`
             }]
           }]
         })
       })
       
       const data = await response.json()
       return data.candidates[0]?.content?.parts[0]?.text || "I'm sorry, I couldn't process that request."
     } catch (error) {
       console.error('Gemini API error:', error)
       throw error
     }
   }
   ```

---

## 🚀 **OPTION 3: Anthropic Claude Integration (PREMIUM)**

### **Step 1: Get Anthropic API Key**

1. **Visit Anthropic Console**
   ```
   Go to: https://console.anthropic.com/
   ```

2. **Create Account and Get Key**
   - Sign up and verify email
   - Add payment method
   - Generate API key

### **Step 2: Configure Environment**

```bash
# In .env.local add:
ANTHROPIC_API_KEY=sk-ant-your-key-here
```

### **Step 3: Install and Configure**

```bash
npm install @anthropic-ai/sdk
```

Update the API route to use Claude (similar process as OpenAI).

---

## 🔧 **CUSTOMIZATION PROMPTS**

### **Enhance AI Personality**

Add this to your system prompt:
```typescript
content: `You are Alex, the friendly AI assistant for STUBriDGe career platform. 
         You're enthusiastic about helping students and professionals grow their careers.
         
         Your expertise includes:
         - Career guidance and planning
         - Job search strategies  
         - Resume and LinkedIn optimization
         - Interview preparation
         - Skill development recommendations
         - Industry insights and trends
         - Networking advice
         - Salary negotiation tips
         
         Your personality:
         - Encouraging and supportive
         - Professional but approachable
         - Knowledgeable about current job market
         - Practical and actionable advice
         - Empathetic to career challenges
         
         Always:
         - Ask follow-up questions to better help
         - Provide specific, actionable advice
         - Encourage users to take next steps
         - Reference STUBriDGe platform features when relevant
         
         Context: ${context}`
```

### **Add Platform-Specific Context**

```typescript
// Detect current platform and add context
const platformContext = {
  stubridge: "student-focused career platform with mentorship and job opportunities",
  empbridge: "employer-focused recruitment and talent acquisition platform", 
  unibridge: "university partnership platform for career services"
}

const systemPrompt = `You are helping users on ${platformContext[context]} platform...`
```

---

## 🧪 **TESTING SCENARIOS**

Test these messages to verify your AI is working:

```typescript
const testMessages = [
  // Career Guidance
  "I'm a computer science student. What career paths should I consider?",
  
  // Job Search
  "How do I find entry-level software developer jobs?",
  
  // Resume Help  
  "Can you review my resume and give feedback?",
  
  // Interview Prep
  "I have a technical interview next week. How should I prepare?",
  
  // Skill Development
  "What programming languages should I learn in 2024?",
  
  // Networking
  "How do I network effectively as an introvert?",
  
  // Platform Features
  "How can STUBriDGe help me find a mentor?",
  
  // General Support
  "I'm feeling overwhelmed with my job search. Any advice?"
]
```

---

## 🚨 **TROUBLESHOOTING GUIDE**

### **Common Issues & Solutions**

1. **"API key not found" Error**
   ```bash
   # Check .env.local exists in project root
   ls -la .env.local
   
   # Restart development server
   npm run dev
   ```

2. **"Rate limit exceeded" Error**
   ```bash
   # Check your API provider dashboard
   # Reduce request frequency
   # Upgrade your plan if needed
   ```

3. **"Network error" or timeout**
   ```bash
   # Check internet connection
   # Verify API endpoint URLs
   # Check API provider status page
   ```

4. **Chatbot button not working**
   ```bash
   # Check browser console for errors
   # Verify all imports are correct
   # Clear browser cache and reload
   ```

5. **AI responses are generic**
   ```bash
   # Improve your system prompt
   # Add more specific context
   # Increase max_tokens if responses are cut off
   ```

---

## 💰 **COST MONITORING**

### **OpenAI Cost Tracking**
```bash
# Check usage at: https://platform.openai.com/usage
# Typical costs:
# - 100 conversations: ~$0.10
# - 1000 conversations: ~$1.00
# - 10,000 conversations: ~$10.00
```

### **Set Up Alerts**
```bash
# In OpenAI dashboard:
# 1. Go to Billing → Usage limits
# 2. Set monthly limit: $20
# 3. Set email alert at: $10
# 4. Set hard limit to prevent overages
```

---

## 🎯 **SUCCESS CHECKLIST**

After setup, verify:
- [ ] Chatbot button appears on all pages
- [ ] Modal opens when button is clicked
- [ ] AI responds to messages within 5 seconds
- [ ] Responses are relevant and helpful
- [ ] No errors in browser console
- [ ] API costs are within expected range
- [ ] Rate limiting works (test rapid messages)
- [ ] Error handling works (test with invalid input)

---

## 🚀 **NEXT LEVEL FEATURES**

Once basic integration works, consider adding:

### **Chat History**
```typescript
// Store conversations in database
// Allow users to view past chats
// Resume conversations across sessions
```

### **User Context**
```typescript
// Pass user profile data to AI
// Personalize responses based on user type
// Remember user preferences
```

### **Advanced Features**
```typescript
// File upload support (resume analysis)
// Voice input/output
// Multi-language support
// Integration with platform features
// Analytics and insights
```

---

## 📞 **SUPPORT RESOURCES**

- **OpenAI Documentation**: https://platform.openai.com/docs
- **Google Gemini Docs**: https://ai.google.dev/docs
- **Anthropic Claude Docs**: https://docs.anthropic.com
- **Next.js API Routes**: https://nextjs.org/docs/api-routes/introduction

---

## 🎉 **FINAL STEP**

Once everything is working:

1. **Test thoroughly** with different message types
2. **Monitor costs** for first few days
3. **Gather user feedback** on AI responses
4. **Iterate and improve** system prompts
5. **Scale up** based on usage patterns

**Congratulations! Your AI chatbot is now live! 🚀**