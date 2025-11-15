'use client';

import Link from 'next/link';

export interface ArticleCardProps {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  badge?: string;
  area?: string;
  difficulty?: 'Overview' | 'In-depth' | 'Advanced';
  hasCode?: boolean;
  hasVideo?: boolean;
  hasNotebook?: boolean;
  lastOpened?: string;
  usedByTeammates?: number;
  date?: string;
}

export default function ArticleCard({
  title,
  excerpt,
  slug,
  badge = 'Concept',
  area = 'General',
  difficulty = 'Overview',
  hasCode = false,
  hasVideo = false,
  hasNotebook = false,
  lastOpened,
  usedByTeammates,
}: ArticleCardProps) {
  const difficultyColors = {
    Overview: 'bg-green-400/10 text-green-400 border-green-400/20',
    'In-depth': 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    Advanced: 'bg-red-400/10 text-red-400 border-red-400/20',
  };

  return (
    <Link href={`/knowledge-base/${slug}`}>
      <article className="group h-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 sm:p-5 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 cursor-pointer">
        {/* Badge */}
        <div className="mb-3">
          <span className="inline-block px-2 py-0.5 text-xs font-medium bg-slate-800 text-slate-300 rounded">
            {badge}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-sm text-slate-400 mb-4 line-clamp-2">{excerpt}</p>

        {/* Chips - Area and Difficulty */}
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="inline-flex items-center px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">
            {area}
          </span>
          <span
            className={`inline-flex items-center px-2 py-1 text-xs rounded border ${difficultyColors[difficulty]}`}
          >
            {difficulty}
          </span>
          {hasCode && (
            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                />
              </svg>
              Code
            </span>
          )}
          {hasVideo && (
            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Video
            </span>
          )}
          {hasNotebook && (
            <span className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-slate-800 text-slate-300 rounded border border-slate-700">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Notebook
            </span>
          )}
        </div>

        {/* Metadata */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-3 border-t border-slate-800">
          {lastOpened && <span>Last opened: {lastOpened}</span>}
          {/* Used by teammates - commented out for now */}
          {/* {usedByTeammates !== undefined && (
            <span className="flex items-center gap-1">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              Used by {usedByTeammates} teammates
            </span>
          )} */}
        </div>
      </article>
    </Link>
  );
}
