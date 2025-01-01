export default async function fetchTickerSearchResults(query:string) {
    
  const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

  const response = await fetch(
    `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=`+query+ `&apikey=` +   apiKey
  );

  return await response.json();    
    
}