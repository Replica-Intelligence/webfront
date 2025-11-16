import { NextResponse } from 'next/server';
import { auth } from '@/auth';
import { adminDb } from '@/lib/firebase';

export async function POST(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const session = await auth();

  if (!session?.user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { slug } = await params;

    // Validate slug parameter
    if (!slug || typeof slug !== 'string') {
      return NextResponse.json({ error: 'Invalid article slug' }, { status: 400 });
    }

    const snapshot = await adminDb.collection('articles').where('slug', '==', slug).get();

    if (snapshot.empty) {
      return NextResponse.json({ error: 'Article not found' }, { status: 404 });
    }

    const docRef = snapshot.docs[0].ref;
    const currentData = snapshot.docs[0].data();
    const currentViews = currentData.views || 0;

    // Increment views
    await docRef.update({
      views: currentViews + 1
    });

    return NextResponse.json({
      success: true,
      views: currentViews + 1
    });
  } catch (error) {
    console.error('Error incrementing article views:', error);
    return NextResponse.json({ error: 'Failed to increment views' }, { status: 500 });
  }
}
