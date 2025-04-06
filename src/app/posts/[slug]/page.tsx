import { notFound } from "next/navigation";
import { marked } from "marked";
import PostView from "./PostView";

type Attachment = {
  id: number;
  name: string;
  url: string;
  mime: string;
};

type Post = {
  id: number;
  title: string;
  content: string;
  html: string;
  attachment: Attachment[];
  image?: string;
  categories?: { name: string }[];
  author?: string;
  publishedAt?: string;
};

type Params = {
  params: {
    slug: string;
  };
};

// ✅ Diese Funktion ist async → daher später mit `await` aufrufen!
const renderMarkdown = async (markdown: string): Promise<string> => {
  const html = await marked.parse(markdown || "");
  return html.replace(
    /src="\/uploads\/([^"]+)"/g,
    `src="${process.env.NEXT_PUBLIC_API_URL}/uploads/$1"`
  );
};

export default async function Page({ params }: Params) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts?filters[slug][$eq]=${params.slug}&populate=*`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  const raw = data.data?.[0];
  if (!raw) return notFound();

  // ✅ Hier await nicht vergessen
  const html = await renderMarkdown(raw.content);

  const post: Post = {
    id: raw.id,
    title: raw.title,
    content: raw.content,
    html,
    attachment: raw.attachment || [],
    image: raw.thumbnail?.url,
    categories: raw.categories?.map((cat: any) => ({ name: cat.name })),
    author: raw.author?.name,
    publishedAt: raw.publishedAt,
  };

  return <PostView post={post} />;
}
