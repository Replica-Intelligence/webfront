'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { isAdmin } from '@/lib/admin';

// Sample article templates for quick testing
const SAMPLE_ARTICLES = [
  {
    title: "Understanding Attention in Transformers",
    subtitle: "A deep dive into how attention mechanisms power modern AI models",
    slug: "attention-mechanisms-transformers",
    excerpt: "Learn how attention mechanisms enable transformers to process and understand context in AI applications.",
    content: `<h2>What is Attention?</h2>
<p>Attention mechanisms allow neural networks to focus on specific parts of the input when producing output. This is crucial for understanding context in sequences.</p>

<h2>How It Works</h2>
<p>The attention mechanism computes a weighted sum of values based on the similarity between queries and keys.</p>

<h2>Applications in RI</h2>
<p>We use attention mechanisms in our persona models to better understand user behavior across different touchpoints.</p>`,
    badge: "Concept",
    area: "Models & Embeddings",
    difficulty: "In-depth",
    readTime: "15 min",
    hasCode: true,
    hasVideo: false,
    hasNotebook: false,
    author: {
      name: "Dr. Sarah Chen",
      role: "ML Research Lead"
    },
    views: 1247,
    usedByTeammates: 12
  },
  {
    title: "Getting Started with RI Personas",
    subtitle: "Learn the fundamentals of persona intelligence",
    slug: "getting-started-personas",
    excerpt: "An introduction to building and managing AI personas in Replica Intelligence.",
    content: `<h2>What are RI Personas?</h2>
<p>RI Personas are AI-powered representations of user behavior patterns that help you understand and predict customer actions.</p>

<h2>Creating Your First Persona</h2>
<p>Follow these steps to create a persona:</p>
<ol>
  <li>Define your user segments</li>
  <li>Collect behavioral data</li>
  <li>Train the persona model</li>
  <li>Deploy and monitor</li>
</ol>`,
    badge: "How-to",
    area: "Persona Intelligence",
    difficulty: "Overview",
    readTime: "8 min",
    hasCode: true,
    hasVideo: true,
    hasNotebook: false,
    author: {
      name: "RI Team",
      role: "Product Team"
    },
    views: 523,
    usedByTeammates: 8
  },
  {
    title: "Building RI Pipelines",
    subtitle: "Automate your data processing workflows",
    slug: "building-pipelines",
    excerpt: "Create efficient data pipelines to process and analyze user behavior at scale.",
    content: `<h2>Pipeline Architecture</h2>
<p>RI pipelines are built on a distributed processing framework that can handle millions of events per second.</p>

<h2>Key Components</h2>
<ul>
  <li>Data ingestion layer</li>
  <li>Processing engine</li>
  <li>Storage backend</li>
  <li>Monitoring system</li>
</ul>`,
    badge: "Architecture",
    area: "Pipelines & Automation",
    difficulty: "Advanced",
    readTime: "20 min",
    hasCode: true,
    hasVideo: false,
    hasNotebook: true,
    author: {
      name: "Alex Johnson",
      role: "Infrastructure Lead"
    },
    views: 892,
    usedByTeammates: 15
  }
];

