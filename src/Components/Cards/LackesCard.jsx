import React from 'react';
import { FaStar } from "react-icons/fa";
import { LiaCertificateSolid } from "react-icons/lia";

function LackesCard({Image, Heading, Location}) {
  return (
    <div>
      <div>
        <div className="bg-white shadow-2xl">
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
                <FaStar />
              </div>
              <p className="text-[14px]">275 reviews</p>
            </div>
            <div className="flex justify-between">
              <p className="text-[14px]">Location</p>
              <p className="text-[14px]">{Location}</p>
            </div>
            <div className="flex justify-between">
              <span className="text-[20px]">
                <LiaCertificateSolid />
              </span>
              <p className="text-[14px] py-1">
                Certificate of Excellences in 2022
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-[#373737]">TRIP</p>
              <p className="text-[#373737]">ADVISOR</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LackesCard