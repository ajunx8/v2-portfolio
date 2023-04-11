import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import headIcon from "@/public/head_icon.png";

export default function Nav({ darkMode, setDarkMode }) {
    return (
        <nav className="sticky top-0 flex items-center justify-between w-full max-w-screen-lg p-5 mx-auto lg:px-2 lg:shadow-none bg-white rounded-b-3xl dark:bg-slate-300">
            <div>
                <Image src={headIcon} alt="" className="w-10" />
            </div>
            <ul className="flex items-center">
                <li>
                    <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl" />
                </li>
                <li>
                    <a className="bg-indigo-600 text-white px-4 py-2 rounded-md ml-8 shadow-slate-800 shadow-md hover:bg-amber-500" href="#">
                        Resume
                    </a>
                </li>
            </ul>
        </nav>
    );
}
