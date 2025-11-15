'use client';

import { useState } from 'react';

export default function ArticleFeedback() {
  const [helpful, setHelpful] = useState<boolean | null>(null);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // TODO: Submit feedback to API
    console.log({ helpful, comment });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="my-8 p-6 bg-green-400/10 border border-green-400/30 rounded-lg">
        <div className="flex items-center gap-3 text-green-400">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="font-medium">Thank you for your feedback!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="my-8 sm:my-12 p-4 sm:p-6 bg-slate-900/50 border border-slate-800 rounded-lg">
      <h3 className="text-lg sm:text-xl font-semibold text-white mb-4">
        Was this article helpful?
      </h3>

      <div className="flex gap-3 mb-4">
        <button
          onClick={() => setHelpful(true)}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border transition-colors ${
            helpful === true
              ? 'bg-green-400/10 border-green-400 text-green-400'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span className="text-sm sm:text-base">Yes</span>
        </button>
        <button
          onClick={() => setHelpful(false)}
          className={`flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg border transition-colors ${
            helpful === false
              ? 'bg-red-400/10 border-red-400 text-red-400'
              : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-slate-600'
          }`}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5"
            />
          </svg>
          <span className="text-sm sm:text-base">No</span>
        </button>
      </div>

      {helpful !== null && (
        <div className="space-y-3">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Any additional comments? (optional)"
            className="w-full px-4 py-3 bg-slate-950 border border-slate-700 text-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 resize-none text-sm sm:text-base"
            rows={3}
          />
          <button
            onClick={handleSubmit}
            className="px-4 sm:px-6 py-2 sm:py-2.5 bg-cyan-400 text-slate-950 rounded-lg hover:bg-cyan-300 transition-colors font-medium text-sm sm:text-base"
          >
            Submit Feedback
          </button>
        </div>
      )}
    </div>
  );
}
