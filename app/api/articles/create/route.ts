import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { adminDb } from '@/lib/firebase';
import { isAdmin } from '@/lib/admin';

export async function POST(request: Request) {
  const session = await auth();

  if (!session?.user?.email || !isAdmin(session.user.email)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const articleData = await request.json();
    const { relatedArticleIds, ...restArticleData } = articleData;

    // Add server timestamp
    const article = {
      ...restArticleData,
      createdAt: new Date().toISOString(),
    };

    const docRef = await adminDb.collection('articles').add(article);

    // Create related articles relationships if provided
    if (relatedArticleIds && Array.isArray(relatedArticleIds) && relatedArticleIds.length > 0) {
      const batch = adminDb.batch();

      for (const relatedId of relatedArticleIds) {
        if (relatedId && relatedId.trim()) {
          const relatedDocRef = adminDb.collection('relatedArticles').doc();
          batch.set(relatedDocRef, {
            sourceArticleId: docRef.id,
            relatedArticleId: relatedId.trim(),
            createdAt: new Date().toISOString(),
          });
        }
      }

      await batch.commit();
    }

    return NextResponse.json({
      success: true,
      id: docRef.id,
      message: 'Article created successfully'
    });
  } catch (error) {
    console.error('Error creating article:', error);
    return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
  }
}
