import { ArticleDetailDto } from "@/lib/dto/article";
import dayjs from "dayjs";
import 'dayjs/locale/ja';
dayjs.locale('ja');

interface Props {
  article: ArticleDetailDto;
}

export const ArticleDetail = async ({ article }: Props) => {

  const { title, createdAt, createdBy, contentHtml } = article;

  return (
    <article className="space-y-8 dark:bg-slate-800 dark:text-gray-50">
      <div className="space-y-6">
        <div className="flex flex-col space-y-4">
          <h1 className="leading-tight text-3xl md:text-4xl font-bold font-heading">{title}</h1>
        </div>
        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
          <div className="flex items-center md:space-x-2">
            <p className="text-sm text-slate-700 dark:text-slate-200">著者: {createdBy}</p>
          </div>
          <div>
            <p className="text-sm text-slate-500 dark:text-slate-300">公開日時: {dayjs(createdAt).format('YYYY/M/D(ddd) HH:mm')}</p>
          </div>
        </div>
      </div>
      <div className="dark:text-gray-100 my-4">
        <div className="rich-text" dangerouslySetInnerHTML={{ __html: contentHtml }} />
      </div>
    </article>
  );
};
