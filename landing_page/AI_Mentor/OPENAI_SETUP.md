# OpenAI Integration Setup

Your AI Mentor is now powered by OpenAI's GPT-3.5-turbo for intelligent, personalized responses!

## Quick Setup

1. **Get your OpenAI API Key**
   - Visit [OpenAI Platform](https://platform.openai.com/api-keys)
   - Create an account or sign in
   - Generate a new API key

2. **Configure Environment Variables**
   - Create a `.env.local` file in your project root
   - Add your API key:
   ```
   OPENAI_API_KEY=your_actual_api_key_here
   ```

3. **Start the Development Server**
   ```bash
   npm run dev
   ```

## Features

✅ **Real AI Responses** - Powered by GPT-3.5-turbo
✅ **Conversation Context** - Remembers recent chat history
✅ **Fallback System** - Graceful handling if API is unavailable
✅ **Personalized Mentoring** - Tailored guidance and support
✅ **Smart Quick Prompts** - Pre-built conversation starters

## Cost Considerations

- GPT-3.5-turbo is very affordable (~$0.002 per 1K tokens)
- Typical conversation costs less than $0.01
- Set usage limits in your OpenAI dashboard for peace of mind

## Security

- Never commit your `.env.local` file to version control
- The `.env.example` file shows the required format
- API calls are made server-side to protect your key

Your AI Mentor is ready to provide intelligent, personalized guidance! 🚀