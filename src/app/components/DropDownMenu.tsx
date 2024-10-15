export default function DropDownMenu() {
    return <div className="absolute top-16 right-0 w-48 bg-white shadow-md sm:hidden">
        <ul className="flex flex-col space-y-2 p-4">
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">My Portfolio</a></li>
            <li><a href="/journal">Trading Journal</a></li>
            <li><a href="/log-in">Log In</a></li>
            <li><a href="/sign-up">Sign Up</a></li>
        </ul>
    </div>
}