import {Link, NavLink} from 'react-router-dom'
export default function Header(){
    return(
        <>
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl"></div>
                    <Link className="flex items-center">
                    <img 
                    src="https://cdn.pixabay.com/photo/2023/01/31/01/50/crown-7756927_1280.png"
                    alt="logo" 
                    />
                    </Link>
            </nav>

        </header>
        </>
    )
}