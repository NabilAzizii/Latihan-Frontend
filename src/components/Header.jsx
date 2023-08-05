import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const Header = () => {
  let Links = [
    { name: 'Home', link: '/' },
    { name: 'Shop', link: '/shop' },
    { name: 'Contact', link: '/contact' },
    { name: 'Policy', link: '/policy' },
  ];

  let [openNav, setOpenNav] = useState(false);

  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex items-center justify-between bg-[#f2f4f6] py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-[#00214d] uppercase">
          <span className="text-3xl text-[#00214d] mr-1 pt-2">
            <ion-icon name="planet-outline"></ion-icon>
          </span>
          Space
        </div>

        <div onClick={() => setOpenNav(!openNav)} className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          <ion-icon name={openNav ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 bg-[#f2f4f6] shadow-lg md:shadow-none md:bg-transparent absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0  transition-all duration-500 ease-in  ${
            openNav ? 'top-16 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'
          }`}
        >
          {Links.map((link) => (
            <li key={link.name} className="md:ml-8 text-base text-center md:my-0 my-7">
              <Link to={link.link} className="text-[#00214d] hover:bg-blue-gray-200 hover:rounded-md hover:py-2 hover:px-2 duration-100 ">
                {link.name}
              </Link>
            </li>
          ))}
          <Button>Get Started</Button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
