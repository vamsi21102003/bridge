# Scroll-Triggered Modal Implementation Guide

## Overview
This implementation provides a beautiful, animated modal that appears when users scroll to the bottom of the page. The modal matches your existing authentication design with smooth animations and social login buttons.

## Features
- ✅ Scroll detection with customizable threshold
- ✅ Smooth animations using Framer Motion
- ✅ Matches existing authentication design
- ✅ Social login buttons with hover effects
- ✅ Role selection (Student/Employer/Institution)
- ✅ Form validation with react-hook-form
- ✅ Responsive design
- ✅ Accessibility features
- ✅ Session-based control (show once per session)

## Components Created

### 1. ScrollTriggeredModal (`/components/ui/ScrollTriggeredModal.tsx`)
The main modal component that displays the sign-in form with:
- Left panel: Sign-in form with social buttons and role selection
- Right panel: Welcome message with gradient background
- Smooth entrance/exit animations
- Form validation and submission handling

### 2. useScrollToBottom Hook (`/hooks/useScrollToBottom.ts`)
Custom hook that detects when user scrolls to bottom:
- Configurable scroll threshold (default: 95%)
- Delay before showing modal (default: 500ms)
- Session control (show only once per session)
- Performance optimized with throttling

## Usage

### Basic Implementation
```tsx
import { ScrollTriggeredModal } from '@/components/ui/ScrollTriggeredModal';
import { useScrollToBottom } from '@/hooks/useScrollToBottom';
import { AnimatePresence } from 'framer-motion';

export default function YourPage() {
  const { isTriggered, resetTrigger } = useScrollToBottom({
    threshold: 90, // Trigger when 90% scrolled
    delay: 1000,   // 1 second delay
    onlyOnce: true // Show only once per session
  });

  const handleModalClose = () => {
    resetTrigger();
  };

  const handleSignIn = (data) => {
    console.log('Sign in data:', data);
    // Handle sign in logic
    resetTrigger();
  };

  const handleSocialLogin = (provider) => {
    console.log('Social login:', provider);
    // Handle social login
    resetTrigger();
  };

  return (
    <div>
      {/* Your page content */}
      
      <AnimatePresence>
        {isTriggered && (
          <ScrollTriggeredModal
            onClose={handleModalClose}
            onSubmit={handleSignIn}
            onSocialLogin={handleSocialLogin}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
```

### Hook Options
```tsx
const { isTriggered, resetTrigger, resetSession } = useScrollToBottom({
  threshold: 95,    // Percentage from bottom (0-100)
  delay: 500,       // Delay in milliseconds
  onlyOnce: true    // Show only once per session
});
```

### Modal Props
```tsx
interface ScrollTriggeredModalProps {
  onClose?: () => void;                    // Called when modal is closed
  onSubmit?: (data: SignInForm & { role: Role }) => void; // Form submission
  onSocialLogin?: (provider: string) => void; // Social login handler
}
```

## Testing

### Test Page
Visit `/test-modal` to see the modal in action:
- Scroll down to 80% to trigger the modal
- Test all social login buttons
- Test role selection and form submission
- Test modal close functionality

### Integration with Main Page
The modal is already integrated into the main landing page (`/app/page.tsx`):
- Triggers at 90% scroll
- 1 second delay after reaching threshold
- Shows only once per session

## Customization

### Styling
The modal uses Tailwind CSS classes and can be customized by modifying:
- Colors: Update gradient classes (`from-purple-500`, `to-indigo-600`, etc.)
- Animations: Modify Framer Motion animation properties
- Layout: Adjust responsive breakpoints and spacing

### Animation Timing
Modify animation delays in `ScrollTriggeredModal.tsx`:
```tsx
// Stagger animations for smooth entrance
initial={{ y: -20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ delay: 0.3, duration: 0.4 }}
```

### Social Providers
Update the `SOCIAL_PROVIDERS` array to add/remove social login options:
```tsx
const SOCIAL_PROVIDERS = [
  { provider: 'google', icon: 'G', color: 'from-red-500 to-red-600' },
  { provider: 'facebook', icon: 'f', color: 'from-blue-600 to-blue-700' },
  // Add more providers...
];
```

## Performance Considerations
- Scroll events are throttled (100ms) for better performance
- Modal only renders when triggered (conditional rendering)
- Animations use GPU acceleration with `transform` properties
- Session storage prevents unnecessary re-triggers

## Accessibility Features
- Proper ARIA labels and roles
- Keyboard navigation support
- Focus management
- Screen reader friendly
- High contrast mode support

## Browser Support
- Modern browsers with CSS Grid and Flexbox support
- Framer Motion animations work in all major browsers
- Graceful degradation for older browsers

## Dependencies
- `framer-motion`: For smooth animations
- `react-hook-form`: For form validation
- `lucide-react`: For icons
- `tailwindcss`: For styling

## Next Steps
1. Integrate with your authentication system
2. Add backend API calls for sign-in/social login
3. Customize styling to match your brand
4. Add analytics tracking for modal interactions
5. Consider A/B testing different trigger thresholds