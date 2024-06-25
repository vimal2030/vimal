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
    <div className=" p-[15px] flex flex-col md:flex-row md:justify-between">
      <div className=" md:w-50% md:h-600px ">
        <img
          src="about.jpg"
          className="w-[800px] h-[600px] object-cover"
          alt=""
        />
      </div>
      <div className="py-[20px] md:pt-[7%] md:pr-[9%] md:pb-[8%] md:pl-[8%] md:w-[50%] backdrop-blur">
        <div className=" ml-0 md:ml-[-150px] md:p-[40px] bg-bg">
          <div className="text-[40px] text-brown font-[500] leading-[50px]">
            {about[0].title}
          </div>
          <div className=" text-justify text-gray">{about[0].desc}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
