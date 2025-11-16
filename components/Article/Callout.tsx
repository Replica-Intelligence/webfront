interface CalloutProps {
  type: 'intuition' | 'pattern' | 'warning' | 'implementation';
  title?: string;
  children: React.ReactNode;
}

export default function Callout({ type, title, children }: CalloutProps) {
  const styles = {
    intuition: {
      bg: 'bg-blue-400/10',
      border: 'border-blue-400/30',
      icon: 'text-blue-400',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
      defaultTitle: 'Intuition',
    },
    pattern: {
      bg: 'bg-cyan-400/10',
      border: 'border-cyan-400/30',
      icon: 'text-cyan-400',
      iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
      defaultTitle: 'RI Pattern',
    },
    warning: {
      bg: 'bg-yellow-400/10',
      border: 'border-yellow-400/30',
      icon: 'text-yellow-400',
      iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
      defaultTitle: 'Warning',
    },
    implementation: {
      bg: 'bg-purple-400/10',
      border: 'border-purple-400/30',
      icon: 'text-purple-400',
      iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
      defaultTitle: 'Implementation Note',
    },
  };

  const config = styles[type];

  return (
    <div className={`my-6 p-4 sm:p-5 rounded-lg border ${config.bg} ${config.border}`}>
      <div className="flex gap-3 sm:gap-4">
        <div className="flex-shrink-0">
          <svg className={`w-5 h-5 sm:w-6 sm:h-6 ${config.icon}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={config.iconPath} />
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          {title && (
            <h4 className={`font-semibold mb-2 text-sm sm:text-base ${config.icon}`}>
              {title || config.defaultTitle}
            </h4>
          )}
          <div className="text-sm sm:text-base text-gray-300 leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
