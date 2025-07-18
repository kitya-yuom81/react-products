import { useState } from "react";
import { NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const menu =[
  //   {
  //     tittle: "Products"
  //     path: "/products"
  //   }
  //    {
  //     tittle: "Services"
  //     path: "/services"
  //   }
  //    {
  //     tittle: "About Us"
  //     path: "/about-us"
  //   }

  // ]
  // {menu.map(nav, index) => (
    // use list and navlink)}
  

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold transition"
      : "text-white hover:text-yellow-300 transition";
  const buttonLinkClass = ({ isActive }) =>
    isActive
      ? "block bg-yellow-300 text-indigo-900 text-center px-4 py-2 rounded-xl font-semibold transition-all mt-2"
      : "block bg-white text-indigo-700 text-center px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold mt-2";

  return (
    <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 text-white text-2xl font-bold">
            MyBrand
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 font-medium text-white">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
          </div>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <NavLink to="/login" className={buttonLinkClass}>
              Login
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none text-2xl"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-2 px-2 pb-4 space-y-2 text-white font-medium">
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about" className={navLinkClass}>
              About
            </NavLink>
            <NavLink to="/services" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>
            <NavLink to="/login" className={buttonLinkClass}>
              Login
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
