import { useEffect, useState } from "react";

export const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = ["home", "menu", "contact"];
  return (
    <nav
      className={`py-[30px] w-[100%] h-[40px]  bg-black md:h-[80px] md:bg-transparent flex justify-center border-b-[1px] border-borderBtm z-[2]   
        ${
          isFixed
            ? "fixed animate-slide-down backdrop-blur border-b-2 border-brown shadow-shadow"
            : "absolute"
        }`}
    >
      <div className="w-[100dvw] flex items-center justify-between">
        <div className="flex flex-col items-center font-[700] leading-none pl-[20px]">
          <span className="text-[16px] text-brown md:text-[22px]">THOOKU</span>
          <span className=" text-[14px] text-white  md:text-[18px]">
            BIRYANI
          </span>
        </div>
        <div className="hidden md:flex gap-[60px] items-center w-[600px] uppercase">
          {navLinks.map((link, index) => {
            return (
              <a
                className="no-underline font-bold text-[13px] text-brown hover:text-brown hover:transition-all"
                href={"#" + link}
                key={index}
              >
                {link}
              </a>
            );
          })}

          <div className="flex gap-[60px] items-center">
            <a href="">
              <img
                src="cart_shopping_icon.svg"
                className=" cursor-pointer"
              ></img>
            </a>

            <a
              href=""
              className="px-9 py-2 border font-bold border-brown bg-brown text-black rounded-[3px] hover:text-brown hover:bg-transparent hover:transition-all hover:border "
            >
              SignUp
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
