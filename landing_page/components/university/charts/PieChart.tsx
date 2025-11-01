'use client';

interface PieChartData {
  name: string;
  value: number;
  percentage: number;
}

interface PieChartProps {
  data: PieChartData[];
  height?: number;
}

export function PieChart({ data, height = 300 }: PieChartProps) {
  const colors = [
    '#3B82F6', // Blue
    '#10B981', // Green
    '#F59E0B', // Yellow
    '#EF4444', // Red
    '#8B5CF6', // Purple
    '#F97316', // Orange
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);
  let cumulativePercentage = 0;

  return (
    <div className="flex items-center justify-center" style={{ height }}>
      <div className="flex items-center space-x-8">
        {/* SVG Pie Chart */}
        <div className="relative">
          <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90">
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="none"
              stroke="#f3f4f6"
              strokeWidth="20"
            />
            {data.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const strokeDasharray = `${percentage * 5.03} 502`;
              const strokeDashoffset = -cumulativePercentage * 5.03;
              cumulativePercentage += percentage;

              return (
                <circle
                  key={item.name}
                  cx="100"
                  cy="100"
                  r="80"
                  fill="none"
                  stroke={colors[index % colors.length]}
                  strokeWidth="20"
                  strokeDasharray={strokeDasharray}
                  strokeDashoffset={strokeDashoffset}
                  className="transition-all duration-1000 ease-out"
                  style={{
                    animation: `chartEnter 1s ease-out ${index * 0.1}s both`,
                  }}
                />
              );
            })}
          </svg>
          
          {/* Center Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{total.toLocaleString()}</div>
              <div className="text-sm text-gray-600">Total</div>
            </div>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-3">
          {data.map((item, index) => (
            <div key={item.name} className="flex items-center space-x-3">
              <div
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: colors[index % colors.length] }}
              ></div>
              <div className="flex-1">
                <div className="text-sm font-medium text-gray-900">{item.name}</div>
                <div className="text-xs text-gray-600">
                  {item.value.toLocaleString()} ({item.percentage}%)
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}