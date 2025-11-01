import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Student routes (both direct and dashboard)
  const studentRoutes = [
    '/dashboard/student',
    '/opportunities',
    '/mentors', 
    '/games',
    '/badges',
    '/profile',
    '/ai-pro'
  ]
  
  // Check if accessing student routes
  if (studentRoutes.some(route => pathname.startsWith(route))) {
    const authToken = request.cookies.get('authToken')
    const userType = request.cookies.get('userType')
    
    // If no auth token or not a student, redirect to main auth page
    if (!authToken || userType?.value !== 'student') {
      const loginUrl = new URL('/auth?mode=login', request.url)
      loginUrl.searchParams.set('returnUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }
  
  // Check if accessing employer dashboard
  if (pathname.startsWith('/dashboard/employer')) {
    const authToken = request.cookies.get('authToken')
    const userType = request.cookies.get('userType')
    
    // If no auth token or not an employer, redirect to employer login
    if (!authToken || userType?.value !== 'employer') {
      const loginUrl = new URL('/auth?mode=login', request.url)
      loginUrl.searchParams.set('returnUrl', pathname)
      return NextResponse.redirect(loginUrl)
    }
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/opportunities/:path*',
    '/mentors/:path*',
    '/games/:path*',
    '/badges/:path*',
    '/profile/:path*',
    '/ai-pro/:path*'
  ]
}