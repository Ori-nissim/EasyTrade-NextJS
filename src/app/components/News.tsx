
import NewsArticleItem from './NewsArticleItem';
import {Article} from "./NewsArticleItem"

export default async function News() {
    const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;


    const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&limit=10&apikey=` + apiKey);
    let news = await response.json();
    news = news["feed"]

    return <div className='my-4'>
        <h1 className="font-bold text-xl mb-1 text-text">Latests news</h1>
        <ul className="flex flex-col gap-1">
            {news.map((article: Article,index: number) => {
                return (
                <li key ={index}>
                    <NewsArticleItem article={article} key={index}></NewsArticleItem>
                        
                        
                </li>);
            })}
       </ul>
    </div>
}