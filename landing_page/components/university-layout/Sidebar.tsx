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
    <div className="fixed inset-y-0 left-0 z-50 sidebar-container bg-white shadow-lg border-r border-gray-200">
      <div className="flex flex-col h-full w-full">
        {/* Logo */}
        <div className="sidebar-header flex items-center px-4 py-4 border-b border-gray-200 w-full overflow-hidden">
          <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
            <span className="text-white font-bold text-sm">B</span>
          </div>
          <div className="min-w-0 flex-1 overflow-hidden sidebar-branding-text">
            <h2 className="text-lg font-bold text-gray-900 truncate whitespace-nowrap">BPUT</h2>
            <p className="text-xs text-gray-500 truncate whitespace-nowrap">University Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div>
                  <button
                    onClick={() => toggleSection(item.name.toLowerCase())}
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                      item.current
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                    )}
                  >
                    <div className="flex items-center min-w-0 flex-1">
                      <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                      <span className="truncate">{item.name}</span>
                    </div>
                    {expandedSections.includes(item.name.toLowerCase()) ? (
                      <ChevronDown className="w-4 h-4" />
                    ) : (
                      <ChevronRight className="w-4 h-4" />
                    )}
                  </button>
                  
                  {expandedSections.includes(item.name.toLowerCase()) && (
                    <div className="mt-2 ml-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className={cn(
                            'block px-3 py-2 text-sm rounded-lg transition-colors duration-200 truncate',
                            child.current
                              ? 'bg-primary-100 text-primary-700 font-medium'
                              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
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
                    'flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors duration-200',
                    item.current
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  )}
                >
                  <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                  <span className="truncate">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* User Info */}
        <div className="px-4 py-4 border-t border-gray-200 w-full overflow-hidden">
          <div className="flex items-center w-full">
            <div className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-semibold text-sm">AD</span>
            </div>
            <div className="ml-3 min-w-0 flex-1 overflow-hidden">
              <p className="text-sm font-medium text-gray-900 truncate whitespace-nowrap">Admin User</p>
              <p className="text-xs text-gray-500 truncate whitespace-nowrap">University Admin</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}