import * as React from "react";

const pages = [
  { text: "HOME", ref: "#home" },
  { text: "ABOUT", ref: "#about" },
  { text: "SKILLS", ref: "#skills" },
  { text: "PROJECTS", ref: "#projects" },
  { text: "CONTACT", ref: "#contact" },
];

export function Header() {

  const [expanded, setExpanded] = React.useState(false);
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-black">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="#" className="flex items-center">
          <img
            src="./images/sheep.svg"
            className="bg-white h-6 mr-3 sm:h-9 rounded-full py-1 px-1"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            BrunoC
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={expanded}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className={`w-full md:block md:w-auto ${!expanded ? 'hidden' : ''}`} id="navbar-default">
          <ul className="z-50 flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-black md:dark:bg-black dark:border-gray-700">
            {pages.map((page) => (
              <li key={page.text}>
                <a
                  href={page.ref}
                  className="font-bold block py-2 pl-3 pr-4 text-white bg-blue-700 dark:bg-black rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  {page.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

{/* <a href="#" className="flex items-center">
          <img
            src="./images/sheep.svg"
            className="bg-white h-6 mr-3 sm:h-9 rounded-full py-1 px-1"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            BrunoC
          </span>
        </a> */}

// {pages.map((page) => (
//   <li key={page.text}>
//     <a
//       href={page.ref}
//       className="block py-2 pl-3 pr-4 font-bold text-white bg-amber-300 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
//       aria-current="page"
//     >
//       {page.text}
//     </a>
//   </li>
// ))}