import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  content: string | null;
  publishedAt: string;
  author?: { name: string } | null;
  categories?: { name: string; slug: string }[];
  thumbnail?: {
    url: string | null;
    alternativeText?: string;
  };
};

export default function PostCard({
  slug,
  title,
  content,
  publishedAt,
  author,
  categories = [],
  thumbnail,
}: Props) {
  const formatDate = (dateStr: string) =>
    new Date(dateStr).toLocaleDateString("ar-EG", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const getImageUrl = (url?: string | null) =>
    url ? `${process.env.NEXT_PUBLIC_API_URL}${url}` : "";

  return (
    <div
      className="flex flex-col bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden h-full"
      dir="rtl"
    >
      {/* Bild */}
      {thumbnail?.url && (
        <Link href={`/posts/${slug}`}>
          <img
            src={getImageUrl(thumbnail.url)}
            alt={thumbnail.alternativeText || title}
            className="w-full h-48 object-cover"
          />
        </Link>
      )}

      <div className="p-5 flex flex-col h-full">
        {/* Kategorien links */}
        {categories.length > 0 && (
          <div className="mb-3 flex flex-wrap gap-2 justify-start" dir="ltr">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="bg-olive-100 text-olive-800 px-3 py-1 rounded text-sm hover:underline transition"
              >
                {cat.name}
              </Link>
            ))}
          </div>
        )}

        <Link href={`/posts/${slug}`}>
          <h3 className="text-xl font-semibold text-olive-800 mb-3 line-clamp-2 hover:underline">
            {title}
          </h3>
        </Link>

        <p className="text-base text-gray-700 leading-relaxed line-clamp-4 whitespace-pre-line mb-5">
          {content?.substring(0, 250) || "لا يوجد محتوى بعد"}
        </p>

        <Link
          href={`/posts/${slug}`}
          className="text-olive-600 text-base font-medium hover:underline"
        >
          اقرأ المزيد →
        </Link>

        <div className="mt-auto pt-4 text-sm text-gray-500 text-left">
          <span>
            {author?.name || "—"} | {formatDate(publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
}
