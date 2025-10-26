/**
 * Memory Optimization Utilities
 * Provides memory leak detection and optimization for the integrated system
 */

export class MemoryOptimizer {
  constructor() {
    this.memorySnapshots = [];
    this.cleanupTasks = new Set();
    this.isMonitoring = false;
  }

  /**
   * Initialize memory optimization
   */
  initialize() {
    if (this.isMonitoring) return;

    this.startMemoryMonitoring();
    this.setupCleanupTasks();
    
    this.isMonitoring = true;
    console.log('🧠 Memory optimization initialized');
  }

  /**
   * Start memory monitoring
   */
  startMemoryMonitoring() {
    if (!performance.memory) {
      console.warn('Memory API not available in this browser');
      return;
    }

    // Take initial snapshot
    this.takeMemorySnapshot('initial');

    // Monitor memory usage every 30 seconds
    setInterval(() => {
      this.takeMemorySnapshot('periodic');
      this.analyzeMemoryTrends();
    }, 30000);
  }

  /**
   * Take memory snapshot
   */
  takeMemorySnapshot(type = 'manual') {
    if (!performance.memory) return null;

    const snapshot = {
      timestamp: Date.now(),
      type,
      used: performance.memory.usedJSHeapSize,
      total: performance.memory.totalJSHeapSize,
      limit: performance.memory.jsHeapSizeLimit,
      usagePercentage: (performance.memory.usedJSHeapSize / performance.memory.jsHeapSizeLimit) * 100
    };

    this.memorySnapshots.push(snapshot);
    
    // Keep only last 50 snapshots
    if (this.memorySnapshots.length > 50) {
      this.memorySnapshots = this.memorySnapshots.slice(-50);
    }

    // Check for memory warnings
    if (snapshot.usagePercentage > 80) {
      console.warn('🚨 High memory usage detected:', snapshot.usagePercentage.toFixed(2) + '%');
      this.triggerMemoryCleanup();
    }

    return snapshot;
  }

  /**
   * Analyze memory trends
   */
  analyzeMemoryTrends() {
    if (this.memorySnapshots.length < 5) return;

    const recent = this.memorySnapshots.slice(-5);
    const trend = this.calculateMemoryTrend(recent);

    if (trend.isIncreasing && trend.rate > 1024 * 1024) { // 1MB increase per snapshot
      console.warn('🚨 Memory leak detected - increasing trend:', trend);
    }
  }

  /**
   * Calculate memory trend
   */
  calculateMemoryTrend(snapshots) {
    if (snapshots.length < 2) return { isIncreasing: false, rate: 0 };

    const first = snapshots[0];
    const last = snapshots[snapshots.length - 1];
    const timeDiff = last.timestamp - first.timestamp;
    const memoryDiff = last.used - first.used;
    const rate = memoryDiff / (timeDiff / 1000); // bytes per second

    return {
      isIncreasing: memoryDiff > 0,
      rate: rate,
      totalIncrease: memoryDiff,
      timeSpan: timeDiff
    };
  }

  /**
   * Setup cleanup tasks
   */
  setupCleanupTasks() {
    // Cleanup on page unload
    window.addEventListener('beforeunload', () => {
      this.performCleanup();
    });
  }

  /**
   * Trigger memory cleanup
   */
  triggerMemoryCleanup() {
    console.log('🧹 Triggering memory cleanup...');
    
    // Force garbage collection if available
    if (window.gc) {
      window.gc();
    }
    
    // Perform custom cleanup tasks
    this.performCleanup();
    
    // Take snapshot after cleanup
    setTimeout(() => {
      this.takeMemorySnapshot('post-cleanup');
    }, 1000);
  }

  /**
   * Perform cleanup tasks
   */
  performCleanup() {
    // Execute all registered cleanup tasks
    this.cleanupTasks.forEach(task => {
      try {
        task();
      } catch (error) {
        console.error('Error in cleanup task:', error);
      }
    });
  }

  /**
   * Register cleanup task
   */
  registerCleanupTask(task) {
    this.cleanupTasks.add(task);
    return () => this.cleanupTasks.delete(task); // Return unregister function
  }

  /**
   * Get memory statistics
   */
  getMemoryStats() {
    const current = this.takeMemorySnapshot('stats');
    const trend = this.memorySnapshots.length > 1 ? 
      this.calculateMemoryTrend(this.memorySnapshots.slice(-10)) : null;
    
    return {
      current,
      trend,
      snapshots: this.memorySnapshots.length,
      cleanupTasks: this.cleanupTasks.size,
      isMonitoring: this.isMonitoring
    };
  }

  /**
   * Generate memory report
   */
  generateMemoryReport() {
    const stats = this.getMemoryStats();
    const recommendations = this.getMemoryRecommendations(stats);
    
    return {
      timestamp: new Date().toISOString(),
      stats,
      recommendations,
      snapshots: this.memorySnapshots.slice(-10) // Last 10 snapshots
    };
  }

  /**
   * Get memory optimization recommendations
   */
  getMemoryRecommendations(stats) {
    const recommendations = [];
    
    if (stats.current && stats.current.usagePercentage > 70) {
      recommendations.push({
        type: 'high-usage',
        priority: 'high',
        message: 'Memory usage is high. Consider implementing lazy loading and component cleanup.'
      });
    }
    
    if (stats.trend && stats.trend.isIncreasing && stats.trend.rate > 512 * 1024) {
      recommendations.push({
        type: 'memory-leak',
        priority: 'critical',
        message: 'Potential memory leak detected. Review component lifecycle and event listener cleanup.'
      });
    }
    
    return recommendations;
  }
}

// Create singleton instance
export const memoryOptimizer = new MemoryOptimizer();

/**
 * Initialize memory optimization
 */
export const initializeMemoryOptimization = () => {
  memoryOptimizer.initialize();
  console.log('🧠 Memory optimization system initialized');
};

/**
 * Get memory optimization data
 */
export const getMemoryOptimizationData = () => {
  return memoryOptimizer.generateMemoryReport();
};

/**
 * Register a cleanup task
 */
export const registerCleanupTask = (task) => {
  return memoryOptimizer.registerCleanupTask(task);
};

/**
 * Trigger manual memory cleanup
 */
export const triggerMemoryCleanup = () => {
  memoryOptimizer.triggerMemoryCleanup();
};

export default MemoryOptimizer;