'use client';

import { useEffect, useState } from 'react';

interface TOCSection {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  sections: TOCSection[];
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav className="sticky top-20 hidden xl:block w-64 flex-shrink-0">
      <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-4 sm:p-5">
        <h2 className="text-xs font-semibold text-slate-400 mb-4 uppercase tracking-wider">
          On this page
        </h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block text-sm py-1.5 px-2 rounded transition-colors ${
                  activeSection === section.id
                    ? 'text-cyan-400 bg-cyan-400/10'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
