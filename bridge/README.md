# BriDGe Backend API

Backend API for the BriDGe Career Platform - connecting students, employers, and educational institutions.

## Features

- **User Management**: Registration, authentication, and profile management for students, employers, and institutions
- **Opportunity Management**: Job and internship posting, searching, and application tracking
- **AI Recommendations**: Support for AI-powered job matching and career recommendations
- **Analytics**: Comprehensive statistics and reporting
- **Scalable Architecture**: PostgreSQL with optimized queries and indexing

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Frontend**: React.js with static data
- **Authentication**: bcrypt for password hashing
- **Security**: Helmet, CORS, rate limiting

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL (v12 or higher)
- npm or yarn

### Installation

1. **Clone and install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

3. **No backend setup required** - This is a frontend-only application

4. **Start the React application**:
   ```bash
   # Start React development server
   npm start
   
   # Build for production
   npm run build
   ```

5. **Verify installation**:
   ```bash
   curl http://localhost:3001/health
   ```

## Frontend-Only Application

This is now a frontend-only React application. All backend functionality has been removed and replaced with static data and mock responses.

## API Endpoints

### Authentication
- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/:id/profile` - Get user profile

### Opportunities
- `GET /api/opportunities` - Search opportunities with filters
- `GET /api/opportunities/:id` - Get opportunity details
- `POST /api/opportunities` - Create new opportunity

### Applications
- `POST /api/applications` - Submit application
- `GET /api/applications/student/:studentId` - Get student applications
- `GET /api/applications/opportunity/:opportunityId` - Get opportunity applications

### Statistics
- `GET /api/stats/users` - User statistics
- `GET /api/stats/opportunities` - Opportunity statistics

## Environment Variables

```env
# Application
NODE_ENV=development
PORT=3001

# Security
JWT_SECRET=your_jwt_secret
```

## Application Models

Models have been simplified and no longer require database connections.

## Development

### Running Tests
```bash
npm test
npm run test:watch
```

### Database Operations
Database operations have been removed.

### Code Structure
```
├── src/                   # React frontend source
│   ├── components/        # React components
│   └── services/          # API services
├── server.js              # Express server setup
├── package.json
└── README.md
```

## Security Features

- **Password Hashing**: bcrypt with salt rounds
- **Rate Limiting**: Prevents API abuse
- **CORS Configuration**: Controlled cross-origin access
- **Helmet**: Security headers
- **Input Validation**: Comprehensive request validation
- **Input Validation**: Comprehensive request validation

## Performance Optimizations

- **Lightweight**: No database dependencies
- **Fast Startup**: Quick application initialization
- **Pagination**: Efficient large dataset handling

## Deployment

### Production Checklist
- [ ] Set `NODE_ENV=production`
- [ ] Configure SSL for production
- [ ] Set up proper CORS origins
- [ ] Configure rate limiting
- [ ] Set up monitoring and logging
- [ ] Configure backup strategy

### Docker Support (Optional)
```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD ["npm", "start"]
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- Create an issue in the repository
- Check the API documentation
- Review the API documentation