import StockQuotes from "./components/StockQuotes";
import News from "./components/News";
import Banner from "./components/Banner";
import TickerTape from "./components/TickerTape";

export default async function Home(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;

  return (
    <div>
      <TickerTape />
      <div className="flex flex-col md:flex-row">
        <StockQuotes />
        <Banner />
      </div>

      <News searchParams={searchParams} />
    </div>
  );
}
