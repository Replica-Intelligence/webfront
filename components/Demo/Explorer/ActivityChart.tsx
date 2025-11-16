
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { type ValueType } from 'recharts/types/component/DefaultTooltipContent';

interface ActivityChartProps {
  data: number[];
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean, payload?: { value: ValueType }[], label?: string | number }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-3 rounded-lg shadow-lg">
        <p className="text-sm text-cyan-400">{`Hour: ${label}:00`}</p>
        <p className="text-base font-bold text-white">{`Activity: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export const ActivityChart: React.FC<ActivityChartProps> = ({ data }) => {
  const chartData = data.map((value, index) => ({
    hour: index,
    activity: value,
  }));

  return (
    <div style={{ width: '100%', height: 250 }}>
      <ResponsiveContainer>
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 20,
            left: -10,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#4b5563" />
          <XAxis dataKey="hour" stroke="#9ca3af" fontSize={12} />
          <YAxis stroke="#9ca3af" fontSize={12} />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(74, 222, 128, 0.1)' }} />
          <Bar dataKey="activity" fill="#22d3ee" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
