'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronRight, CheckCircle, Circle, Target, Calendar, Clock } from 'lucide-react';

export default function PlanBuilder() {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [generatedPlan, setGeneratedPlan] = useState(null);
  const [expandedBlocks, setExpandedBlocks] = useState({});
  const [completedTasks, setCompletedTasks] = useState({});

  const goals = [
    'Learn Web Development',
    'Improve Focus & Productivity',
    'Build Healthy Habits',
    'Master a New Language',
    'Advance Career Skills'
  ];

  const samplePlan = {
    title: 'Web Development Mastery Plan',
    duration: '8 weeks',
    blocks: [
      {
        id: 1,
        title: 'Morning Routine',
        time: '7:00 - 8:00 AM',
        tasks: [
          'Review yesterday\'s code',
          'Plan today\'s learning goals',
          'Quick meditation (10 min)'
        ]
      },
      {
        id: 2,
        title: 'Study Block',
        time: '9:00 - 11:00 AM',
        tasks: [
          'JavaScript fundamentals practice',
          'Build mini project',
          'Take notes on key concepts'
        ]
      },
      {
        id: 3,
        title: 'Practice Session',
        time: '2:00 - 4:00 PM',
        tasks: [
          'Code challenges on LeetCode',
          'Work on portfolio project',
          'Review and refactor code'
        ]
      },
      {
        id: 4,
        title: 'Evening Review',
        time: '8:00 - 9:00 PM',
        tasks: [
          'Reflect on today\'s progress',
          'Plan tomorrow\'s tasks',
          'Update learning journal'
        ]
      }
    ]
  };

  const handleGoalSelect = (goal) => {
    setSelectedGoal(goal);
  };

  const generatePlan = () => {
    // Simulate AI plan generation
    setTimeout(() => {
      setGeneratedPlan(samplePlan);
    }, 1000);
  };

  const toggleBlock = (blockId) => {
    setExpandedBlocks(prev => ({
      ...prev,
      [blockId]: !prev[blockId]
    }));
  };

  const toggleTask = (blockId, taskIndex) => {
    const taskKey = `${blockId}-${taskIndex}`;
    setCompletedTasks(prev => ({
      ...prev,
      [taskKey]: !prev[taskKey]
    }));
  };

  const startPlan = () => {
    // Simulate starting the plan
    alert('Plan started! You\'ll receive daily reminders and progress tracking.');
  };

  return (
    <section id="plan" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Build Your Personal
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Growth Plan
            </span>
          </h2>
          <p className="text-xl text-white/80">
            Let AI create a customized plan tailored to your goals and schedule
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl overflow-hidden"
        >
          {!generatedPlan ? (
            <div className="p-8">
              {/* Step 1: Goal Selection */}
              <div className="mb-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-white font-semibold text-xl">Select Your Goal</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {goals.map((goal) => (
                    <motion.button
                      key={goal}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => handleGoalSelect(goal)}
                      className={`p-4 rounded-xl text-left transition-all duration-200 ${
                        selectedGoal === goal
                          ? 'bg-gradient-to-r from-primary/20 to-secondary/20 border-2 border-primary'
                          : 'bg-white/5 border border-white/20 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <Target className="text-primary" size={20} />
                        <span className="text-white font-medium">{goal}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Step 2: Generate Plan */}
              {selectedGoal && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      2
                    </div>
                    <h3 className="text-white font-semibold text-xl">AI Plan Generation</h3>
                  </div>
                  
                  <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mb-6">
                    <p className="text-white/90 mb-4">
                      Selected Goal: <span className="font-semibold text-primary">{selectedGoal}</span>
                    </p>
                    <p className="text-white/70 text-sm">
                      AI will create a personalized plan with daily tasks, milestones, and progress tracking.
                    </p>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={generatePlan}
                    className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Generate My Plan
                  </motion.button>
                </motion.div>
              )}
            </div>
          ) : (
            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-8"
              >
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-8">
                  <div>
                    <h3 className="text-white font-bold text-2xl mb-2">{generatedPlan.title}</h3>
                    <div className="flex items-center space-x-4 text-white/70">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span className="text-sm">{generatedPlan.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span className="text-sm">4 blocks/day</span>
                      </div>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={startPlan}
                    className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    Start This Plan
                  </motion.button>
                </div>

                {/* Plan Blocks */}
                <div className="space-y-4">
                  {generatedPlan.blocks.map((block) => (
                    <motion.div
                      key={block.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: block.id * 0.1 }}
                      className="bg-white/5 border border-white/20 rounded-xl overflow-hidden"
                    >
                      <motion.button
                        whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                        onClick={() => toggleBlock(block.id)}
                        className="w-full p-4 flex items-center justify-between text-left"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="w-10 h-10 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                            <Clock className="text-white" size={16} />
                          </div>
                          <div>
                            <h4 className="text-white font-semibold">{block.title}</h4>
                            <p className="text-white/60 text-sm">{block.time}</p>
                          </div>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedBlocks[block.id] ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight className="text-white/60" size={20} />
                        </motion.div>
                      </motion.button>

                      <AnimatePresence>
                        {expandedBlocks[block.id] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="border-t border-white/10"
                          >
                            <div className="p-4 space-y-3">
                              {block.tasks.map((task, index) => (
                                <motion.div
                                  key={index}
                                  whileHover={{ x: 5 }}
                                  className="flex items-center space-x-3 cursor-pointer"
                                  onClick={() => toggleTask(block.id, index)}
                                >
                                  {completedTasks[`${block.id}-${index}`] ? (
                                    <CheckCircle className="text-green-400" size={20} />
                                  ) : (
                                    <Circle className="text-white/40" size={20} />
                                  )}
                                  <span className={`text-sm ${
                                    completedTasks[`${block.id}-${index}`] 
                                      ? 'text-white/60 line-through' 
                                      : 'text-white/80'
                                  }`}>
                                    {task}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>

                {/* Progress Bar */}
                <div className="mt-8 p-4 bg-white/5 rounded-xl">
                  <div className="flex justify-between text-sm text-white/70 mb-2">
                    <span>Daily Progress</span>
                    <span>3/12 tasks completed</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '25%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </section>
  );
}