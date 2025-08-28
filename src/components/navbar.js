'use client'
import 'flowbite';
import { useEffect } from "react";

const Navbar = () => {
	useEffect(() => {
    	import("flowbite");
  	}, []);

	return (
		<>
		<nav className="bg-transparent border-gray-200 px-10 sm:p-5 dark:bg-transparent">
		  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-10 text-black">
		    <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
		        <span className="self-center text-2xl font-semibold whitespace-nowrap">LBL Creations</span>
		    </a>
		    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
		        <span className="sr-only">Open main menu</span>
		        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
		            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
		        </svg>
		    </button>
		    <div className="hidden sm:transition duration-700 ease-in-out w-full md:block md:w-auto" id="navbar-default">
		      <ul className="bg-transparent border-l-4 border-l-[#070F2B] rounded-none sm:bg-transparent font-medium text-black flex flex-col py-2 md:p-0 mt-4 border border-transparent rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
		        <li>
		          <a href="#about" className="block py-2 px-3 text-black sm:text-black rounded-sm hover:text-[#ff000] md:hover:bg-transparent md:border-0 md:hover:text-[#ff0000] md:p-0 md:dark:hover:text-[#ff0000] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
		        </li>
		        <li>
		          <a href="#services" className="block py-2 px-3 text-black sm:text-black rounded-sm hover:text-[#ff000] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#ff0000] dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
		        </li>
		        <li>
		          <a href="#contact" className="block py-2 px-3 text-black sm:text-black rounded-sm hover:text-[#ff000] md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-[#ff0000] dark:hover:bg-gray-700 dark:hover:text-[#ff0000] md:dark:hover:bg-transparent">Contact</a>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
		</>
	);
}

export { Navbar };