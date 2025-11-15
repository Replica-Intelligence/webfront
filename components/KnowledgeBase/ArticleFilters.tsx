'use client';

import { useState } from 'react';

interface FilterOption {
  value: string;
  label: string;
}

const difficultyOptions: FilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'overview', label: 'Overview' },
  { value: 'in-depth', label: 'In-depth' },
  { value: 'advanced', label: 'Advanced' },
];

const typeOptions: FilterOption[] = [
  { value: 'all', label: 'All' },
  { value: 'concept', label: 'Concept' },
  { value: 'how-to', label: 'How-to' },
  { value: 'architecture', label: 'Architecture' },
  { value: 'troubleshooting', label: 'Troubleshooting' },
];

const sortOptions: FilterOption[] = [
  { value: 'newest', label: 'Newest' },
  { value: 'updated', label: 'Recently updated' },
  { value: 'most-used', label: 'Most used in workspace' },
];

export default function ArticleFilters() {
  const [difficulty, setDifficulty] = useState('all');
  const [type, setType] = useState('all');
  const [sort, setSort] = useState('newest');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  return (
    <div className="mb-6">
      {/* Desktop filters */}
      <div className="hidden sm:flex items-center justify-between gap-4 flex-wrap">
        <div className="text-sm text-slate-400">
          Showing: <span className="text-white font-medium">All topics</span>
        </div>

        <div className="flex items-center gap-3 flex-wrap">
          {/* Difficulty filter */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400">Difficulty:</label>
            <select
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="px-3 py-1.5 text-sm bg-slate-900 border border-slate-700 text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              {difficultyOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Type filter */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400">Type:</label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="px-3 py-1.5 text-sm bg-slate-900 border border-slate-700 text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-2">
            <label className="text-xs text-slate-400">Sort:</label>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-1.5 text-sm bg-slate-900 border border-slate-700 text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Mobile filters */}
      <div className="sm:hidden">
        <div className="flex items-center justify-between mb-3">
          <div className="text-sm text-slate-400">
            Showing: <span className="text-white font-medium">All topics</span>
          </div>
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-slate-900 border border-slate-700 text-slate-300 rounded-md"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
            Filters
          </button>
        </div>

        {showMobileFilters && (
          <div className="space-y-3 p-4 bg-slate-900/50 border border-slate-800 rounded-lg">
            <div>
              <label className="block text-xs text-slate-400 mb-1">Difficulty:</label>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                {difficultyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Type:</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                {typeOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs text-slate-400 mb-1">Sort:</label>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="w-full px-3 py-2 text-sm bg-slate-900 border border-slate-700 text-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
