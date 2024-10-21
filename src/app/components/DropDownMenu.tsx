export default function DropDownMenu({ toggleDarkMode }: { toggleDarkMode: () => void }, isDarkMode: boolean) {

    return <div className="absolute top-16 right-0 w-48 bg-background text-text shadow-md md:hidden">
        <ul className="flex flex-col space-y-2 p-4">
            <li><a href="/">Home</a></li>
            <li><a href="/portfolio">My Portfolio</a></li>
            <li><a href="/journal">Trading Journal</a></li>
            <li><a href="/log-in">Log In</a></li>
            <li><a href="/sign-up">Sign Up</a></li>
            <li>
            <button
                            onClick={toggleDarkMode}
                            className={`relative inline-flex items-center h-6 w-12 hover:bg-slate-200 rounded-full transition-colors duration-300 ease-in-out ${isDarkMode ? 'bg-textSecondary' : 'bg-cardHover'}`}
                        >
                            <span
                                className={`transform transition duration-300 ease-in-out inline-block h-4 w-4 rounded-full bg-white shadow-md ${isDarkMode ? 'translate-x-7' : 'translate-x-2'}`}
                            />
                        </button>
            </li>
        </ul>
    </div>
}