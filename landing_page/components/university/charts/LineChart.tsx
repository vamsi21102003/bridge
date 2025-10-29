'use client';

interface LineChartData {
  year: string;
  placed: number;
  total: number;
  rate: string;
}

interface LineChartProps {
  data: LineChartData[];
  height?: number;
}

export function LineChart({ data, height = 300 }: LineChartProps) {
  const maxValue = Math.max(...data.map(item => item.total));
  const chartHeight = height - 60;
  const chartWidth = 400;

  const getX = (index: number) => (index / (data.length - 1)) * chartWidth;
  const getY = (value: number) => chartHeight - (value / maxValue) * chartHeight;

  const placedPath = data.map((item, index) => {
    const x = getX(index);
    const y = getY(item.placed);
    return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ');

  const totalPath = data.map((item, index) => {
    const x = getX(index);
    const y = getY(item.total);
    return index === 0 ? `M ${x} ${y}` : `L ${x} ${y}`;
  }).join(' ');

  return (
    <div className="w-full" style={{ height }}>
      <div className="relative">
        <svg width="100%" height={chartHeight} viewBox={`0 0 ${chartWidth} ${chartHeight}`} className="overflow-visible">
          {/* Grid lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((ratio) => (
            <line
              key={ratio}
              x1="0"
              y1={chartHeight * ratio}
              x2={chartWidth}
              y2={chartHeight * ratio}
              stroke="#f3f4f6"
              strokeWidth="1"
            />
          ))}
          
          {/* Total line */}
          <path
            d={totalPath}
            fill="none"
            stroke="#9CA3AF"
            strokeWidth="2"
            strokeDasharray="5,5"
            className="animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          />
          
          {/* Placed line */}
          <path
            d={placedPath}
            fill="none"
            stroke="#3B82F6"
            strokeWidth="3"
            className="animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          />
          
          {/* Data points */}
          {data.map((item, index) => (
            <g key={item.year}>
              {/* Total point */}
              <circle
                cx={getX(index)}
                cy={getY(item.total)}
                r="4"
                fill="#9CA3AF"
                className="animate-scale-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              />
              
              {/* Placed point */}
              <circle
                cx={getX(index)}
                cy={getY(item.placed)}
                r="5"
                fill="#3B82F6"
                className="animate-scale-in"
                style={{ animationDelay: `${0.8 + index * 0.1}s` }}
              />
            </g>
          ))}
        </svg>
        
        {/* X-axis labels */}
        <div className="flex justify-between mt-4 px-2">
          {data.map((item) => (
            <div key={item.year} className="text-xs text-gray-600 text-center">
              <div className="font-medium">{item.year}</div>
              <div className="text-primary-600">{item.rate}%</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Legend */}
      <div className="flex justify-center mt-4 space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
          <span className="text-xs text-gray-600">Students Placed</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <span className="text-xs text-gray-600">Total Students</span>
        </div>
      </div>
    </div>
  );
}