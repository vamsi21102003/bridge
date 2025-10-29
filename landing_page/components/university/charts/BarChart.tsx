'use client';

interface BarChartData {
  name: string;
  placed: number;
  total: number;
  rate: string;
}

interface BarChartProps {
  data: BarChartData[];
  height?: number;
}

export function BarChart({ data, height = 300 }: BarChartProps) {
  const maxValue = Math.max(...data.map(item => item.total));

  return (
    <div className="w-full" style={{ height }}>
      <div className="flex items-end justify-between h-full space-x-4 px-4">
        {data.map((item, index) => {
          const placedHeight = (item.placed / maxValue) * (height - 80);
          const totalHeight = (item.total / maxValue) * (height - 80);
          
          return (
            <div key={item.name} className="flex-1 flex flex-col items-center">
              {/* Bar */}
              <div className="relative w-full max-w-16 mb-4">
                {/* Total bar (background) */}
                <div
                  className="w-full bg-gray-200 rounded-t-lg transition-all duration-1000 ease-out"
                  style={{
                    height: totalHeight,
                    animationDelay: `${index * 0.1}s`,
                  }}
                ></div>
                
                {/* Placed bar (foreground) */}
                <div
                  className="absolute bottom-0 w-full bg-primary-600 rounded-t-lg transition-all duration-1000 ease-out"
                  style={{
                    height: placedHeight,
                    animationDelay: `${index * 0.1 + 0.2}s`,
                  }}
                ></div>
                
                {/* Value label */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-medium text-gray-700 whitespace-nowrap">
                  {item.rate}%
                </div>
              </div>
              
              {/* Label */}
              <div className="text-center">
                <div className="text-sm font-medium text-gray-900 mb-1">{item.name}</div>
                <div className="text-xs text-gray-600">
                  {item.placed.toLocaleString()}/{item.total.toLocaleString()}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      {/* Legend */}
      <div className="flex justify-center mt-4 space-x-6">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-primary-600 rounded"></div>
          <span className="text-xs text-gray-600">Placed</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-200 rounded"></div>
          <span className="text-xs text-gray-600">Total</span>
        </div>
      </div>
    </div>
  );
}