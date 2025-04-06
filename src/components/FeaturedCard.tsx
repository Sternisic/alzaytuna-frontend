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

export default function FeaturedCard({
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
    <div className="lg:col-span-2 relative flex flex-col bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition h-full">
      {/* Banner */}
      <span className="absolute top-4 right-[-40px] rotate-45 bg-red-600 text-white text-xs font-bold px-12 py-1 shadow-lg z-10">
        جديد
      </span>

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

      <div className="p-6 flex flex-col h-full text-right">
        {/* Kategorien (außerhalb des Haupt-Links!) */}
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

        {/* Titel */}
        <Link href={`/posts/${slug}`}>
          <h3 className="text-2xl font-bold text-olive-800 mb-3 hover:underline line-clamp-2">
            {title}
          </h3>
        </Link>

        {/* Text */}
        <p className="text-base text-gray-700 leading-relaxed line-clamp-4 whitespace-pre-line mb-5">
          {content?.substring(0, 250) || "لا يوجد محتوى بعد"}
        </p>

        {/* Weiterlesen */}
        <Link
          href={`/posts/${slug}`}
          className="text-olive-600 text-base font-medium hover:underline"
        >
          اقرأ المزيد →
        </Link>

        {/* Autor und Datum */}
        <div className="mt-auto pt-4 text-sm text-gray-500 text-left">
          <span>
            {author?.name || "—"} | {formatDate(publishedAt)}
          </span>
        </div>
      </div>
    </div>
  );
}
