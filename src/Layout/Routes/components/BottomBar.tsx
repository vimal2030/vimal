export const BottomBar = () => {
  const navLinks = [
    {
      name: "Shop",
      icon: "/home_icon.svg",
    },
    {
      name: "Search",
      icon: "/search_icon.svg",
    },
  ];
  return (
    <>
      {/* mobile bottom bar*/}
      <div className="z-[3] p-[10px] text-[12px] flex items-center justify-evenly fixed bg-black shadow-shadow bottom-0 md:hidden w-full uppercase">
        {navLinks.map((link, index) => {
          return (
            <a
              className="flex flex-col items-center gap-[5px] "
              href=""
              key={index}
            >
              <img
                className="h-[25px] w-[25px] bg-contain bg-no-repeat"
                src={link.icon}
                alt=""
              />
              {link.name}
            </a>
          );
        })}
        <a href="" className="flex flex-col items-center gap-[5px]">
          <img
            src="/mobile_cart.svg"
            className="h-[25px] w-[25px] bg-contain bg-no-repeat"
          ></img>
          <span>Cart</span>
        </a>

        <a href="" className="text-brown  flex flex-col items-center gap-[3px]">
          <span>
            <img
              src="/about.jpg"
              className="h-[25px] w-[25px] rounded-[32px]"
              alt=""
            />
          </span>
          Account
        </a>
      </div>
    </>
  );
};
