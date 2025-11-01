# BriDGe AI Chatbot Backend

This is the standalone Express.js backend for the BriDGe AI Chatbot. 

## ⚠️ Important Note

**You don't need to run this backend separately!** The chatbot is already fully integrated into your Next.js application using Next.js API routes (`/app/api/chat/route.ts`).

This backend is provided as a backup/alternative option if you prefer to run the chatbot as a separate service.

## When to Use This Backend

Use this standalone backend only if:
- You want to run the chatbot as a separate microservice
- You need to deploy the chatbot backend independently
- You want to use the chatbot with multiple frontend applications

## Quick Start (Optional)

### 1. Install Dependencies
```bash
cd landing_page/backend
npm install
```

### 2. Configure Environment
```bash
cp .env.example .env
# Edit .env and add your OpenAI API key
```

### 3. Run the Server
```bash
npm run dev
```

The backend will run on http://localhost:5000

### 4. Update Frontend (if using standalone backend)
If you choose to use this standalone backend, update the API URL in `ChatBox.tsx`:
```typescript
const response = await axios.post('http://localhost:5000/api/chat', {
  message: input
})
```

## Default Integration (Recommended)

By default, the chatbot uses Next.js API routes and doesn't require this separate backend. The API endpoint is available at:
- **Development**: `http://localhost:3000/api/chat`
- **Production**: `https://yourdomain.com/api/chat`

## API Endpoints

- `POST /api/chat` - Send message to AI and get response
- `GET /` - Health check

## Environment Variables

- `OPENAI_API_KEY` - Your OpenAI API key
- `PORT` - Server port (default: 5000)

## Features

- OpenAI GPT-3.5-turbo integration
- Smart filtering to save API costs
- BriDGe-specific AI training
- CORS enabled for frontend integration
- Error handling and rate limiting