import Card from './Card'

export default function News() {

    return <div > 
    <h1 className="font-bold "> Stock Quotes</h1>
    <ul className="flex flex-col gap-1">
        <li>
            <Card>
                <h3>Stock 1</h3>
                <p>Price</p>
                <p>Daily Change</p>
            </Card>
            
        </li>
        <li>
            <Card>
                <h3>Stock 2</h3>
                <p>Price</p>
                <p>Daily Change</p>
            </Card>
            
        </li>
        <li>
            <Card>
                <h3>Stock 3</h3>
                <p>Price</p>
                <p>Daily Change</p>
            </Card>
            
        </li>
    </ul>
</div>
}