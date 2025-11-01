'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'glass' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', isLoading, children, disabled, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95 hover:shadow-xl btn-enhanced animate-persistent'
    
    const variants = {
      primary: 'bg-gradient-to-r from-primary via-secondary to-accent text-white hover:shadow-2xl hover:shadow-primary/25 hover:scale-105 hover:rotate-1 bg-size-200 hover:bg-pos-100 animate-gradient-shift',
      secondary: 'bg-gradient-to-r from-accent to-secondary text-white hover:shadow-2xl hover:shadow-accent/25 hover:scale-105 hover:-rotate-1 transform transition-all duration-300',
      glass: 'glass-button hover:scale-105 hover:shadow-2xl hover:shadow-white/10 backdrop-blur-xl border border-white/20',
      outline: 'border-2 border-primary text-primary hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transform transition-all duration-300',
      ghost: 'bg-transparent hover:bg-gradient-to-r hover:from-gray-50 hover:to-gray-100 text-gray-700 hover:text-gray-900 hover:scale-105 transform transition-all duration-300',
    }
    
    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    }

    return (
      <button
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
        ) : null}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }