import React from "react";
import { FaStar } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";


function HotelCard({
  Image,
  Heading,
  Price,
  Ranking,
  Badges
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
              <h1 className="text-[18px] py-1">{Heading}</h1>
            </div>
            <div className="flex justify-between">
              <div className="flex text-[#f9c24a]">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <span className="text-gray-300">
                  <FaStar />
                </span>
              </div>
              <p className="text-[14px]">275 reviews</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px]">Price</p>
              <p className="text-[14px]">{Price}</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px]">Ranking</p>
              <p className="text-[14px]">{Ranking}</p>
            </div>
            <div className="flex justify-between">
              <span className="text-[20px]">
                <LiaCertificateSolid />
              </span>
              <p className="text-[14px] py-1">{Badges}</p>
            </div>
            <div className="flex justify-between">
              <span className="text-[20px]">
                <LiaCertificateSolid />
              </span>
              <p className="text-[14px] py-1">
                Certificate of Excellences in 2021
              </p>
            </div>
            <div className="flex justify-between">
              <span className="text-[20px]">
                <LiaCertificateSolid />
              </span>
              <p className="text-[14px] py-1">
                Certificate of Excellences in 2022
              </p>
            </div>
            <div className="flex flex-wrap gap-1 py-1">
              <p className="p-1 px-2 bg-[#e2e1e1dc] rounded-full text-[13px]">
                Spanish
              </p>
              <p className="p-1 px-2 bg-[#e2e1e1dc] rounded-full text-[13px]">
                Spanish
              </p>
              <p className="p-1 px-2 bg-[#e2e1e1dc] rounded-full text-[13px]">
                Spanish
              </p>
              <p className="p-1 px-2 bg-[#e2e1e1dc] rounded-full text-[13px]">
                Spanish
              </p>
              <p className="p-1 px-2 bg-[#e2e1e1dc] rounded-full text-[13px]">
                Spanish
              </p>
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
