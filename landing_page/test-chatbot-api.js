// Simple Node.js script to test the chatbot API
const axios = require('axios');

async function testChatbotAPI() {
  try {
    console.log('🧪 Testing BriDGe Chatbot API...\n');
    
    // Test 1: Health Check
    console.log('1. Testing Health Check...');
    const healthResponse = await axios.get('http://localhost:3000/api/health');
    console.log('✅ Health Check:', healthResponse.data);
    console.log('');
    
    // Test 2: Chat API with simple message
    console.log('2. Testing Chat API...');
    const chatResponse = await axios.post('http://localhost:3000/api/chat', {
      message: 'Hi'
    });
    console.log('✅ Chat Response:', chatResponse.data);
    console.log('');
    
    // Test 3: Chat API with BriDGe-specific question
    console.log('3. Testing BriDGe-specific question...');
    const bridgeResponse = await axios.post('http://localhost:3000/api/chat', {
      message: 'What is BriDGe platform?'
    });
    console.log('✅ BriDGe Response:', bridgeResponse.data);
    console.log('');
    
    console.log('🎉 All tests passed! Chatbot API is working correctly.');
    
  } catch (error) {
    console.error('❌ Test failed:', error.response?.data || error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.log('\n💡 Make sure the development server is running:');
      console.log('   cd landing_page && npm run dev');
    }
  }
}

testChatbotAPI();