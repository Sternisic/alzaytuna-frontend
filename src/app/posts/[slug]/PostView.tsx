"use client";

type Attachment = {
  id: number;
  name: string;
  url: string;
  mime: string;
};

type Post = {
  id: number;
  title: string;
  html: string;
  content: string;
  attachment: Attachment[];
  image?: string;
  categories?: { name: string }[];
  author?: string;
  publishedAt?: string;
};

export default function PostView({ post }: { post: Post }) {
  return (
    <div className="relative">
      <div className="mx-auto px-4 sm:px-6 max-w-3xl transition-all duration-300 ease-in-out pt-10">
        {/* Thumbnail */}
        {post.image && (
          <div className="mb-8 rounded-xl overflow-hidden shadow-lg">
            <img
              src={`${process.env.NEXT_PUBLIC_API_URL}${post.image}`}
              alt="Post image"
              className="w-full aspect-video object-cover object-top"
            />
          </div>
        )}

        {/* Titel */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-right mb-3 leading-snug tracking-tight text-gray-800">
          {post.title}
        </h1>

        {/* Ornament-Trennlinie mit weißem Freiraum */}
        <div className="flex items-center justify-center my-6 gap-4">
          <div className="h-px flex-1 bg-gray-300 relative before:absolute before:right-0 before:w-6 before:bg-white before:h-px" />
          <img
            src="/main_logo.svg"
            alt="Ornament"
            className="h-7 opacity-40 shrink-0"
          />
          <div className="h-px flex-1 bg-gray-300 relative after:absolute after:left-0 after:w-6 after:bg-white after:h-px" />
        </div>

        {/* Meta */}
        <div
          className="flex flex-wrap items-center justify-end gap-3 mb-8 text-sm text-gray-600 text-right pt-4"
          dir="rtl"
        >
          {post.categories?.map((cat, i) => (
            <span
              key={i}
              className="bg-[#e8ede5] text-[#7a8765] px-2 py-0.5 rounded-full text-xs font-medium"
            >
              {cat.name}
            </span>
          ))}
          {post.publishedAt && (
            <span>
              {new Date(post.publishedAt).toLocaleDateString("ar-EG")}
            </span>
          )}
          {post.author && <span className="text-gray-500">{post.author}</span>}
        </div>

        {/* Inhalt */}
        <article
          className="prose prose-lg sm:prose-base prose-img:mx-auto prose-img:rounded-md prose-img:shadow-md text-gray-800 max-w-none text-right leading-loose"
          dir="rtl"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />

        {/* Anhänge */}
        {post.attachment.length > 0 && (
          <section className="mt-14 border-t pt-6 text-right">
            <h2 className="text-xl font-semibold mb-4 text-[#7a8765]">
              المرفقات
            </h2>
            <ul className="list-disc pr-5 space-y-2 text-sm text-blue-700">
              {post.attachment.map((file) => (
                <li key={file.id}>
                  <a
                    href={`${process.env.NEXT_PUBLIC_API_URL}${file.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline hover:text-blue-900 transition"
                  >
                    {file.name}
                  </a>{" "}
                  {file.mime === "application/pdf" && "(PDF)"}
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
