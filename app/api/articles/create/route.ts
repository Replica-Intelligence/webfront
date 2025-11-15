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

    // Add server timestamp
    const article = {
      ...articleData,
      createdAt: new Date().toISOString(),
    };

    const docRef = await adminDb.collection('articles').add(article);

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
