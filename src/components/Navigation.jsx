import Image from "next/image";

export const Navigation = () => {
  const links = [
    "about",
    "learning",
    "condition",
    "schedule",
    "faq",
    "contact",
    "registration",
  ];

  return (
    <nav className=" border-gray-200 px-2 sm:px-4 py-2.5 w-full sticky top-0">
      <div className="container flex flex-wrap justify-center items-start mx-auto relative md:space-x-5">
        <div className="h-[12vh] relative w-[12vh] min-h-[50px] min-w-[20px] mt-[-1vh]">
          <Image
            src="/assets/comcamp.png"
            alt="comcamp logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu-2"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <div className="h-[12vh] relative w-[12vh] min-h-[50px] min-w-[50px] mt-[-1vh] mx-6">
            <Image
              src="/assets/hamburger.svg"
              alt="comcamp logo"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-6 md:mt-0 md:text-sm md:font-medium">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="block mt-3 py-2 min-h-0 rounded md:bg-transparent md:p-0 text-white font-pixel hover:text-text-highlight"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
