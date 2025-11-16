
import React from 'react';

interface TweetCardProps {
  text: string;
}

export const TweetCard: React.FC<TweetCardProps> = ({ text }) => {
  // A simple formatter to find [USER] tags and highlight them
  const formatTweetText = (rawText: string) => {
    const parts = rawText.split(/(\[USER\]|#\w+|https\S+)/g);
    return parts.map((part, index) => {
      if (part === '[USER]' || part.startsWith('#')) {
        return <span key={index} className="text-cyan-400">{part}</span>;
      }
      if (part.startsWith('http')) {
        return <span key={index} className="text-cyan-400 truncate max-w-xs block">{part}</span>;
      }
      return part;
    });
  };

  return (
    <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 break-words">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 rounded-full bg-gray-600 flex-shrink-0"></div>
        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-white">Anonymous User</span>
            <span className="text-gray-500">@user</span>
          </div>
          <p className="text-gray-300 whitespace-pre-wrap">
            {formatTweetText(text)}
          </p>
        </div>
      </div>
    </div>
  );
};
