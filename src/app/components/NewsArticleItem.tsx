import { Article } from "../lib/definitions";

function formatDateTime(dateTimeStr: string): string {
  // Extract date components from the input string
  const year = dateTimeStr.substring(0, 4);
  const month = dateTimeStr.substring(4, 6);
  const day = dateTimeStr.substring(6, 8);
  const hour = dateTimeStr.substring(9, 11);
  const minute = dateTimeStr.substring(11, 13);

  // Create a new Date object
  const date = new Date(`${year}-${month}-${day}T${hour}:${minute}`);

  // Extract formatted values
  const formattedTime = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const formattedDate = date.toLocaleDateString([], {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });

  // Return the formatted string in "hh:mm , dd/mm/yy" format
  return `${formattedTime}, ${formattedDate}`;
}

export default function NewsArticleItem({ article }: Article) {
  const dateTimeStr = formatDateTime(article.time_published);

  return (
    <a
      href={article.url}
      className="flex p-4 my-2 bg-card rounded-md hover:bg-cardHover relative "
    >
      <img
        className="w-40 h-40 "
        alt={article.title}
        src={article.banner_image}
      ></img>
      <div>
        <span className="absolute bottom-4 right-4  text-text bg-gra rounded-2xl px-2">
          {dateTimeStr}
        </span>
      </div>
      <div className="border-l-2 border-complement pl-4 ml-4 flex flex-col">
        <h2 className="font-bold md:text-lg text-text line-clamp-3">
          {article.title}
        </h2>
        <p className="mb-6 text-text line-clamp-2">{article.summary}</p>
        <p className="text-textSecondary mt-auto">{article.source}</p>
      </div>
    </a>
  );
}
