import { ENDPOINT, fetchAPI } from "@/lib/api";
import { ArticleDetailDto } from "@/lib/dto/article";
import { ArticleDetail } from "./article-detail";
import { extractRelatedCategories, nameByCategory } from "@/lib/enum/category";

interface Props {
  params: { articleId: string };
}

const Page = async ({ params }: Props) => {

  const { articleId } = params;

  let data: ArticleDetailDto | null = null;
  let error: string | null = null;

  try {
    data = await fetchAPI<ArticleDetailDto>(ENDPOINT.ARTICLE(articleId));
  } catch (err) {
    console.error("Failed to fetch data:", err);
    error = "Failed to load article detail. Please try again later.";
  }

  if (error) {
    return (
      <div>
        <h1 className="text-4xl font-bold mb-8">記事詳細</h1>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div>
      {
        data && (
          <div>
            <ArticleDetail article={data} />
            <h1 className="text-3xl font-bold mt-8 mb-4">関連カテゴリ</h1>
            <div className="flex gap-1">
              {
                extractRelatedCategories(data.slug ?? '').map((category) => (
                  <a key={category} href={`/categories/${category}`} className="bg-gray-100 text-gray-800 text-xl font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-200">{nameByCategory(category)}</a>
                ))
              }
            </div>
            <h1 className="text-3xl font-bold mt-8 mb-4">関連タグ</h1>
            <div className="flex gap-1">
              {
                data.tags.map((t) => (
                  <a key={t.id} href={`/tags/${t.name}`} style={{ color: `${t.color}`, border: `solid 1px ${t.color}` }} className="bg-white text-xl font-medium me-2 px-2.5 py-0.5 rounded-full hover:bg-gray-50">#{t.name}</a>
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Page;