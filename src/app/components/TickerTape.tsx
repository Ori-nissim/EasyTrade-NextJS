import Script from "next/script";

export default function TickerTape() {
  return (
    <div className=" absolute top-30">
      {/* TradingView Widget BEGIN */}
  
        <div className="tradingview-widget-container__widget"></div>
        <div className="tradingview-widget-copyright "></div>
        <Script
          id="ticker-tape"
          type="text/javascript"
          src="https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"
          async
        >
          {`
            {
              "symbols": [
                {
                  "proName": "FOREXCOM:SPXUSD",
                  "title": "S&P 500 Index"
                },
                {
                  "proName": "BITSTAMP:BTCUSD",
                  "title": "Bitcoin"
                },
                {
                  "proName": "BITSTAMP:ETHUSD",
                  "title": "Ethereum"
                },
                {
                  "description": "Alphabet",
                  "proName": "NASDAQ:GOOG"
                },
                {
                  "description": "Apple",
                  "proName": "NASDAQ:AAPL"
                },
                {
                  "description": "Microsoft",
                  "proName": "NASDAQ:MSFT"
                }
              ],
              "showSymbolLogo": true,
              "isTransparent": false,
              "displayMode": "adaptive",
              "colorTheme": "light",
              "locale": "heb"
            }
            `}
        </Script>
 
      {/* TradingView Widget END */}
    </div>
  );
}
