import { auth } from '@/auth';
import { redirect } from 'next/navigation';
import { adminDb } from '@/lib/firebase';
import Link from 'next/link';
import AppShell from '@/components/AppShell/AppShell';
import TableOfContents from '@/components/Article/TableOfContents';
import CodeBlock from '@/components/Article/CodeBlock';
import Callout from '@/components/Article/Callout';
import RelatedArticles from '@/components/Article/RelatedArticles';
import ArticleFeedback from '@/components/Article/ArticleFeedback';

interface Article {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  date: string;
  updatedDate?: string;
  author?: {
    name: string;
    role?: string;
    avatar?: string;
  };
  difficulty?: 'Overview' | 'Intermediate' | 'Advanced';
  badge?: string;
  readTime?: string;
  views?: number;
  rating?: number;
  ratingCount?: number;
  area?: string;
  seriesInfo?: string;
  slug: string;
}

async function getArticle(slug: string): Promise<Article | null> {
  try {
    const snapshot = await adminDb
      .collection('articles')
      .where('slug', '==', slug)
      .get();

    if (snapshot.empty) {
      return null;
    }

    return {
      id: snapshot.docs[0].id,
      ...snapshot.docs[0].data()
    } as Article;
  } catch (error) {
    console.error('Error fetching article:', error);
    return null;
  }
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const session = await auth();

  if (!session?.user) {
    redirect('/');
  }

  const { slug } = await params;
  const article = await getArticle(slug);

  // Show upcoming/not found page if article doesn't exist
  if (!article) {
    return (
      <AppShell showLeftNav={false}>
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="max-w-2xl w-full text-center">
            <div className="mb-8">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                Article Coming Soon
              </h1>
              <p className="text-lg text-slate-400 mb-2">
                This article is currently being prepared or the URL might be incorrect.
              </p>
              <p className="text-sm text-slate-500">
                Check back later or browse our other articles.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/knowledge-base"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Knowledge Base
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium rounded-lg transition-colors border border-slate-700"
              >
                Go to Home
              </Link>
            </div>

            <div className="mt-12 p-6 bg-slate-900/50 border border-slate-800 rounded-lg text-left">
              <h2 className="text-sm font-semibold text-slate-300 mb-2">Looking for this specific article?</h2>
              <p className="text-sm text-slate-400">
                If you believe this article should exist, please check the URL for typos or contact the administrator.
              </p>
            </div>
          </div>
        </div>
      </AppShell>
    );
  }

  const difficultyColors = {
    Overview: 'bg-green-400/10 text-green-400 border-green-400/20',
    Intermediate: 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20',
    Advanced: 'bg-red-400/10 text-red-400 border-red-400/20',
  };

  const tocSections = [
    { id: 'overview', title: 'Overview' },
    { id: 'intuition', title: 'Intuition' },
    { id: 'implementation', title: 'Implementation' },
    { id: 'considerations', title: 'RI-specific considerations' },
  ];

  const relatedArticles = [
    {
      id: '1',
      title: 'Prerequisite: Intro to Embeddings',
      slug: 'intro-to-embeddings',
      badge: 'Prerequisite' as const,
      area: 'Models & Embeddings',
    },
    {
      id: '2',
      title: 'Next: Serving RI Personas in Production',
      slug: 'serving-personas',
      badge: 'Follow-up' as const,
      area: 'Deployment & Monitoring',
    },
  ];

  return (
    <AppShell showLeftNav={false}>
      <div className="min-h-screen">
        {/* Back Navigation and Breadcrumbs */}
        <div className="border-b border-slate-800 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/knowledge-base"
              className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors mb-3"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to RI Knowledge Base
            </Link>

            {/* Breadcrumbs */}
            {/* <nav className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 flex-wrap">
              <Link href="/knowledge-base" className="hover:text-cyan-400 transition-colors">
                RI Knowledge Base
              </Link>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="hover:text-cyan-400 transition-colors">{article.area || 'General'}</span>
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-slate-400">{article.title}</span>
            </nav> */}
          </div>
        </div>

        {/* Article Content */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-12">
          <div className="max-w-4xl mx-auto">
            {/* Main Content */}
            <article>
                {/* Article Header */}
                <header className="mb-8 sm:mb-12">
                  {/* Series info */}
                  {article.seriesInfo && (
                    <div className="mb-4 text-sm text-cyan-400 flex items-center gap-2">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      {article.seriesInfo}
                    </div>
                  )}

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                    {article.title}
                  </h1>

                  {article.subtitle && (
                    <p className="text-lg sm:text-xl text-slate-300 mb-6">
                      {article.subtitle}
                    </p>
                  )}

                  {/* Metadata row */}
                  {/* <div className="flex flex-wrap items-center gap-3 mb-6">
                    {article.difficulty && (
                      <span
                        className={`inline-flex items-center px-3 py-1 text-xs sm:text-sm rounded-md border font-medium ${
                          difficultyColors[article.difficulty]
                        }`}
                      >
                        {article.difficulty}
                      </span>
                    )}
                    {article.badge && (
                      <span className="inline-flex items-center px-3 py-1 text-xs sm:text-sm bg-slate-800 text-slate-300 rounded-md border border-slate-700">
                        {article.badge}
                      </span>
                    )}
                    {article.readTime && (
                      <span className="text-xs sm:text-sm text-slate-400">{article.readTime} read</span>
                    )}
                    <span className="text-xs sm:text-sm text-slate-400">Published {article.date}</span>
                    {article.updatedDate && (
                      <span className="text-xs sm:text-sm text-slate-400">Updated {article.updatedDate}</span>
                    )}
                  </div> */}

                  {/* Author and stats */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-slate-800">
                    {article.author && (
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-medium">
                          {article.author.name[0]}
                        </div>
                        <div>
                          <div className="font-medium text-white text-sm sm:text-base">{article.author.name}</div>
                          {article.author.role && (
                            <div className="text-xs sm:text-sm text-slate-400">{article.author.role}</div>
                          )}
                        </div>
                      </div>
                    )}

                    {(article.views || article.rating) && (
                      <div className="flex items-center gap-4 text-xs sm:text-sm text-slate-400">
                        {article.views && <span>{article.views.toLocaleString()} views</span>}
                        {article.rating && (
                          <span className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                            {article.rating}/5
                            {article.ratingCount && ` from ${article.ratingCount} ratings`}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </header>

                {/* Article Body */}
                <div className="prose prose-invert prose-slate max-w-none">
                  {/* Example content with our components */}
                  <section id="overview" className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Overview</h2>
                    <div className="text-slate-300 leading-relaxed space-y-4">
                      <div dangerouslySetInnerHTML={{ __html: article.content }} />
                    </div>
                  </section>

                  <Callout type="intuition" title="Understanding the Concept">
                    This approach helps you build more accurate persona models by leveraging the full context
                    of user interactions across multiple touchpoints.
                  </Callout>

                  <section id="implementation" className="mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Implementation</h2>
                    <CodeBlock
                      language="Python"
                      code={`import numpy as np
from ri.embeddings import PersonaEncoder

# Initialize the encoder
encoder = PersonaEncoder(model='RI-v2')

# Generate embeddings
embeddings = encoder.encode(user_data)
print(f"Shape: {embeddings.shape}")`}
                    />
                  </section>

                  <Callout type="warning">
                    Make sure to normalize your input data before generating embeddings to ensure consistent
                    results across different data sources.
                  </Callout>
                </div>

                {/* Related Articles */}
                <RelatedArticles articles={relatedArticles} />

                {/* Feedback */}
                <ArticleFeedback />
            </article>

            {/* Table of Contents - Right Sidebar */}
            {/* <TableOfContents sections={tocSections} /> */}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
