'use client';

import React from 'react';
import Link from 'next/link';
import { Treemap, ResponsiveContainer, Tooltip } from 'recharts';
import { personaData, personaDistribution } from '@/lib/demo/persona-data';
import PersonaCard from './PersonaCard';

const COLORS = [
  '#0f766e', // teal-700
  '#0e7490', // cyan-700
  '#075985', // sky-800
  '#1d4ed8', // blue-700
  '#4338ca', // indigo-700
  '#6d28d9', // violet-700
  '#115e59', // teal-800
  '#164e63', // cyan-800
  '#1e40af', // blue-800
  '#3730a3', // indigo-800
  '#5b21b6', // violet-800
];

const CustomizedContent = (props: any) => {
    const { root, depth, x, y, width, height, index, name } = props;

    const fontSize = Math.max(Math.min(width / 7, 16), 10);

    return (
        <g>
            <rect
                x={x}
                y={y}
                width={width}
                height={height}
                style={{
                    fill: COLORS[index % COLORS.length],
                    stroke: '#111827',
                    strokeWidth: 2,
                    strokeOpacity: 1,
                }}
            />
            {width > 60 && height > 30 && (
                 <foreignObject x={x + 4} y={y + 4} width={width - 8} height={height - 8}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '100%',
                            height: '100%',
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: `${fontSize}px`,
                            textAlign: 'center',
                            lineHeight: 1.2,
                            wordWrap: 'break-word',
                        }}
                    >
                        {name}
                    </div>
                </foreignObject>
            )}
        </g>
    );
};

const CustomTooltip = ({ active, payload }: { active?: boolean, payload?: { payload: { name: string; percentage: number; } }[] }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload;
        return (
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-700 p-3 rounded-lg shadow-lg text-white">
                <p className="font-bold">{data.name}</p>
                <p className="text-sm">{`Audience Share: ${data.percentage.toFixed(1)}%`}</p>
            </div>
        );
    }
    return null;
};

const ExplorerDashboard: React.FC = () => {
    const treemapData = Object.entries(personaDistribution).map(([id, info]) => ({
        ...info,
        id: parseInt(id, 10),
    }));

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-3xl">Behavioral Persona Explorer</h1>
        <p className="mt-4 text-lg text-gray-400 md:text-base">
          An interactive view of 11 distinct personas discovered from social media data.
        </p>
        <div className="mt-6">
          <Link
            href="/knowledge-base/automated-persona-discovery-ml-pipeline"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-cyan-400 hover:text-cyan-300 hover:bg-gray-700/50 rounded-md transition-colors border border-cyan-400/30"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Read the Technical Article
          </Link>
        </div>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white mb-4 md:text-xl">Persona Distribution</h2>
        <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-4" style={{ width: '100%', height: 300 }}>
             <ResponsiveContainer>
                <Treemap
                    isAnimationActive={false}
                    data={treemapData}
                    dataKey="count"
                    aspectRatio={4 / 3}
                    stroke="#fff"
                    fill="#8884d8"
                    content={<CustomizedContent />}
                >
                    <Tooltip content={<CustomTooltip />} />
                </Treemap>
            </ResponsiveContainer>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-white mb-6 md:text-xl">Discovered Personas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {personaData.personas.sort((a,b) => b.size - a.size).map((persona) => (
            <PersonaCard
              key={persona.persona_id}
              persona={persona}
              percentage={((persona.size / 1454) * 100)} // Using total from paper
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ExplorerDashboard;
