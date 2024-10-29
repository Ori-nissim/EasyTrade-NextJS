import Header from "./components/Header";
import StockQuotes from "./components/StockQuotes";
import News from "./components/News";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";
import TickerTape from "./components/TickerTape";
import Banner from "./components/Banner";
import { SessionProvider } from "next-auth/react";

export default function Home() {
  return (
    <div>
      <SessionProvider>
        <Header />
        <TickerTape />
        <ContentContainer>
          <div className="flex flex-col md:flex-row flex-grow w-full gap-y-4 md:gap-x-4">
            <StockQuotes />
            <Banner />
          </div>
          <News />
        </ContentContainer>
        <Footer />
      </SessionProvider>
    </div>
  );
}
