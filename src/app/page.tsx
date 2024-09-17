import { ENDPOINT, fetchAPI } from "@/lib/api";
import { ArticleListDto } from "@/lib/dto/article";
import ArticleListItem from "@/lib/component/article-list-item";

const Page = async () => {
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
    return (
      <div>
        <h1 className="text-4xl font-bold mb-8">新着記事</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">新着記事</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
        {data && data.map((item) => (
          <ArticleListItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;