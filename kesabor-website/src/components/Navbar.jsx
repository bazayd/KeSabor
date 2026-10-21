import { Link } from "react-router-dom"; // or "react-router" in v7+

function Navbar() {
  return (
    <nav class="flex items-center justify-between flex-wrap  bg-white-950 p-6">
      <Link to="/">
        <div class="flex items-center flex-shrink-0 text-black-200 mr-6">
          <img
            src="/main_logo.png"
            alt="KeSabor logo"
            className="mr-2 h-12 w-12 rounded-full object-cover"
          />
          <span class="font-semibold text-xl tracking-tight">Ke Sabor</span>
        </div>
      </Link>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded text-black-200 border-teal-400 hover:text-white hover:border-white">
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <Link to="/menu">
            <a
              href="/menu"
              class="block mt-4 lg:inline-block lg:mt-0 text-black-200  hover:text-gray-400 mr-4"
            >
              Menu & Pricing
            </a>
          </Link>
          <Link to="/order-form">
            <a
              href="/order-form"
              class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-gray-400 mr-4"
            >
              Order Form
            </a>
          </Link>
          <Link to="/about-us">
            <a
              href="#responsive-header"
              class="block mt-4 lg:inline-block lg:mt-0 text-black-200 hover:text-gray-400 "
            >
              About Us
            </a>
          </Link>
        </div>
        <div>
          <Link to="/contact-us">
            <a
              href="#"
              class="inline-block text-sm px-4 py-2 leading-none border rounded text-black-200 border-black hover:border-transparent hover:text-white hover:bg-black mt-4 lg:mt-0"
            >
              Contact Us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
