import Link from "next/link";
import dayjs from "dayjs";
import 'dayjs/locale/ja';
import { ArticleListDto } from "../dto/article";
dayjs.locale('ja');

interface Props {
  item: ArticleListDto;
}

const ArticleListItem = ({ item }: Props) => {
  return (
    <Link href={`/articles/${item.id}`}>
      <div className="block bg-white overflow-hidden transform transition-transform duration-200 hover:scale-105">
        <img src={item.mainImageUrl} alt="Article Image" className="w-full" />
        <div className="p-4">
          <h2 className="text-lg font-bold mb-2">{item.title}</h2>
          <p className="text-gray-700 mb-2">{item.sammary}</p>
          <p className="text-gray-500 text-sm">公開日時: {dayjs(item.createdAt).format('YYYY/M/D(ddd) HH:mm')}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleListItem;