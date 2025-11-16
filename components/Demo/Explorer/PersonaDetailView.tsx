'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Persona } from '@/lib/demo/types';
import { ClockIcon, UserGroupIcon, Bars3BottomLeftIcon, CheckCircleIcon, XCircleIcon, ArrowLeftIcon, BriefcaseIcon, AcademicCapIcon, HomeIcon, LightBulbIcon, ClipboardDocumentListIcon } from './Icons';
import { ActivityChart } from './ActivityChart';
import { TweetCard } from './TweetCard';
import MarketingStrategy from './MarketingStrategy';

interface PersonaDetailViewProps {
  persona: Persona;
}

const StatCard: React.FC<{ title: string; value: string | number; icon: React.ReactNode }> = ({ title, value, icon }) => (
    <div className="bg-gray-800/50 border border-gray-700/50 rounded-lg p-4">
        <div className="flex items-center">
            <div className="p-2 bg-gray-700/50 rounded-md mr-4">
                {icon}
            </div>
            <div>
                <p className="text-sm text-gray-400">{title}</p>
                <p className="text-2xl font-bold text-white">{value}</p>
            </div>
        </div>
    </div>
);

const PersonaDetailView: React.FC<PersonaDetailViewProps> = ({ persona }) => {
  const router = useRouter();
  const { demographics, behavior_fingerprint, language_fingerprint, copy_hints, evidence_snippets } = persona;

  const handleBack = () => {
    router.push('/demo/e-commerce/explorer');
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button onClick={handleBack} className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 mb-8 group">
            <ArrowLeftIcon className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            Back to Dashboard
        </button>

      <header className="mb-10">
        <h1 className="text-4xl font-extrabold text-white sm:text-5xl">{persona.name}</h1>
        <p className="mt-4 text-lg text-gray-400">{persona.description}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <StatCard title="Audience Size" value={persona.size} icon={<UserGroupIcon className="w-6 h-6 text-cyan-400" />} />
          <StatCard title="Peak Activity" value={`${behavior_fingerprint.temporal.peak_hour}:00`} icon={<ClockIcon className="w-6 h-6 text-cyan-400" />} />
          <StatCard title="Avg. Word Count" value={behavior_fingerprint.style.avg_word_count.toFixed(1)} icon={<Bars3BottomLeftIcon className="w-6 h-6 text-cyan-400" />} />
      </div>

      <div className="my-10">
        <h3 className="text-2xl font-bold text-white mb-4">Who Are They?</h3>
         <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
            <p className="text-sm text-yellow-300 bg-yellow-900/20 border border-yellow-700 rounded-md p-3 mb-6">
                <strong>Disclaimer:</strong> The demographic information below is not from the raw dataset. It is an informed inference based on the persona&apos;s behavioral and linguistic patterns to create a more complete, humanized profile.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Occupation */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                        <div className="p-2 bg-gray-700/50 rounded-md mr-4 flex-shrink-0">
                            <BriefcaseIcon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Occupation</p>
                            <p className="text-lg font-bold text-white mt-1">{demographics.occupation}</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="flex items-center text-sm font-semibold text-gray-300 mb-2">
                            <ClipboardDocumentListIcon className="w-4 h-4 mr-2 text-gray-400" />
                            Behavioral Clues
                        </h5>
                        <p className="text-sm text-gray-400 border-l-2 border-gray-700 pl-4">{demographics.behavioralClues.occupation}</p>
                    </div>
                    <div>
                        <h5 className="flex items-center text-sm font-semibold text-gray-300 mb-2">
                            <LightBulbIcon className="w-4 h-4 mr-2 text-gray-400" />
                            Hypothesis
                        </h5>
                        <p className="text-sm text-gray-400 border-l-2 border-gray-700 pl-4">{demographics.hypothesis.occupation}</p>
                    </div>
                </div>

                 {/* Education */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                        <div className="p-2 bg-gray-700/50 rounded-md mr-4 flex-shrink-0">
                            <AcademicCapIcon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Education</p>
                            <p className="text-lg font-bold text-white mt-1">{demographics.education}</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="flex items-center text-sm font-semibold text-gray-300 mb-2">
                             <ClipboardDocumentListIcon className="w-4 h-4 mr-2 text-gray-400" />
                            Behavioral Clues
                        </h5>
                        <p className="text-sm text-gray-400 border-l-2 border-gray-700 pl-4">{demographics.behavioralClues.education}</p>
                    </div>
                     <div>
                        <h5 className="flex items-center text-sm font-semibold text-gray-300 mb-2">
                             <LightBulbIcon className="w-4 h-4 mr-2 text-gray-400" />
                            Hypothesis
                        </h5>
                        <p className="text-sm text-gray-400 border-l-2 border-gray-700 pl-4">{demographics.hypothesis.education}</p>
                    </div>
                </div>

                {/* Family Structure */}
                <div className="flex flex-col space-y-4">
                    <div className="flex items-start">
                        <div className="p-2 bg-gray-700/50 rounded-md mr-4 flex-shrink-0">
                            <HomeIcon className="w-6 h-6 text-cyan-400" />
                        </div>
                        <div>
                            <p className="text-sm text-gray-400 uppercase tracking-wider">Family Structure</p>
                            <p className="text-lg font-bold text-white mt-1">{demographics.family_structure}</p>
                        </div>
                    </div>
                    <div>
                        <h5 className="flex items-center text-sm font-semibold text-gray-300 mb-2">
                            <ClipboardDocumentListIcon className="w-4 h-4 mr-2 text-gray-400" />
                            Behavioral Clues
                        </h5>
                        <p className="text-sm text-gray-400 border-l-2 border-gray-700 pl-4">{demographics.behavioralClues.family_structure}</p>
                    </div>
                    <div>
                        <h5 className="flex items-center text-sm font-semibold text-gray-300 mb-2">
                            <LightBulbIcon className="w-4 h-4 mr-2 text-gray-400" />
                            Hypothesis
                        </h5>
                        <p className="text-sm text-gray-400 border-l-2 border-gray-700 pl-4">{demographics.hypothesis.family_structure}</p>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
            <h3 className="text-xl font-bold text-white mb-4">Behavioral Fingerprint</h3>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                <h4 className="font-semibold text-gray-300 mb-2">24-Hour Activity Distribution</h4>
                <ActivityChart data={behavior_fingerprint.temporal.activity_by_hour} />
            </div>
        </div>

        <div>
            <h3 className="text-xl font-bold text-white mb-4">Language Fingerprint</h3>
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
                <h4 className="font-semibold text-gray-300 mb-3">Top Terms (by TF-IDF)</h4>
                <div className="flex flex-wrap gap-2">
                    {language_fingerprint.top_terms.map(term => (
                        <div key={term.term} className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">{term.term}</div>
                    ))}
                </div>
                <h4 className="font-semibold text-gray-300 mt-6 mb-3">Top N-Grams</h4>
                <div className="flex flex-wrap gap-2">
                     {language_fingerprint.top_ngrams.length > 0 ? language_fingerprint.top_ngrams.map(ngram => (
                        <div key={ngram.ngram} className="bg-gray-700 text-gray-200 text-sm font-medium px-3 py-1 rounded-full">{ngram.ngram}</div>
                    )) : <p className="text-gray-500 text-sm">No significant n-grams found.</p>}
                </div>
            </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-white mb-4">Actionable Copy Hints</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-900/20 border border-green-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-300 flex items-center mb-3">
                    <CheckCircleIcon className="w-6 h-6 mr-2" />
                    Do Say
                </h4>
                <ul className="list-disc list-inside space-y-2 text-green-200">
                    {copy_hints.do_say.map((hint, i) => <li key={i}>{hint}</li>)}
                </ul>
            </div>
             <div className="bg-red-900/20 border border-red-700 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-red-300 flex items-center mb-3">
                    <XCircleIcon className="w-6 h-6 mr-2" />
                    Don&apos;t Say
                </h4>
                 {copy_hints.dont_say.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2 text-red-200">
                        {copy_hints.dont_say.map((hint, i) => <li key={i}>{hint}</li>)}
                    </ul>
                 ) : <p className="text-red-200/70">No specific anti-patterns identified.</p>}
            </div>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-bold text-white mb-4">Chat with {persona.name} Persona</h3>
        <div className="bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border border-cyan-700/50 rounded-xl p-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-400/10 rounded-full mb-4">
              <svg className="w-8 h-8 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h4 className="text-2xl font-bold text-white mb-2">LLM + Persona Integration</h4>
            <p className="text-lg text-cyan-300 font-semibold mb-2">Coming Soon</p>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Chat with an AI that embodies the behavioral patterns, language style, and preferences of the {persona.name} persona.
              This feature will allow you to test messaging, get feedback, and refine your marketing approach.
            </p>
          </div>
        </div>
      </div>

      <MarketingStrategy persona={persona} />

      <div className="mt-10">
        <h3 className="text-xl font-bold text-white mb-4">Evidence Snippets</h3>
        <div className="space-y-4">
            {evidence_snippets.map((snippet) => (
                <TweetCard key={snippet.snippet_id} text={snippet.text} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PersonaDetailView;
