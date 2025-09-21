# Deployment Guide

## Frontend Deployment (Vercel)

1. **Prepare the frontend:**
   ```bash
   cd admirx-frontend
   npm run build
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Set the following environment variables:
     - `VITE_API_URL`: `https://your-backend-url.onrender.com`
   - Deploy!

## Backend Deployment (Render)

1. **Prepare the backend:**
   ```bash
   cd admirx-backend
   ```

2. **Deploy to Render:**
   - Go to [render.com](https://render.com)
   - Create a new Web Service
   - Connect your GitHub repository
   - Set the following:
     - **Build Command**: `npm install`
     - **Start Command**: `npm start`
     - **Environment**: Node
   - Add environment variables:
     - `PORT`: `10000`
     - `MONGODB_URI`: Your MongoDB connection string
     - `NODE_ENV`: `production`
     - `EMAIL_HOST`: `smtp.gmail.com`
     - `EMAIL_PORT`: `587`
     - `EMAIL_USER`: Your Gmail address
     - `EMAIL_PASS`: Your Gmail app password
     - `ADMIN_EMAIL`: Admin email address
   - Deploy!

## Environment Variables

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.onrender.com
```

### Backend (.env)
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/admirx
NODE_ENV=development

# Email configuration
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
ADMIN_EMAIL=admin@admirerx.com
```

## MongoDB Setup

1. **Local MongoDB:**
   - Install MongoDB locally
   - Start MongoDB service
   - Use connection string: `mongodb://localhost:27017/admirx`

2. **MongoDB Atlas (Recommended for production):**
   - Create account at [mongodb.com](https://mongodb.com)
   - Create a new cluster
   - Get connection string
   - Use format: `mongodb+srv://username:password@cluster.mongodb.net/admirx`

## Email Configuration

1. **Gmail Setup:**
   - Enable 2-factor authentication
   - Generate app password
   - Use app password in `EMAIL_PASS`

2. **Alternative Email Providers:**
   - Update `EMAIL_HOST` and `EMAIL_PORT`
   - Update authentication credentials

## Post-Deployment Checklist

- [ ] Frontend loads correctly
- [ ] Contact form submits successfully
- [ ] Email notifications work
- [ ] Mobile responsiveness verified
- [ ] All links and buttons functional
- [ ] Performance optimized
- [ ] SSL certificates active
- [ ] Domain configured (if using custom domain)

## Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Update backend CORS configuration
   - Ensure frontend URL is whitelisted

2. **Email Not Sending:**
   - Check email credentials
   - Verify SMTP settings
   - Check spam folder

3. **Database Connection:**
   - Verify MongoDB URI
   - Check network connectivity
   - Ensure database exists

4. **Build Failures:**
   - Check Node.js version compatibility
   - Verify all dependencies installed
   - Check for TypeScript errors
