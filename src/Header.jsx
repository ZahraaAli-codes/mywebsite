import { useState } from 'react';
import logo from "./assets/logo.png"; // Assuming logo.png is your Fati's logo

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Gave the header a fixed height (e.g., h-20 which is 80px)
    // This ensures a consistent base for positioning the dropdown below it.
    <header className="bg-[#FD5EA3] text-white p-4 w-full shadow-lg relative h-20"> {/* Added relative and h-20 */}
      <nav className="flex justify-between items-center w-full min-w-max max-w-5xl mx-auto"> {/* Removed relative from nav */}

        {/* Hamburger/X Button for Mobile */}
        <div className="md:hidden flex items-center z-40">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path> // X icon
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path> // Hamburger icon
              )}
            </svg>
          </button>
        </div>

        {/* --- SINGLE LOGO FOR BOTH DESKTOP AND MOBILE HEADER --- */}
        {/* Positioned relative to the header. */}
        <div className="absolute left-1/2 -translate-x-1/2 z-10" style={{ top: '-1px' }}>
          <a href="/">
            <img
              src={logo}
              alt="Fati's Logo"
              className="h-50 sm:h-50 md:h-50 w-auto transition-all duration-300 ease-in-out"
            />
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <ul className={`hidden md:flex md:list-none w-full justify-around items-center`}>
          {/* Left side links */}
          <div className="flex gap-x-8 lg:gap-x-20">
            <li> <a href="# " className="font-spicy-rice text-sm md:text-base lg:text-lg"> Home </a></li>
            <li> <a href="# " className="font-spicy-rice text-sm md:text-base lg:text-lg"> About Us </a></li>
            <li> <a href="# " className="font-spicy-rice text-sm md:text-base lg:text-lg"> Menu </a></li>
          </div>

          <div className="flex-grow min-w-[10px] md:px-5 lg:px-10 xl:px-20"></div>

          {/* Right side links */}
          <div className="flex gap-x-8 lg:gap-x-20">
            <li> <a href="# " className="font-spicy-rice text-sm md:text-base lg:text-lg"> Shop </a></li>
            <li> <a href="# " className="font-spicy-rice text-sm md:text-base lg:text-lg"> Careers </a></li>
            <li> <a href="# " className="font-spicy-rice text-sm md:text-base lg:text-lg"> Contact Us </a></li>
          </div>
        </ul>
      </nav>

      {/* Mobile Menu Dropdown (Rectangle under logo) */}
      {isOpen && (
        <div
          // Position absolute relative to the <header>
          // top-full will now reliably place it below the h-20 header.
          className={`md:hidden absolute left-1/2 -translate-x-1/2 bg-[#FD5EA3] shadow-lg rounded-b-lg p-4 z-20 top-full`} 
          style={{ width: 'calc(100% - 2rem)' }}
        >
          <ul className="list-none flex flex-col items-center gap-y-4 w-full">
            <li> <a href="# " onClick={toggleMenu} className="font-spicy-rice text-base sm:text-lg p-2 block w-full text-center"> Home </a></li>
            <li> <a href="# " onClick={toggleMenu} className="font-spicy-rice text-base sm:text-lg p-2 block w-full text-center"> About Us </a></li>
            <li> <a href="# " onClick={toggleMenu} className="font-spicy-rice text-base sm:text-lg p-2 block w-full text-center"> Menu </a></li>
            <li> <a href="# " onClick={toggleMenu} className="font-spicy-rice text-base sm:text-lg p-2 block w-full text-center"> Shop </a></li>
            <li> <a href="# " onClick={toggleMenu} className="font-spicy-rice text-base sm:text-lg p-2 block w-full text-center"> Careers </a></li>
            <li> <a href="# " onClick={toggleMenu} className="font-spicy-rice text-base sm:text-lg p-2 block w-full text-center"> Contact Us </a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;