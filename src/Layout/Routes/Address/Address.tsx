import React from "react";
type AddressWithDesc = {
  desc: string;
  phone: number;
};

type AddressWithTitle = {
  title: string;
  address: string;
};

type AddressWithDays = {
  days: string;
  time: string;
};

type Address = AddressWithDesc | AddressWithTitle | AddressWithDays;

type AddressProps = {
  address: Address[];
};
export const Address: React.FC<AddressProps> = ({ address }) => {
  return (
    <div className="px-[20px] py-[10px] flex flex-col justify-start items-start md:flex-row md:items-center md:justify-center capitalize  [&>div]:flex [&>div]:justify-center [&>div]:items-start [&>div]:gap-2 [&>div]:px-[10px] [&>div]:py-[20px]">
      {address.map((addr, index) => {
        if ("desc" in addr && "phone" in addr) {
          return (
            <div key={index}>
              <img
                className="w-[20px] h-[20px] p-[3px] rounded-[10px] bg-cover bg-brown"
                src="phone.svg"
                alt=""
              />
              <div className=" w-custom">
                <p className="text-[17px] text-white font-[600]">
                  +91 {addr.phone}
                </p>
                <p className=" text-gray text-justify">{addr.desc}</p>
              </div>
            </div>
          );
        } else if ("title" in addr && "address" in addr) {
          return (
            <div key={index}>
              <img
                className="w-[20px] h-[20px] p-[3px] rounded-[10px] bg-cover bg-brown"
                src="location.svg"
                alt=""
              />
              <div>
                <p className="text-[17px] font-[600] text-white">
                  {addr.title}
                </p>
                <p className=" text-gray text-justify">{addr.address}</p>
              </div>
            </div>
          );
        } else if ("days" in addr && "time" in addr) {
          return (
            <div key={index} className=" md:min-w-48">
              <img
                className="w-[20px] h-[20px] p-[3px] rounded-[10px] bg-cover bg-brown"
                src="timer.svg"
                alt=""
              />
              <div>
                <p className="text-[17px] font-[600] text-white">{addr.days}</p>
                <p className=" text-gray text-justify">{addr.time}</p>
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};