export default function CreateArticlePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [formData, setFormData] = useState(SAMPLE_ARTICLES[0]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | 'info'>('info');

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/');
    } else if (status === 'authenticated' && !isAdmin(session?.user?.email)) {
      router.push('/knowledge-base');
    }
  }, [status, session, router]);

  const showMessage = (text: string, type: 'success' | 'error' | 'info') => {
    setMessage(text);
    setMessageType(type);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/articles/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: new Date().toISOString().split('T')[0],
        }),
      });

      const data = await response.json();

      if (response.ok) {
        showMessage(`🎉 Success! Article "${formData.title}" created successfully!`, 'success');
        setTimeout(() => router.push('/knowledge-base'), 2500);
      } else {
        showMessage(`Error: ${data.error}`, 'error');
      }
    } catch (error) {
      showMessage('Failed to create article. Please try again.', 'error');
    } finally {
      setLoading(false);
    }
  };

  const loadSample = (index: number) => {
    setFormData(SAMPLE_ARTICLES[index]);
    showMessage('Sample data loaded', 'info');
    setTimeout(() => setMessage(''), 2000);
  };

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-slate-300">Loading...</div>
      </div>
    );
  }

  if (!session || !isAdmin(session.user?.email)) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create New Article</h1>
          <p className="text-slate-400">Admin only - {session.user?.email}</p>
        </div>

        {/* Quick Load Samples */}
        <div className="mb-6 p-4 bg-slate-900 border border-slate-800 rounded-lg">
          <h2 className="text-sm font-semibold mb-3 text-slate-300">Quick Load Sample:</h2>
          <div className="flex flex-wrap gap-2">
            {SAMPLE_ARTICLES.map((sample, index) => (
              <button
                key={index}
                onClick={() => loadSample(index)}
                className="px-3 py-1.5 text-sm bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-md transition-colors"
              >
                {sample.title.substring(0, 30)}...
              </button>
            ))}
          </div>
        </div>

        {message && (
          <div className={`mb-6 p-4 rounded-lg border transition-all ${
            messageType === 'success' ? 'bg-green-400/10 border-green-400/30 text-green-400' :
            messageType === 'error' ? 'bg-red-400/10 border-red-400/30 text-red-400' :
            'bg-blue-400/10 border-blue-400/30 text-blue-400'
          }`}>
            <div className="flex items-center gap-3">
              {messageType === 'success' && (
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {messageType === 'error' && (
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {messageType === 'info' && (
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span className="font-medium">{message}</span>
            </div>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium mb-2">Title *</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              required
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block text-sm font-medium mb-2">Subtitle</label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
            />
          </div>

          {/* Slug */}
          <div>
            <label className="block text-sm font-medium mb-2">Slug *</label>
            <input
              type="text"
              value={formData.slug}
              onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              required
            />
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium mb-2">Excerpt *</label>
            <textarea
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              rows={2}
              required
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium mb-2">Content (HTML) *</label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50 font-mono text-sm"
              rows={10}
              required
            />
          </div>

          {/* Two-column layout for metadata */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Badge */}
            <div>
              <label className="block text-sm font-medium mb-2">Badge</label>
              <select
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                <option>Concept</option>
                <option>How-to</option>
                <option>Architecture</option>
                <option>Playbook</option>
                <option>Troubleshooting</option>
              </select>
            </div>

            {/* Area */}
            <div>
              <label className="block text-sm font-medium mb-2">Area</label>
              <select
                value={formData.area}
                onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                <option>RI Overview & Concepts</option>
                <option>Persona Intelligence</option>
                <option>Data & Signals</option>
                <option>Models & Embeddings</option>
                <option>Pipelines & Automation</option>
                <option>Deployment & Monitoring</option>
                <option>Account & Governance</option>
              </select>
            </div>

            {/* Difficulty */}
            <div>
              <label className="block text-sm font-medium mb-2">Difficulty</label>
              <select
                value={formData.difficulty}
                onChange={(e) => setFormData({ ...formData, difficulty: e.target.value as any })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              >
                <option>Overview</option>
                <option>In-depth</option>
                <option>Advanced</option>
              </select>
            </div>

            {/* Read Time */}
            <div>
              <label className="block text-sm font-medium mb-2">Read Time</label>
              <input
                type="text"
                value={formData.readTime}
                onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                placeholder="e.g., 12 min"
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
          </div>

          {/* Checkboxes */}
          <div className="flex flex-wrap gap-6">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.hasCode}
                onChange={(e) => setFormData({ ...formData, hasCode: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-sm">Has Code</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.hasVideo}
                onChange={(e) => setFormData({ ...formData, hasVideo: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-sm">Has Video</span>
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={formData.hasNotebook}
                onChange={(e) => setFormData({ ...formData, hasNotebook: e.target.checked })}
                className="w-4 h-4"
              />
              <span className="text-sm">Has Notebook</span>
            </label>
          </div>

          {/* Author */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Author Name</label>
              <input
                type="text"
                value={formData.author.name}
                onChange={(e) => setFormData({ ...formData, author: { ...formData.author, name: e.target.value } })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Author Role</label>
              <input
                type="text"
                value={formData.author.role}
                onChange={(e) => setFormData({ ...formData, author: { ...formData.author, role: e.target.value } })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Views</label>
              <input
                type="number"
                value={formData.views}
                onChange={(e) => setFormData({ ...formData, views: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Used by Teammates</label>
              <input
                type="number"
                value={formData.usedByTeammates}
                onChange={(e) => setFormData({ ...formData, usedByTeammates: parseInt(e.target.value) || 0 })}
                className="w-full px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400/50"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4">
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-cyan-400 text-slate-950 rounded-lg font-medium hover:bg-cyan-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create Article'}
            </button>
            <button
              type="button"
              onClick={() => router.push('/knowledge-base')}
              className="px-6 py-3 bg-slate-800 text-slate-300 rounded-lg font-medium hover:bg-slate-700 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
