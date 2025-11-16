
import React from 'react';
import Link from 'next/link';
import { Persona } from '@/lib/demo/types';

interface PersonaCardProps {
  persona: Persona;
  percentage: number;
}

const PersonaCard: React.FC<PersonaCardProps> = ({ persona, percentage }) => {
  return (
    <Link href={`/demo/e-commerce/explorer/persona/${persona.persona_id}`}>
      <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:bg-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer shadow-lg flex flex-col">
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-bold text-white">{persona.name}</h3>
          <span className="bg-cyan-900/50 text-cyan-300 text-sm font-semibold px-3 py-1 rounded-full">
            {percentage.toFixed(1)}%
          </span>
        </div>
        <p className="text-gray-400 mt-2 text-sm flex-grow">{persona.description}</p>
        <div className="mt-4 border-t border-gray-700 pt-4">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Key Topics</h4>
          <div className="flex flex-wrap gap-2">
            {persona.language_fingerprint.top_terms.slice(0, 3).map((term, index) => (
              <span key={index} className="bg-gray-700 text-gray-300 text-xs font-medium px-2.5 py-1 rounded-full">
                {term.term}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PersonaCard;
