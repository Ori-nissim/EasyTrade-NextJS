import Header from "./components/Header";
import StockQuotes from "./components/StockQuotes";
import News from "./components/News";
import Footer from "./components/Footer";
import ContentContainer from "./components/ContentContainer";

export default function Home() {
  return (
   <div>
      <Header />
      <ContentContainer>
        <StockQuotes />
        <News />
      </ContentContainer>
      <Footer />
    </div>
  );
}
