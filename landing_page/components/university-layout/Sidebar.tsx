'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Building2, 
  Users, 
  Briefcase, 
  BarChart3, 
  Brain, 
  Settings,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/shared/helpers';

interface SidebarProps {
  currentPage: string;
}

export function Sidebar({ currentPage }: SidebarProps) {
  const pathname = usePathname();
  const [expandedSections, setExpandedSections] = useState<string[]>(['analytics']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const navigation = [
    {
      name: 'Dashboard',
      href: '/university/dashboard',
      icon: LayoutDashboard,
      current: pathname === '/university/dashboard',
    },
    {
      name: 'Colleges',
      href: '/university/colleges',
      icon: Building2,
      current: pathname.startsWith('/university/colleges'),
    },
    {
      name: 'Students',
      href: '/university/students',
      icon: Users,
      current: pathname.startsWith('/university/students'),
    },
    {
      name: 'Employers',
      href: '/university/employers',
      icon: Briefcase,
      current: pathname.startsWith('/university/employers'),
    },
    {
      name: 'Analytics',
      icon: BarChart3,
      current: pathname.startsWith('/university/analytics'),
      children: [
        {
          name: 'Skill Gap Analysis',
          href: '/university/analytics',
          current: pathname === '/university/analytics',
        },
        {
          name: 'Placement Trends',
          href: '/university/analytics/placement-trends',
          current: pathname === '/university/analytics/placement-trends',
        },
        {
          name: 'Industry Insights',
          href: '/university/analytics/industry-insights',
          current: pathname === '/university/analytics/industry-insights',
        },
        {
          name: 'Reports',
          href: '/university/analytics/reports',
          current: pathname === '/university/analytics/reports',
        },
      ],
    },
    {
      name: 'AI Insights',
      href: '/university/ai-insights',
      icon: Brain,
      current: pathname.startsWith('/university/ai-insights'),
    },
    {
      name: 'Admin',
      href: '/university/admin',
      icon: Settings,
      current: pathname.startsWith('/university/admin'),
    },
  ];

  return (
    <div className="fixed inset-y-0 right-0 z-50 sidebar-container bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 shadow-2xl border-l border-gradient-to-b from-blue-200 to-purple-200 university-website">
      <div className="flex flex-col h-full w-full backdrop-blur-sm">
        {/* Enhanced Logo */}
        <div className="sidebar-header flex items-center px-4 py-4 border-b border-gradient-to-r from-blue-200 to-purple-200 w-full overflow-hidden slide-in-right">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-3 flex-shrink-0 glow-effect hover:scale-110 transition-transform duration-300 cursor-pointer">
            <span className="text-white font-bold text-lg">🎓</span>
          </div>
          <div className="min-w-0 flex-1 overflow-hidden sidebar-branding-text">
            <h2 className="text-lg font-bold gradient-text truncate whitespace-nowrap hover:scale-105 transition-transform duration-300 cursor-pointer">
              Uni-BriDGe
            </h2>
            <p className="text-xs text-gray-600 truncate whitespace-nowrap font-medium">
              ✨ University Portal
            </p>
          </div>
        </div>

        {/* Enhanced Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.name.toLowerCase())}
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-xl transition-all duration-300 group hover:scale-105 interactive-hover',
                      item.current
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg glow-effect'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md'
                    )}
                  >
                    <div className="flex items-center min-w-0 flex-1">
                      <item.icon className="w-5 h-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                      <span className="truncate font-medium">{item.name}</span>
                    </div>
                    {expandedSections.includes(item.name.toLowerCase()) ? (
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                    ) : (
                      <ChevronRight className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
                    )}
                  </button>
                  
                  {expandedSections.includes(item.name.toLowerCase()) && (
                    <div className="mt-2 ml-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            'block px-3 py-2 text-sm rounded-lg transition-all duration-300 truncate hover:scale-105 interactive-hover group',
                            child.current
                              ? 'bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-medium shadow-md'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50'
                          )}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center px-3 py-3 text-sm font-medium rounded-xl transition-all duration-300 group hover:scale-105 interactive-hover',
                    item.current
                      ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg glow-effect'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md'
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="truncate font-medium">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Enhanced User Info */}
        <div className="px-4 py-4 border-t border-gradient-to-r from-blue-200 to-purple-200 w-full overflow-hidden slide-in-bottom">
          <div className="flex items-center w-full p-3 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 transition-all duration-300 cursor-pointer group hover:scale-105">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 glow-effect group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-lg">👨‍💼</span>
            </div>
            <div className="ml-3 min-w-0 flex-1 overflow-hidden">
              <p className="text-sm font-bold text-gray-900 truncate whitespace-nowrap group-hover:text-blue-700 transition-colors">
                🎯 Admin User
              </p>
              <p className="text-xs text-gray-600 truncate whitespace-nowrap font-medium group-hover:text-gray-800 transition-colors">
                ⚡ University Admin
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}