const Menu = () => {
  const content = {
    title: "Discover",
    subtitle: "Our Menu",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, voluptates illo nostrum aspernatur fuga enim sunt aperiam eos quis repellendus neque ad pariatur assumenda qui at doloremque id laboriosam molestias eveniet! Nesciunt illum voluptates reprehenderit.",
  };
  return (
    <div className="min-h-[100vh] flex flex-col md:flex-row gap-10 items-center py-[20px] md:p-20">
      <div className="p-[15px] md:p-[50px] md:w-[50%]">
        <div className="flex flex-col text-right">
          <span className=" text-3xl text-brown">{content.title}</span>
          <span className="text-5xl">{content.subtitle}</span>
        </div>

        <div className=" text-justify pt-5 pb-3 text-gray">{content.desc}</div>
        <div className="text-right">
          <button className="text-brown px-4 py-3 bg-transparent border-solid border border-brown hover:bg-brown hover:text-white hover:transition duration-75">
            View Full Menu
          </button>
        </div>
      </div>
      <div className="width-[50%] md:flex gap-3 p-[15px]">
        <div>
          <img
            className=" object-cover hover:transform hover:scale-105 hover:transition duration-75 h-[300px] w-[355px] md:h-[200px] md:w-[255px]"
            src="  https://picsum.photos/600/350"
            alt="three"
          />
          <img
            className="object-cover hover:transform hover:scale-105 hover:transition duration-75 mt-[25px] h-[300px] w-[355px] md:h-[200px] md:w-[255px]"
            src="  https://picsum.photos/600/350"
            alt="four"
          />
        </div>
        <div>
          <img
            className="object-cover hover:transform hover:scale-105 hover:transition duration-75 mt-[35px] h-[300px] w-[355px] md:h-[200px] md:w-[255px]"
            src="  https://picsum.photos/600/350"
            alt="three"
          />
          <img
            className="object-cover hover:transform hover:scale-105 hover:transition duration-75 mt-[25px] h-[300px] w-[355px] md:h-[200px] md:w-[255px]"
            src="  https://picsum.photos/600/350"
            alt="four"
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;
