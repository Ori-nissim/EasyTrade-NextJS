
import NewsArticleItem from './NewsArticleItem';
import {Article} from "./NewsArticleItem"

export default async function News(props:{currentPage:number}) {
    const apiKey = process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY;

    const response = await fetch(`https://www.alphavantage.co/query?function=NEWS_SENTIMENT&limit=10&apikey=` + apiKey);
    let news = await response.json();
    news = news["feed"]

    // show the current page
    const articlesPerPage = 5

    const start = (props.currentPage-1) * articlesPerPage
    const end = start + articlesPerPage
    
    const newsPage = news.slice(start,end)
    
    return <div className='mt-4'>
        <h1 className="font-bold text-xl mb-1 text-text">Latests news</h1>
        <ul className="flex flex-col gap-1">
            {newsPage.map((article: Article,index: number) => {
                return (
                <li key ={index}>
                    <NewsArticleItem article={article} key={index}></NewsArticleItem>
                        
                        
                </li>);
            })}
       </ul>
    </div>
}