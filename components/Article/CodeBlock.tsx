'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language: string;
  lineNumbers?: boolean;
}

export default function CodeBlock({ code, language, lineNumbers = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group my-6">
      {/* Language tag and copy button */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800/50 border border-slate-800 border-b-0 rounded-t-lg">
        <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
          {language}
        </span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1 text-xs bg-gray-800/50 hover:bg-slate-700 text-gray-300 rounded transition-colors"
        >
          {copied ? (
            <>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto bg-slate-950 border border-slate-800 rounded-b-lg">
        <pre className="p-4 text-sm leading-relaxed">
          <code className="text-gray-300 font-mono">
            {lineNumbers ? (
              <div>
                {code.split('\n').map((line, i) => (
                  <div key={i} className="table-row">
                    <span className="table-cell pr-4 text-right text-slate-600 select-none">
                      {i + 1}
                    </span>
                    <span className="table-cell">{line}</span>
                  </div>
                ))}
              </div>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
