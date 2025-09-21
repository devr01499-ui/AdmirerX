# AdmirerX Pages

This directory contains the three main pages for the AdmirerX website, each implementing the white + bluish-purple theme with responsive design.

## Pages

### 1. Career.jsx
- **Route**: `/career`
- **Features**: Job openings grid, CTA banner
- **Content**: Customer Support Executive, Data Analyst, Process Automation Engineer positions

### 2. PartnerWithUs.jsx
- **Route**: `/partner`
- **Features**: Benefits grid, partnership form
- **Content**: Scalable Solutions, Technology Integration, Confidential & Secure benefits

### 3. Contact.jsx
- **Route**: `/contact`
- **Features**: Contact methods, contact form, Google Maps embed
- **Content**: Address, phone, email, and interactive contact form

## Theme Implementation

All pages use the consistent theme palette:
- **Background**: #FFFFFF
- **Primary**: #4C4CFF (bluish-purple)
- **Secondary**: #6A00FF (purple accent)
- **Card Surface**: #F8F9FC
- **Text Dark**: #1F1F1F
- **Text Light**: #5C5C5C
- **Font**: "Inter", sans-serif

## Components Used

- **Header**: Responsive navigation with active route highlighting
- **Footer**: Company information and social links
- **Cards**: Hover effects with elevation and border highlights
- **Forms**: Outlined text fields with primary color focus
- **Buttons**: Primary color with hover effects

## Responsive Design

- **Desktop**: 2-column layouts, horizontal grids
- **Tablet**: Adjusted spacing and card layouts
- **Mobile**: Single column, stacked content, hamburger menu

## Usage

```jsx
import Career from './pages/Career';
import PartnerWithUs from './pages/PartnerWithUs';
import Contact from './pages/Contact';

// Use in your routing
<Route path="/career" element={<Career />} />
<Route path="/partner" element={<PartnerWithUs />} />
<Route path="/contact" element={<Contact />} />
```
