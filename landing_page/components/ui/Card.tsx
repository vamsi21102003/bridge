'use client'

import { HTMLAttributes, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'glass' | 'solid'
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'glass', ...props }, ref) => {
    const variants = {
      default: 'bg-white border border-gray-200 shadow-sm hover:shadow-lg hover:scale-105 transform transition-all duration-300',
      glass: 'glass-card hover:scale-105 hover:shadow-2xl hover:shadow-primary/10 transform transition-all duration-500 hover:backdrop-blur-2xl',
      solid: 'bg-white shadow-lg border border-gray-100 hover:shadow-2xl hover:scale-105 hover:border-primary/20 transform transition-all duration-300',
    }

    return (
      <div
        ref={ref}
        className={cn(
          'rounded-3xl p-6 cursor-pointer group animate-persistent hover-lift',
          variants[variant],
          className
        )}
        {...props}
      />
    )
  }
)

Card.displayName = 'Card'

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex flex-col space-y-1.5 pb-4', className)}
      {...props}
    />
  )
)

CardHeader.displayName = 'CardHeader'

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn('text-2xl font-semibold leading-none tracking-tight group-hover:text-primary transition-colors duration-300', className)}
      {...props}
    />
  )
)

CardTitle.displayName = 'CardTitle'

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('', className)} {...props} />
  )
)

CardContent.displayName = 'CardContent'

export { Card, CardHeader, CardTitle, CardContent }