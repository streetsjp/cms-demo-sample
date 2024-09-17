import { ENDPOINT, fetchAPI } from "@/lib/api";
import { ArticleListDto } from "@/lib/dto/article";
import ArticleListItem from "@/lib/component/article-list-item";

const Page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) => {
  const query = (searchParams.q || '') as string;
  let data: ArticleListDto[] | null = null;
  let error: string | null = null;

  try {
    data = await fetchAPI<ArticleListDto[]>(`${ENDPOINT.ARTICLES}?q=${query}`);
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
        <h1 className="text-4xl font-bold mb-8">検索結果: {query}</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">検索結果: {query}</h1>
      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3">
        {data && data.map((item) => (
          <ArticleListItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Page;
