import Link from 'next/link';

interface RelatedArticle {
  id: string;
  title: string;
  slug: string;
  badge?: 'Prerequisite' | 'Follow-up' | 'Related';
  area?: string;
}

interface RelatedArticlesProps {
  articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  const badgeStyles = {
    Prerequisite: 'bg-blue-400/10 text-blue-400 border-blue-400/30',
    'Follow-up': 'bg-green-400/10 text-green-400 border-green-400/30',
    Related: 'bg-slate-700 text-slate-300 border-slate-600',
  };

  return (
    <div className="my-8 sm:my-12">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
        Related RI Articles
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.id} href={`/knowledge-base/${article.slug}`}>
            <div className="group h-full bg-slate-900/50 border border-slate-800 rounded-lg p-4 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 cursor-pointer">
              {article.badge && (
                <span
                  className={`inline-block px-2 py-0.5 mb-3 text-xs font-medium rounded border ${
                    badgeStyles[article.badge]
                  }`}
                >
                  {article.badge}
                </span>
              )}
              <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                {article.title}
              </h3>
              {article.area && (
                <p className="text-xs text-slate-400">{article.area}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
