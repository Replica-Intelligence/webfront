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
  // Don't render if no related articles
  if (!articles || articles.length === 0) {
    return null;
  }

  return (
    <div className="my-8 sm:my-12">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
        Related Articles
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Link key={article.id} href={`/knowledge-base/${article.slug}`}>
            <div className="group h-full bg-gray-800/50 border border-slate-800 rounded-lg p-4 transition-all hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-400/10 cursor-pointer">
              <h3 className="text-base font-semibold text-white group-hover:text-cyan-400 transition-colors mb-2">
                {article.title}
              </h3>
              {article.area && (
                <p className="text-xs text-gray-400">{article.area}</p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
