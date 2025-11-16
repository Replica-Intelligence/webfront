
import React from 'react';
import { Persona } from '@/lib/demo/types';
import { BullseyeIcon, KeyIcon, MegaphoneIcon } from './Icons';

interface MarketingStrategyProps {
  persona: Persona;
}

const StrategyCard: React.FC<{ title: string, icon: React.ReactNode, children: React.ReactNode }> = ({ title, icon, children }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50 h-full">
        <div className="flex items-center mb-3">
            <div className="p-2 bg-gray-700/50 rounded-md mr-3">
                {icon}
            </div>
            <h4 className="text-lg font-semibold text-white">{title}</h4>
        </div>
        <div>{children}</div>
    </div>
);

const MarketingStrategy: React.FC<MarketingStrategyProps> = ({ persona }) => {
  const { marketing_strategy } = persona;

  return (
    <div className="mt-10">
      <h3 className="text-2xl font-bold text-white mb-4">Strategy & Channels</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <StrategyCard title="Primary Angle" icon={<BullseyeIcon className="w-6 h-6 text-cyan-400" />}>
          <p className="text-gray-300">{marketing_strategy.primary_angle}</p>
        </StrategyCard>

        <StrategyCard title="Key Themes" icon={<KeyIcon className="w-6 h-6 text-cyan-400" />}>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            {marketing_strategy.key_themes.map((theme, i) => <li key={i}>{theme}</li>)}
          </ul>
        </StrategyCard>

        <StrategyCard title="Recommended Channels" icon={<MegaphoneIcon className="w-6 h-6 text-cyan-400" />}>
           <div className="flex flex-wrap gap-2">
                {marketing_strategy.recommended_channels.map((channel, i) => (
                    <span key={i} className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">
                        {channel}
                    </span>
                ))}
            </div>
        </StrategyCard>

      </div>
    </div>
  );
};

export default MarketingStrategy;
