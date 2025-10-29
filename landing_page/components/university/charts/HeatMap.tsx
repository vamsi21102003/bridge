'use client';

interface HeatMapData {
  college: string;
  district: string;
  score: number;
}

interface HeatMapProps {
  data: HeatMapData[];
  height?: number;
}

export function HeatMap({ data, height = 300 }: HeatMapProps) {
  const maxScore = Math.max(...data.map(item => item.score));
  const minScore = Math.min(...data.map(item => item.score));

  const getIntensity = (score: number) => {
    return (score - minScore) / (maxScore - minScore);
  };

  const getColor = (intensity: number) => {
    // Color scale from light blue to dark blue
    const lightness = 90 - (intensity * 40); // 90% to 50%
    return `hsl(220, 70%, ${lightness}%)`;
  };

  return (
    <div className="w-full" style={{ height }}>
      <div className="space-y-3">
        {data.map((item, index) => (
          <div
            key={item.college}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-200 animate-fade-in"
            style={{
              backgroundColor: getColor(getIntensity(item.score)),
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="flex-1">
              <div className="font-medium text-gray-900">{item.college}</div>
              <div className="text-sm text-gray-600">{item.district}</div>
            </div>
            
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{item.score}</div>
              <div className="text-xs text-gray-600">Score</div>
            </div>
            
            {/* Score bar */}
            <div className="ml-4 w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary-600 rounded-full transition-all duration-1000 ease-out"
                style={{
                  width: `${(item.score / 100) * 100}%`,
                  animationDelay: `${index * 0.1 + 0.5}s`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Color Scale Legend */}
      <div className="mt-6 flex items-center justify-center space-x-4">
        <span className="text-xs text-gray-600">Low</span>
        <div className="flex space-x-1">
          {[0, 0.2, 0.4, 0.6, 0.8, 1].map((intensity) => (
            <div
              key={intensity}
              className="w-6 h-3 rounded"
              style={{ backgroundColor: getColor(intensity) }}
            ></div>
          ))}
        </div>
        <span className="text-xs text-gray-600">High</span>
      </div>
      
      <div className="text-center mt-2">
        <span className="text-xs text-gray-500">Employability Score Range: {minScore} - {maxScore}</span>
      </div>
    </div>
  );
}