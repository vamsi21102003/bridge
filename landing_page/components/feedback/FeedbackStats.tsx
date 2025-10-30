'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, TrendingUp, Users, Award, MessageSquare, ThumbsUp } from 'lucide-react';

interface StatItem {
  icon: React.ComponentType<any>;
  label: string;
  value: number;
  suffix?: string;
  color: string;
  trend: string;
}

const stats: StatItem[] = [
  {
    icon: MessageSquare,
    label: "Total Reviews",
    value: 1247,
    color: "purple",
    trend: "+12%"
  },
  {
    icon: Star,
    label: "Average Rating",
    value: 4.8,
    suffix: "/5",
    color: "yellow",
    trend: "+0.3"
  },
  {
    icon: ThumbsUp,
    label: "Positive Reviews",
    value: 94,
    suffix: "%",
    color: "green",
    trend: "+8%"
  },
  {
    icon: Users,
    label: "Happy Candidates",
    value: 892,
    color: "blue",
    trend: "+15%"
  },
  {
    icon: Award,
    label: "Success Rate",
    value: 96,
    suffix: "%",
    color: "orange",
    trend: "+5%"
  },
  {
    icon: TrendingUp,
    label: "This Month",
    value: 156,
    color: "indigo",
    trend: "+23%"
  }
];

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

function AnimatedCounter({ end, duration = 2, suffix = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration]);

  return <span>{count}{suffix}</span>;
}

export default function FeedbackStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-white/20 group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <div className="flex items-center justify-between mb-4">
            <motion.div
              className={`w-12 h-12 bg-gradient-to-br from-${stat.color}-500 to-${stat.color}-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <stat.icon className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-green-500 text-sm font-medium flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              {stat.trend}
            </div>
          </div>
          
          <div className="text-3xl font-bold text-gray-900 mb-1">
            <AnimatedCounter end={stat.value} suffix={stat.suffix} />
          </div>
          
          <div className="text-sm text-gray-500 uppercase tracking-wide">
            {stat.label}
          </div>
          
          {/* Progress bar animation */}
          <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className={`h-full bg-gradient-to-r from-${stat.color}-400 to-${stat.color}-600 rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: `${Math.min((stat.value / (stat.suffix === "%" ? 100 : 2000)) * 100, 100)}%` }}
              transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}