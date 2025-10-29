'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { LanguageSelector } from '@/components/ui/LanguageSelector'
import { useLanguage } from '@/context/LanguageContext'
import { ROUTES } from '@/constants'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()
  const { t } = useLanguage()

  const navigation = [
    { 
      name: t('header.home'), 
      href: '#hero',
      isScroll: true
    },
    { 
      name: t('header.opportunities'), 
      href: '#opportunities',
      isScroll: true
    },
    { 
      name: t('header.skills'), 
      href: '#skills',
      isScroll: true
    },
    { 
      name: t('header.guidance'), 
      href: '#guidance',
      isScroll: true
    },
    { 
      name: t('header.dashboard'), 
      href: '#dashboard',
      isScroll: true
    }
  ]

  const handleNavClick = (href: string, isScroll: boolean) => {
    if (isScroll) {
      const element = document.querySelector(href)
      if (element && element instanceof HTMLElement) {
        const headerHeight = 64 // Height of fixed header
        const elementPosition = element.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    } else {
      router.push(href)
    }
    setIsMenuOpen(false)
  }



  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-800 via-gray-900 to-slate-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href={ROUTES.HOME} className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-white">BriDGe</span>
              <span className="text-xs text-gray-300 -mt-1">{t('header.tagline')}</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              item.isScroll ? (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href, item.isScroll)}
                  className="text-white hover:text-blue-400 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-white hover:text-blue-400 transition-all duration-300 px-3 py-2 rounded-lg hover:bg-white/10 font-medium"
                >
                  {item.name}
                </Link>
              )
            ))}
          </nav>

          {/* Desktop Auth Buttons & Language Selector */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSelector />
            <Link href="/auth?mode=login">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-white hover:text-blue-400 hover:bg-white/10 px-6 py-2 rounded-lg"
              >
                {t('header.login')}
              </Button>
            </Link>
            <Link href="/auth?mode=signup">
              <Button 
                size="sm"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium"
              >
                {t('header.signUp')}
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/20">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                item.isScroll ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.href, item.isScroll)}
                    className="text-white hover:text-blue-400 transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-white/10 font-medium text-left"
                  >
                    {item.name}
                  </button>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-white hover:text-blue-400 transition-colors duration-200 px-4 py-3 rounded-lg hover:bg-white/10 font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              ))}
              
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20 mt-4">
                <div className="px-4 py-2">
                  <LanguageSelector />
                </div>
                <Link href="/auth?mode=login" className="w-full">
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="w-full text-white hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.login')}
                  </Button>
                </Link>
                <Link href="/auth?mode=signup" className="w-full">
                  <Button 
                    size="sm" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t('header.signUp')}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

    </header>
  )
}