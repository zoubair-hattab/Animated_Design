import { useEffect, useState } from 'react';

import logo from '../../assets/food/logo.png';
import { Link } from 'react-router-dom';
import {
  IoCartOutline,
  IoCloseOutline,
  IoMenu,
  IoMenuOutline,
} from 'react-icons/io5';
import { motion } from 'framer-motion';
export default function Navbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const navItems = [
    {
      title: 'Home',
      path: '/',
      delay: 0.1,
    },
    {
      title: 'Menu',
      path: '/menu',
      delay: 0.2,
    },
    {
      title: 'About',
      path: '/about',
      delay: 0.3,
    },
    {
      title: 'Delivery',
      path: '/delivery',
      delay: 0.4,
    },
    {
      title: 'Contact Us',
      path: '/contact',
      delay: 0.5,
    },
  ];
  const slideDown = (delay) => {
    return {
      initial: {
        y: '-100%',
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 0.8,
          delay: delay,
        },
      },
    };
  };

  return (
    <header className=" relative  bg-lightYellow z-[1000]">
      <nav className="container relative">
        <div className="w-full  flex items-center justify-between gap-6 font-leagueGothic">
          {/*  logo section */}
          <Link to="/" className="inline-block w-24">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              src={logo}
              alt="logo"
              className="w-full "
            />
          </Link>
          <ul className="hidden md:flex items-center   gap-6">
            {navItems.map((item, index) => (
              <motion.li
                variants={slideDown(item.delay)}
                initial="initial"
                animate="animate"
                key={index}
                className="hover:text-darkGreen"
              >
                <Link
                  to={item.path}
                  className="text-2xl inline-block px-2 py-2' "
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
          {/* mobile divices */}
          {openNavbar && (
            <ul className="absolute top-[72.31px] left-0 md:hidden space-y-5 py-2 px-[1rem] text-center w-full bg-gray-300 z-[999]">
              {navItems.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setOpenNavbar(false)}
                  className="hover:text-darkGreen"
                  className="hover:text-darkGreen hover:ml-6 duration-300"
                >
                  <Link
                    to={item.path}
                    className="text-2xl inline-block px-2 py-2 "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <div className="flex items-center gap-x-1.5">
            <motion.button
              variants={slideDown(1)}
              initial="initial"
              animate="animate"
              className=" h-[40px] w-[40px] rounded-full text-white bg-dark grid place-items-center "
            >
              <IoCartOutline size={25} />
            </motion.button>

            {openNavbar ? (
              <motion.button
                variants={slideDown(1.3)}
                initial="initial"
                animate="animate"
                className="h-[40px] w-[40px] rounded-full text-white bg-dark grid place-items-center md:hidden"
                onClick={() => setOpenNavbar(false)}
              >
                <IoCloseOutline size={25} />
              </motion.button>
            ) : (
              <motion.button
                variants={slideDown(1.3)}
                initial="initial"
                animate="animate"
                className="h-[40px] w-[40px] rounded-full text-white bg-dark grid place-items-center md:hidden"
                onClick={() => setOpenNavbar(true)}
              >
                <IoMenuOutline size={25} />
              </motion.button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
