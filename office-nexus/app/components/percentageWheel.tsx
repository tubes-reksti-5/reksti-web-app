import React from 'react';

interface PercentageWheelProps {
  percentage: number;
  size?: number; // Add an optional prop to specify the size
}

const PercentageWheel: React.FC<PercentageWheelProps> = ({ percentage, size = 100 }) => {
  const radius = (size - 20) / 2; // Adjust radius calculation to account for stroke width
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#ccc"
        strokeWidth="10"
      />

      {/* Percentage arc */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#7ca9fc"
        strokeWidth="10"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />

      {/* Text */}
      <text
        x={size / 2}
        y={size / 2}
        dominantBaseline="middle"
        textAnchor="middle"
        fontSize={size / 5}
        fill="#000"
        className="font-extrabold"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default PercentageWheel;