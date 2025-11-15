'use client';

import { useState } from 'react';

interface Topic {
  id: string;
  label: string;
  subTopics?: { id: string; label: string }[];
}

const topics: Topic[] = [
  {
    id: 'overview',
    label: 'RI Overview & Concepts',
  },
  {
    id: 'persona',
    label: 'Persona Intelligence',
  },
  {
    id: 'data',
    label: 'Data & Signals',
  },
  {
    id: 'models',
    label: 'Models & Embeddings',
    subTopics: [
      { id: 'embedding-models', label: 'Embedding models' },
      { id: 'clustering', label: 'Clustering & HDBSCAN' },
      { id: 'vector-search', label: 'Vector search & retrieval' },
    ],
  },
  {
    id: 'pipelines',
    label: 'Pipelines & Automation',
  },
  {
    id: 'deployment',
    label: 'Deployment & Monitoring',
  },
  {
    id: 'account',
    label: 'Account & Governance',
  },
];

const updates = [
  { id: 'whats-new', label: "What's new in RI" },
  { id: 'release-notes', label: 'Release notes' },
];

export default function TopicNav() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [expandedTopics, setExpandedTopics] = useState<Set<string>>(new Set(['models']));

  const toggleTopic = (topicId: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(topicId)) {
      newExpanded.delete(topicId);
    } else {
      newExpanded.add(topicId);
    }
    setExpandedTopics(newExpanded);
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 sm:p-5 h-fit sticky top-20">
      <h2 className="text-sm font-semibold text-slate-300 mb-4 uppercase tracking-wider">
        Browse Topics
      </h2>

      <nav className="space-y-1">
        {topics.map((topic) => (
          <div key={topic.id}>
            <button
              onClick={() => {
                setSelectedTopic(topic.id);
                if (topic.subTopics) toggleTopic(topic.id);
              }}
              className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                selectedTopic === topic.id
                  ? 'bg-cyan-400/10 text-cyan-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              <span>{topic.label}</span>
              {topic.subTopics && (
                <svg
                  className={`w-4 h-4 transition-transform ${
                    expandedTopics.has(topic.id) ? 'rotate-90' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              )}
            </button>

            {topic.subTopics && expandedTopics.has(topic.id) && (
              <div className="ml-4 mt-1 space-y-1 border-l border-slate-700 pl-3">
                {topic.subTopics.map((subTopic) => (
                  <button
                    key={subTopic.id}
                    onClick={() => setSelectedTopic(subTopic.id)}
                    className={`w-full text-left px-3 py-1.5 text-sm rounded-md transition-colors ${
                      selectedTopic === subTopic.id
                        ? 'text-cyan-400'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    {subTopic.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-8 pt-6 border-t border-slate-700">
        <h3 className="text-xs font-semibold text-slate-400 mb-3 uppercase tracking-wider">
          Updates
        </h3>
        <div className="space-y-1">
          {updates.map((update) => (
            <button
              key={update.id}
              onClick={() => setSelectedTopic(update.id)}
              className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors ${
                selectedTopic === update.id
                  ? 'bg-cyan-400/10 text-cyan-400'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800'
              }`}
            >
              {update.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
