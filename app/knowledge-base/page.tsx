import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { adminDb } from '@/lib/firebase';
import AppShell from '@/components/AppShell/AppShell';
import HeroBlock from '@/components/KnowledgeBase/HeroBlock';
// import TopicNav from '@/components/KnowledgeBase/TopicNav'; // Commented out - not needed at this stage
import ArticleCard from '@/components/KnowledgeBase/ArticleCard';
// import ArticleFilters from '@/components/KnowledgeBase/ArticleFilters'; // Commented out - not needed at this stage

interface Article {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  badge?: string;
  area?: string;
  difficulty?: 'Overview' | 'In-depth' | 'Advanced';
  hasCode?: boolean;
  hasVideo?: boolean;
  hasNotebook?: boolean;
  lastOpened?: string;
  usedByTeammates?: number;
}

async function getArticles(): Promise<Article[]> {
  try {
    const snapshot = await adminDb
      .collection('articles')
      .orderBy('date', 'desc')
      .get();

    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Article[];
  } catch (error) {
    console.error('Error fetching articles:', error);
    return [];
  }
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function KnowledgeBase() {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  const articles = await getArticles();

  return (
    <AppShell showLeftNav={false}>
      <div className="min-h-screen">
        {/* Hero Block */}
        <div className="px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
          <div className="max-w-7xl mx-auto">
            <HeroBlock />
          </div>
        </div>

        {/* Main Content Area */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <div className="max-w-7xl mx-auto">
            {/* Articles Grid - Centered */}
            {articles.length === 0 ? (
              <div className="text-center text-gray-400 py-12 sm:py-16">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-slate-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <p className="text-base sm:text-lg">No articles available at the moment.</p>
              </div>
            ) : (
              <div className="grid gap-4 sm:gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {articles.map((article) => (
                  <ArticleCard key={article.id} {...article} />
                ))}
              </div>
            )}

            {/* Pagination - commented out for now */}
            {/* <div className="mt-8 flex justify-center">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-gray-800/50 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700/50 hover:border-cyan-400/50 transition-colors text-sm sm:text-base">
                Load more articles
              </button>
            </div> */}
          </div>
        </div>

        {/* Mobile Topic Navigation - Bottom Sheet Style */}
        <div className="lg:hidden fixed bottom-4 right-4 z-50">
          <button className="flex items-center gap-2 px-4 py-3 bg-cyan-400 text-slate-950 rounded-full shadow-lg hover:bg-cyan-300 transition-colors font-medium">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <span className="text-sm">Topics</span>
          </button>
        </div>
      </div>
    </AppShell>
  );
}
