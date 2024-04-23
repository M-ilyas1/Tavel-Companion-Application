import React from "react";
import { IoIosSearch } from "react-icons/io";

function HotelCard({
  Image,
  Heading,
  Price,
  Ranking,
  Badges,
  Location,
  Phone,
}) {
  return (
    <>
      <div>
        <div className="bg-white shadow-xl">
          <div>
            <img src={Image} className="w-full " alt="" />
          </div>
          <div className="p-4 flex flex-col gap-1">
            <div>
              <h1>
                <p>{Heading}</p>
              </h1>
            </div>
            <div className="flex justify-between">
              <IoIosSearch />
              <p>275 reviews</p>
            </div>
            <div className="flex justify-between">
              <p>Price</p>
              <p>{Price}</p>
            </div>
            <div className="flex justify-between">
              <p>Ranking</p>
              <p>{Ranking}</p>
            </div>
            <div className="flex justify-between">
              <IoIosSearch />
              <p>{Badges}</p>
            </div>
            <div className="flex justify-between">
              <IoIosSearch />
              <p>Certificate of Excellences in 2021</p>
            </div>
            <div className="flex justify-between">
              <IoIosSearch />
              <p>Certificate of Excellences in 2022</p>
            </div>
            <div className="flex flex-wrap gap-1">
              <p className="p-1 bg-[#c8c7c7dc] rounded-full text-[14px]">
                Spanish
              </p>
              <p className="p-1 bg-[#c8c7c7dc] rounded-full text-[14px]">
                Winex baar
              </p>
              <p className="p-1 bg-[#c8c7c7dc] rounded-full text-[14px]">
                Spanish
              </p>
              <p className="p-1 bg-[#c8c7c7dc] rounded-full text-[14px]">
                Vega
              </p>
              <p className="p-1 bg-[#c8c7c7dc] rounded-full text-[14px]">
                Spanish
              </p>
              <p className="p-1 bg-[#c8c7c7dc] rounded-full text-[14px]">
                Spanish
              </p>
              <p className="p-1 bg-[#c8c7c7dc] rounded-full text-[14px]">
                Spanish
              </p>
            </div>
            <div className="flex justify-between">
              <IoIosSearch />
              <p>{Location}</p>
            </div>
            <div className="flex justify-between">
              <IoIosSearch />
              <p>{Phone}</p>
            </div>
            <div className="flex gap-2">
              <p className="text-[#373737]">TRIP</p>
              <p className="text-[#373737]">ADVISOR</p>
              <p className="text-[#373737]">WEBSITE</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HotelCard;
