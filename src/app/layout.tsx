import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dayjs from "dayjs";
import 'dayjs/locale/ja';
import Link from "next/link";
import Ranking from "./ranking";
import SearchForm from "./search-form";

dayjs.locale('ja');

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CMS DEMO",
  description: "This is CMS DEMO SITE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="border-b border-gray-300 p-4">
          <div className="container mx-auto flex items-center justify-between">
            <div className="text-x font-bold hidden sm:block">
              <p style={{ width: '200px' }}>
                {dayjs().format('YYYY/M/D(ddd)')}
              </p>
            </div>
            <Link className="text-2xl font-bold" href={`/`}>
              CMS DEMO
            </Link>
            <SearchForm />
          </div>
        </header>
        <nav className="border-b border-gray-300 px-12 hidden md:block">
          <ul className="flex justify-around font-bold">
            <li className="relative group flex-grow">
              <Link href="/categories/entertainment" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">芸能</Link>
              <ul className="absolute invisible group-hover:visible left-0 bg-gray-50">
                <li><Link href="/categories/entertainment-news" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">エンタメニュース</Link></li>
                <li><Link href="/categories/entertainment-interview" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">インタビュー</Link></li>
              </ul>
            </li>
            <li className="flex-grow">
              <Link href="/categories/koushitsu" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">皇室</Link>
            </li>
            <li className="flex-grow">
              <Link href="/categories/domestic" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">国内</Link>
            </li>
            <li className="relative group flex-grow">
              <Link href="/categories/international" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">海外</Link>
              <ul className="absolute invisible group-hover:visible left-0 bg-gray-50">
                <li><Link href="/categories/international-news" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">海外ニュース</Link></li>
                <li><Link href="/categories/international-knews" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">韓流ニュース</Link></li>
              </ul>
            </li>
            <li className="flex-grow">
              <Link href="/categories/sports" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">スポーツ</Link>
            </li>
            <li className="relative group flex-grow">
              <Link href="/categories/life" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">ライフ</Link>
              <ul className="absolute invisible group-hover:visible left-0 bg-gray-50">
                <li><Link href="/categories/life-beauty" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">美容</Link></li>
                <li><Link href="/categories/life-health" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">健康</Link></li>
                <li><Link href="/categories/life-living" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">暮らし</Link></li>
                <li><Link href="/categories/life-gourmet" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">グルメ</Link></li>
              </ul>
            </li>
            <li className="flex-grow">
              <Link href="/categories/region" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">地域</Link>
            </li>
            <li className="flex-grow">
              <Link href="/categories/column" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">コラム</Link>
            </li>
            <li className="flex-grow">
              <Link href="/categories/fortune" className="block px-4 py-2 text-gray-700 hover:bg-gray-200">占い</Link>
            </li>
          </ul>
        </nav>
        <div className="container mx-auto p-4 md:px-0">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-3/4 p-4">
              {children}
            </div>
            <div className="w-full md:w-1/4 p-4 md:border-l md:border-gray-300">
              <div style={{ height: '200px' }} className="full-w bg-gray-100 flex justify-center items-center mb-6">
                <p className="font-bold">広告サンプル</p>
              </div>
              <Ranking />
            </div>
          </div>
        </div>
        <footer className="md:border-t md:border-gray-300 p-4">
          <div className="my-4 container mx-auto flex items-center">
            <p className="text-gray-500 text-sm">
              Copyright © 2024 Streets Inc. All Right Reserved.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
