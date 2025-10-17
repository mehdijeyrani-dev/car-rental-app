import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/data";
import Navbar from "./Navbar";
import { useUser, useClerk, UserButton } from "@clerk/clerk-react";
import { ScrollText } from "lucide-react";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [active, setActive] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();
  const { user } = useUser();
  const { openSignIn } = useClerk();
  const navigate = useNavigate();

  const isHomePage = location.pathname.endsWith("/");

  const toggleMenu = () => setMenuOpened((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 10);
      if (window.scrollY > 10) {
        setMenuOpened(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [location.pathname]);

  return (
    <header
      className={`${active ? "bg-white shadow-sm py-2" : "py-4"} ${
        !isHomePage && "bg-white"
      } fixed top-0 w-full left-0 right-0 z-50 transition-all duration-200`}
    >
      <div className="max-padd-container">
        {/* CONTAINER */}
        <div className="flexBetween">
          {/* LOGO */}
          <div className="flex flex-1">
            <Link to="/">
              <img
                src={assets.logoImg}
                alt="logoImg"
                width={88}
                className="h-7"
              />
              <span className="text-textColor uppercase text-xs font-extrabold tracking-[6px] relative bottom-1">
                Rentroo
              </span>
            </Link>
          </div>
          {/* Navbar */}
          <Navbar
            setMenuOpened={setMenuOpened}
            containerStyles={
              menuOpened
                ? "flex flex-col items-start gap-y-8 fixed top-16 right-6 p-5 bg-white shadow-md w-52 ring-1 ring-slate-900/5 rounded-xl z-50"
                : "hidden lg:flex gap-x-5 xl:gap-x-1 text-sm font-semibold p-1"
            }
          />
          {/* Buttons, Searchbar & Profile */}
          <div className="flex sm:flex-1 items-center sm:justify-end gap-x-4 sm:gap-x-8">
            {/* Searchbar */}
            <div className="relative hidden xl:flex items-center">
              {/* Input */}
              <div
                className={`transition-all duration-300 ease-in-out ring-1 ring-slate-900/10 bg-white rounded-full overflow-hidden ${
                  showSearch
                    ? "w-[266px] opacity-100 px-4 py-2"
                    : "w-11 opacity-0 px-0 py-0"
                }`}
              >
                <input
                  type="text"
                  placeholder="Type here..."
                  className="w-full text-sm outline-none pr-10 placeholder:text-gray-400"
                />
              </div>
              {/* Toggle Button */}
              <div
                className="absolute right-0 ring-1 ring-slate-900/10 bg-white p-[8px] rounded-full cursor-pointer z-10"
                onClick={() => setShowSearch((prev) => !prev)}
              >
                <img src={assets.search} alt="" />
              </div>
            </div>
            {/* Menu Toggle */}
            <>
              {menuOpened ? (
                <img
                  src={assets.close}
                  onClick={toggleMenu}
                  alt=""
                  className={`lg:hidden cursor-pointer text-xl`}
                />
              ) : (
                <img
                  src={assets.menu}
                  onClick={toggleMenu}
                  alt=""
                  className={`lg:hidden cursor-pointer text-xl`}
                />
              )}
            </>
            {/* User Profile */}
            <div className="group mt-1.5 mr-2">
              {user ? (
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: {
                        width: "42px",
                        height: "42px",
                      },
                    },
                  }}
                >
                  <UserButton.MenuItems>
                    <UserButton.Action
                      label="My Bookings"
                      labelIcon={<ScrollText size={14} />}
                      onClick={() => navigate("/my-bookings")}
                    />
                  </UserButton.MenuItems>
                </UserButton>
              ) : (
                <button
                  onClick={openSignIn}
                  className="btn-solid bg-black flexCenter gap-2 rounded-full"
                >
                  Login
                  <img src={assets.user} alt="userIcon" className="invert" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
