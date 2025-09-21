# AdmirerX - Premium BPO Services

A modern, responsive website for AdmirerX BPO services built with React, Vite, and Material-UI.

## 🚀 Tech Stack

### Frontend
- **React 18** with Vite for fast development
- **Material-UI 5** with styled-components for UI components
- **Redux Toolkit** for state management
- **React Router v6** for navigation
- **Inter font** for typography

### Backend
- **Node.js 20** with Express 4
- **MongoDB** for data storage
- **Nodemailer** for email notifications
- **CORS** enabled for cross-origin requests

## 🎨 Design System

### Colors
- **Primary**: #0046FF (AdmirerX blue)
- **Secondary**: #F5F6FA
- **Accent**: #FF6B00
- **Text Dark**: #2E2E2E
- **Text Light**: #6E6E6E
- **Background**: #FFFFFF

### Typography
- **Font Family**: Inter, sans-serif
- **H1**: 48px / 700 weight
- **H2**: 36px / 700 weight
- **H3**: 28px / 600 weight
- **Body1**: 18px / 400 weight
- **Body2**: 16px / 400 weight

### Spacing & Layout
- **Base unit**: 8px
- **Border radius**: 12px
- **Container max-width**: 1440px
- **Grid**: 12-column with 80px gutters

## 📁 Project Structure

```
admirx-frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── ContactForm.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── store/
│   │   ├── store.js
│   │   └── slices/
│   │       └── contactSlice.js
│   ├── theme/
│   │   └── theme.js
│   ├── App.jsx
│   └── main.jsx

admirx-backend/
├── models/
│   └── Contact.js
├── routes/
│   └── contact.js
├── utils/
│   └── email.js
└── server.js
```

## 🚀 Getting Started

### Prerequisites
- Node.js 20+
- MongoDB (local or cloud)
- npm or yarn

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd admirx-frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd admirx-backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with your configuration:
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

4. Start the development server:
```bash
npm run dev
```

The backend API will be available at `http://localhost:5000`

## 🌐 Deployment

### Frontend (Vercel)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Set build command: `npm run build`
4. Set output directory: `dist`
5. Deploy!

### Backend (Render)
1. Connect your GitHub repository to Render
2. Set build command: `npm install`
3. Set start command: `npm start`
4. Add environment variables in Render dashboard
5. Deploy!

## 📱 Features

- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Integrated contact form with email notifications
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Fast Loading**: Optimized images and code splitting
- **Accessibility**: WCAG compliant components

## 🎯 Pages

### Home Page
- Hero section with compelling CTA
- Why Choose AdmirerX section
- Our Services showcase
- Let's Build Success Together section
- Bottom banner CTA

### Navigation
- Sticky header with smooth scroll
- Mobile-responsive hamburger menu
- Contact form integration

## 📧 Contact Form

The contact form includes:
- Name, email, company, phone fields
- Service interest selection
- Message textarea
- Form validation
- Email notifications to admin
- Success/error feedback

## 🔧 API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (admin)
- `GET /api/health` - Health check

## 🎨 Customization

The theme can be easily customized by modifying `src/theme/theme.js`:
- Colors
- Typography
- Spacing
- Component styles
- Breakpoints

## 📄 License

This project is proprietary to AdmirerX.

## 🤝 Support

For support or questions, please contact the development team.
