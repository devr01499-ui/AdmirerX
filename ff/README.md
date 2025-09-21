# AdmireX BPO Services Website

A modern, responsive website for AdmireX BPO services built with React and Material-UI.

## 🚀 Tech Stack

- **React 18** with functional components and hooks
- **Material-UI 5** for UI components and styling
- **React Router v6** for navigation
- **Inter font** for typography

## 🎨 Theme Palette

- **Background**: #FFFFFF
- **Primary Color**: #4C4CFF (bluish-purple)
- **Secondary Color**: #6A00FF (purple accent)
- **Card Surface**: #F8F9FC
- **Text Dark**: #1F1F1F
- **Text Light**: #5C5C5C
- **Accent Color**: #FF6B00 (orange)

## 📁 Project Structure

```
ff/
├── components/
│   ├── Header.jsx          # Navigation header
│   └── Footer.jsx          # Site footer
├── pages/
│   ├── Home.jsx            # Homepage
│   ├── AboutUs.jsx         # About us page
│   ├── Services.jsx        # Services page
│   ├── Career.jsx          # Career page
│   ├── PartnerWithUs.jsx   # Partnership page
│   └── Contact.jsx         # Contact page
├── assets/
│   └── logo.svg            # Company logo
├── theme.js                # MUI theme configuration
├── App.jsx                 # Main app component
└── package.json            # Dependencies
```

## 🎯 Features

### Responsive Design
- **Desktop**: 3-column grid layout
- **Tablet**: 2-column grid layout  
- **Mobile**: 1-column stacked layout
- **Breakpoints**: xs (0), sm (600), md (960), lg (1024), xl (1440)

### Interactive Elements
- **Hover Effects**: Cards elevate with border highlights
- **Form Validation**: Required fields with success feedback
- **Smooth Animations**: All interactions have smooth transitions
- **Active Navigation**: Current page highlighted in header

### Pages
1. **Home**: Hero section, about preview, services preview, why choose us
2. **About Us**: Mission & vision, team section
3. **Services**: 6 service cards with images and descriptions
4. **Career**: Job openings with application links
5. **Partner With Us**: Benefits and partnership form
6. **Contact**: Contact information and contact form

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm start
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📱 Responsive Grid System

- **Cards**: 24px gap between cards
- **Card Background**: #F8F9FC
- **Hover Effects**: Elevation + #4C4CFF border highlight
- **Card Structure**: Top image (rounded), title, body text

## 🎨 Styling

- **Typography**: Inter font family
- **Spacing**: 8px base unit
- **Border Radius**: 12px for cards
- **Shadows**: MUI elevation system
- **Colors**: Consistent theme palette throughout

## 📧 Contact Information

- **Address**: AdmireX Pvt Ltd, 123 Corporate Park, Gurgaon, India
- **Phone**: +91 98765 43210
- **Email**: info@admirex.com

## 🔧 Customization

The theme can be easily customized by modifying `theme.js`:
- Colors
- Typography
- Spacing
- Component styles
- Breakpoints

## 📄 License

This project is proprietary to AdmireX.
