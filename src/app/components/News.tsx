import { Article } from "../lib/definitions";
import NewsArticleItem from "./NewsArticleItem";
import Pagination from "./Pagination";

export default async function News(props: {
  searchParams?: {
    page?: string;
  };
}) {
  const searchParams = await props.searchParams;

  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = 10; // 50 news articles are sent in the query

  const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

  const response = await fetch(
    `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&limit=10&apikey=` +
      apiKey
  );

  let news = await response.json();
  news = news["feed"];

  // show the current page
  const articlesPerPage = 5;
  const start = (currentPage - 1) * articlesPerPage;
  const end = start + articlesPerPage;

  const newsPage = news?.slice(start, end);
  if (newsPage === undefined) return <div>Error fetching news</div>

  return (
    <div className="mt-4">
      <h1 className="font-bold text-2xl mb-1 text-text">Latests news</h1>
      {<Pagination totalPages={totalPages} currentPage={currentPage} />}
      <ul className="flex flex-col gap-1">
        {newsPage.map((article: Article, index: number) => {
          return (
            <li key={index}>
              <NewsArticleItem article={article} key={index}></NewsArticleItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
