# AdmirerX Header Component

A responsive React + MUI 5 header component for the AdmirerX website.

## Features

- **Responsive Design**: Desktop horizontal menu, mobile hamburger menu
- **Theme**: White background with bluish-purple (#4C4CFF) accents
- **Navigation**: React Router v6 integration with active route highlighting
- **Interactions**: Hover effects with underline animations
- **Logo**: Clickable logo that navigates to home page

## Usage

```jsx
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      {/* Your page content */}
    </div>
  );
}
```

## Menu Items

- Home (/)
- About Us (/about)
- Services (/services)
- Partner With Us (/partner)
- Contact (/contact)

## Styling

- **Background**: #FFFFFF
- **Text Color**: #1F1F1F
- **Primary Color**: #4C4CFF (hover/active states)
- **Font**: Inter, sans-serif
- **Container**: Max width 1440px

## Dependencies

- React 18
- MUI 5
- React Router v6
- @mui/icons-material

## Mobile Behavior

- Hamburger menu slides in from the right
- Same menu items stacked vertically
- Logo remains visible in mobile drawer
- Touch-friendly interaction areas
