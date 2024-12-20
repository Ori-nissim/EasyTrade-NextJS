import StockQuotes from "./components/StockQuotes";
import News from "./components/News";
import Banner from "./components/Banner";
import TickerTape from "./components/TickerTape";
import Pagination from "./components/Pagination";

export default async function Home(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {


  const searchParams =  await props.searchParams
  
  const currentPage = Number(searchParams?.page) || 1;
  
  const totalPages = 10 // 50 news articles are sent in the query

  return (
    <div>
      <div className="flex flex-col md:flex-row">
      <StockQuotes />
      <Banner />
      </div>
      {<Pagination totalPages={totalPages} currentPage={currentPage}/>}
      <News currentPage={currentPage}/>
      <TickerTape/>
    </div>
  );
}
