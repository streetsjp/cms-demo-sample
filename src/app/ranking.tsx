import { ENDPOINT, fetchAPI } from "@/lib/api";
import { ArticleListDto } from "@/lib/dto/article";
import Link from "next/link";
import dayjs from "dayjs";
import 'dayjs/locale/ja';
dayjs.locale('ja');

const Ranking = async () => {
  let data: ArticleListDto[] | null = null;
  let error: string | null = null;

  try {
    data = await fetchAPI<ArticleListDto[]>(ENDPOINT.ARTICLES);
    if (!Array.isArray(data)) {
      throw new Error("API response is not an array");
    }
  } catch (err) {
    console.error("Failed to fetch data:", err);
    error = "Failed to load articles. Please try again later.";
  }

  if (error) {
    return null;
  }

  const top10 = data?.slice(0, 10);
  return (
    <div className="container mx-auto">
      <h1 className="text-xl font-bold mb-2">総合ランキング</h1>
      <div className="space-y-4">
        {top10?.map((article, index) => (
          <Link href={`/articles/${article.id}`} key={article.id}>
            <div className="bg-white overflow-hidden flex items-center transform transition-transform duration-200 hover:scale-105">
              <div className="flex-shrink-0">
                <img src={article.mainImageUrl} alt={`Image for ${article.title}`} className="w-24 h-24 object-cover" />
              </div>
              <div className="p-4">
                <p className="font-bold">{index + 1}位</p>
                <div className="text-sm">{article.title}</div>
                <div className="text-gray-500 text-xs">{dayjs(article.createdAt).format('YYYY/M/D(ddd) HH:mm')}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Ranking;