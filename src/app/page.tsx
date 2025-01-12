
import { auth } from "../auth"
import News from "./components/News";
import Banner from "./components/Banner";
import TickerTape from "./components/TickerTape";
import Watchlist from "./components/Watchlist";

export default async function Home(props: {
  searchParams?: Promise<{
    page?: string;
  }>;
}) {

  const searchParams = await props.searchParams;

  // Fetch session on the server side
  const session = await auth();
  
  return (
    <div>
      <TickerTape />
      <div className="flex flex-col md:flex-row">
        <Watchlist session={session}/>
        <Banner />
      </div>
      <News searchParams={searchParams} />
    </div>
  );
}
