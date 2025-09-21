# AdmirerX Backend Server

This backend server handles form submissions from the AdmirerX website and sends them via email using Nodemailer.

## Setup Instructions

### 1. Create .env file
Create a `.env` file in the backend directory with the following content:

```env
# Gmail Configuration
EMAIL_USER=devr01499@gmail.com
EMAIL_APP_PASSWORD=dtgx rton ntaq gwqf

# Server Configuration
PORT=3001
NODE_ENV=development
```

### 2. Install Dependencies
```bash
cd backend
npm install
```

### 3. Start the Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

### 4. Test the Server
- Health check: http://localhost:3001/health
- Form submission endpoint: POST http://localhost:3001/send-email

## API Endpoints

### POST /send-email
Handles form submissions from the website.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "company": "Example Corp",
  "service": "Customer Support",
  "subject": "Inquiry about services",
  "message": "I would like to know more about your BPO services."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Request submitted successfully! We will get back to you within 24 hours."
}
```

### GET /health
Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "AdmirerX Backend Server is running",
  "timestamp": "2024-01-01T00:00:00.000Z"
}
```

## Deployment

For production deployment, update the frontend to point to your deployed backend URL instead of localhost:3001.

## Security Notes

- Never commit the .env file to version control
- Use environment variables for all sensitive data
- Consider implementing rate limiting for production use
