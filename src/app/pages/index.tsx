import { useEffect, useState } from 'react';

type Post = {
  id: number;
  attributes: {
    title: string;
    content: string;
    slug: string;
  };
};

export default function Home() {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/posts?populate=*&pagination[limit]=1`
        );
  
        if (!res.ok) throw new Error('Fehler beim Abrufen der Daten');
  
        const data = await res.json();
        setPost(data.data[0]);
      } catch (err) {
        console.error('Fehler beim Laden des Beitrags:', err);
      }
    };
  
    fetchPost();
  }, []);
  

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Neuester Beitrag</h1>

      {post ? (
        <article className="bg-white p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{post.attributes.title}</h2>
          <div className="mt-2 text-gray-700">
            {post.attributes.content}
          </div>
        </article>
      ) : (
        <p>Lade Beitrag …</p>
      )}
    </main>
  );
}
