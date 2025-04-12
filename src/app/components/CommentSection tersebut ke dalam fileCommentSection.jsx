'use client';

import { useEffect, useState } from 'react';

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    fetch('/api/comments')
      .then((res) => res.json())
      .then(setComments);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ text: newComment }),
    });
    setNewComment('');
    const res = await fetch('/api/comments');
    const data = await res.json();
    setComments(data);
  };

  return (
    <div className="mt-10 w-full max-w-2xl">
      <h3 className="text-xl font-bold mb-4">Komentar</h3>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Tulis komentar..."
        />
        <button type="submit" className="bg-purple-600 text-white px-4 py-2 rounded">
          Kirim Komentar
        </button>
      </form>
      <ul className="mt-6 space-y-2">
        {comments.map((c) => (
          <li key={c.id} className="bg-gray-100 p-3 rounded shadow">
            {c.text}
            <div className="text-sm text-gray-500">{new Date(c.createdAt).toLocaleString()}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
