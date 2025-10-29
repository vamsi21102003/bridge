'use client'

import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Globe } from 'lucide-react'
import { useLanguage, Language } from '@/context/LanguageContext'

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en' as Language, name: t('language.english'), flag: '🇺🇸' },
    { code: 'hi' as Language, name: t('language.hindi'), flag: '🇮🇳' },
    { code: 'od' as Language, name: t('language.odia'), flag: '🇮🇳' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-white hover:text-blue-400 transition-all duration-300 rounded-lg hover:bg-white/10 font-medium"
        aria-label={t('language.selectLanguage')}
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline text-sm">{currentLanguage?.flag}</span>
        <span className="hidden md:inline text-sm">{currentLanguage?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 animate-fade-in">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center space-x-3 px-4 py-2 text-left hover:bg-gray-50 transition-colors duration-200 ${
                language === lang.code ? 'bg-blue-50 text-blue-600' : 'text-gray-700'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="font-medium">{lang.name}</span>
              {language === lang.code && (
                <div className="ml-auto w-2 h-2 bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}