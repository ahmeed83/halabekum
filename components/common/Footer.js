import Link from "next/link";

export const Footer = () => {
    return (
        <footer className="p-2 md:py-6 md:px-16 shadow md:flex items-center md:justify-between bg-gray-800">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022
                Hala Bekum. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 sm:mt-0 text-sm text-gray-400">
                <li>
                    <Link href="/about">
                        <a className="px-4 md:px-2 hover:underline md:mr-6">About</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className="px-4 md:px-2 hover:underline md:mr-6">Privacy Policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a className="px-4 md:px-2 hover:underline md:mr-6">Contact</a>
                    </Link>
                </li>
            </ul>
        </footer>
    )
}