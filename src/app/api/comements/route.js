// src/app/api/comments/route.js
import { getComments, addComment } from '@/data/db';

export async function GET() {
  return new Response(JSON.stringify(getComments()), {
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const body = await req.json();
  if (!body.text) {
    return new Response(JSON.stringify({ error: 'Text is required' }), { status: 400 });
  }

  addComment(body.text);
  return new Response(JSON.stringify({ message: 'Comment added' }), { status: 201 });
}
