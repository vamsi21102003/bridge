# Student Styles CSS Structure

This directory contains all the CSS files for the student dashboard, organized by component and functionality.

## Directory Structure

```
student-styles/
├── base/
│   └── reset.css                    # CSS reset and base styles
├── layout/
│   └── container.css                # Layout containers and grid systems
├── components/
│   ├── Header.css                   # Header navigation component
│   ├── Hero.css                     # Hero section component
│   ├── FeaturedUpdates.css          # Featured updates section
│   ├── JobsSection.css              # Jobs listing section
│   ├── CoursesSection.css           # Courses section
│   ├── InternshipsSection.css       # Internships section
│   ├── NetworkingSection.css        # Networking section
│   ├── MockPracticeSection.css      # Mock practice section
│   └── ProfileSidebar.css           # Profile sidebar component
├── utilities/
│   ├── animations.css               # Animation utilities and keyframes
│   └── helpers.css                  # Helper classes and utilities
├── main.css                         # Main CSS file that imports all others
└── CSS_STRUCTURE.md                 # This documentation file
```

## Usage

### Import the main CSS file in your component:
```javascript
import '../styles/student-styles/main.css';
```

### Or import individual component styles:
```javascript
import '../styles/student-styles/components/Header.css';
import '../styles/student-styles/components/Hero.css';
```

## Component CSS Files

### Header.css
- Navigation bar styles
- Mobile menu functionality
- Language selector
- Profile button
- Responsive design for all screen sizes

### Hero.css
- Hero section with animated background
- Floating shapes and glassmorphism effects
- Statistics display
- Call-to-action buttons
- Responsive hero content

### FeaturedUpdates.css
- Update cards layout
- Hover effects and animations
- Grid system for updates

### JobsSection.css
- Job cards with detailed information
- Tab navigation for job categories
- Apply buttons and skill tags
- Match badges and company info

### CoursesSection.css
- Course cards with thumbnails
- Platform badges and certificates
- Enrollment buttons
- Course statistics display

### InternshipsSection.css
- Internship opportunity cards
- Company information display
- Skills and requirements tags
- Application functionality

### NetworkingSection.css
- Professional network cards
- Profile information display
- Expertise tags
- Connection buttons

### MockPracticeSection.css
- Practice test cards
- Difficulty badges
- Feature lists
- Statistics display
- Gradient background effects

### ProfileSidebar.css
- Sliding sidebar functionality
- Profile information display
- Navigation menu items
- Progress indicators
- Pro feature badges

## Utility Classes

### Animation Classes
- `.animate-slide-up` - Slide up animation
- `.animate-fade-in` - Fade in animation
- `.animate-scale-in` - Scale in animation
- `.hover-lift` - Lift effect on hover
- `.hover-scale` - Scale effect on hover

### Helper Classes
- Text utilities (alignment, weight)
- Spacing utilities (margin, padding)
- Display utilities (flex, grid, block)
- Color utilities (text, background)
- Responsive utilities

## Responsive Design

All components include responsive design with breakpoints:
- Desktop: 1024px and above
- Tablet: 768px to 1023px
- Mobile: 767px and below
- Small Mobile: 480px and below

## Color Scheme

### Primary Colors
- Primary Blue: `#667eea`
- Secondary Purple: `#764ba2`
- Success Green: `#48bb78`
- Warning Yellow: `#feca57`
- Error Red: `#ff6b6b`

### Neutral Colors
- Text Primary: `#2d3748`
- Text Secondary: `#718096`
- Background: `#f8fafc`
- White: `#ffffff`

## Best Practices

1. **Component Isolation**: Each component has its own CSS file
2. **Utility First**: Use utility classes for common patterns
3. **Responsive Design**: Mobile-first approach with progressive enhancement
4. **Accessibility**: Focus states and keyboard navigation support
5. **Performance**: Optimized animations and transitions
6. **Maintainability**: Clear naming conventions and organization

## Adding New Components

When adding a new component:

1. Create a new CSS file in `components/` directory
2. Follow the existing naming convention
3. Include responsive design breakpoints
4. Add hover states and transitions
5. Import the new file in `main.css`
6. Update this documentation

## Browser Support

- Chrome 60+
- Firefox 60+
- Safari 12+
- Edge 79+

## Performance Considerations

- CSS is organized for optimal loading
- Animations use `transform` and `opacity` for better performance
- Backdrop filters are used sparingly
- Critical CSS is inlined where necessary