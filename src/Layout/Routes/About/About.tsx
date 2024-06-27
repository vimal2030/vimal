import React from "react";

type PropType = {
  title: string;
  desc: string;
};
type aboutProps = {
  about: PropType[];
};
const About: React.FC<aboutProps> = ({ about }) => {
  return (
    <div
      id="about"
      className="  flex flex-col md:flex-row md:justify-between bg-white"
    >
      <div className=" md:w-50% md:h-600px ">
        <img
          src="about.jpg"
          className="w-[800px] h-[600px] object-cover"
          alt=""
        />
      </div>
      <div className=" p-[20px] md:w-[50%] backdrop-blur bg-brown">
        <div className="mt-[50px] ">
          <div className="text-[40px] text-white font-[500] leading-[50px]">
            {about[0].title}
          </div>
          <div className="  text-justify ">{about[0].desc}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
