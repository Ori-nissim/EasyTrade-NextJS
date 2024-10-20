export interface Article {
    article: {
        title: string;
        // Add any other properties you need from the article object
        url: string; // Example property, replace with actual properties
        summary: string; // Example property
        banner_image: string;
        source: string

    }
}

export default function NewsArticleItem({ article }: Article) {

    return (
        <a href={article.url} className="flex p-4 my-2 bg-white rounded-md">
            <img className="w-1/5" alt={article.title} src={article.banner_image}></img>
            <div className="ml-4 flex flex-col">
                <h2 className="font-bold">{article.title}</h2>
                <p className="mb-6">{article.summary}</p>
                <p className="text-gray-500 mt-auto">{article.source}</p>
            </div>

        </a>
    );
}
