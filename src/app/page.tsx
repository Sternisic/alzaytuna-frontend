"use client";

import { useEffect, useState } from "react";
import FeaturedCard from "@/components/FeaturedCard";
import SideCard from "@/components/SideCard";
import PostCard from "@/components/PostCard";

type Category = {
  name: string;
  slug: string;
};

type Post = {
  id: number;
  title: string;
  content: string | null;
  slug: string;
  publishedAt: string;
  categories: Category[];
  author?: {
    name: string;
  } | null;
  thumbnail?: {
    url: string | null;
    alternativeText?: string;
  };
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/posts?sort=publishedAt:desc&populate[categories]=true&populate[thumbnail]=true&populate[author]=true`
        );

        const data = await res.json();
        if (!res.ok) throw new Error("Fehler beim Abrufen der Daten");
        if (!data.data || data.data.length === 0) return;

        setPosts(data.data);
      } catch (err) {
        console.error("Fehler beim Laden der Beiträge:", err);
      }
    };

    fetchPosts();
  }, []);

  if (posts.length === 0) {
    return (
      <main className="p-6 sm:p-8 max-w-6xl mx-auto text-right" dir="rtl">
        <h1 className="text-4xl font-bold mb-10 text-olive-800">📚 المقالات</h1>
        <p className="text-gray-500">لا توجد مقالات</p>
      </main>
    );
  }

  const featuredMain = posts[0];
  const featuredSide = posts[1];
  const others = posts.slice(2);

  return (
    <main className="p-6 sm:p-8 max-w-6xl mx-auto text-right" dir="rtl">
      <h1 className="text-4xl font-bold mb-10 text-olive-800">📚 المقالات</h1>

      {/* 🟥 Featured-Bereich */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
        <FeaturedCard {...featuredMain} />
        {featuredSide && <SideCard {...featuredSide} />}
      </div>

      {/* 🔳 Weitere Beiträge */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {others.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </main>
  );
}
