export default function StockQuoteCard(props: React.PropsWithChildren) {
    return <div className="bg-gray-200 flex flex-col justify-evenly hover:bg-gray-300 sm:flex-row">{props.children}</div>; 
}