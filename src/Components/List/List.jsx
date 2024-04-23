import React from 'react'
import carImage from "../../Img/card.png";
import HotelCard from '../Cards/HotelCard';

function List() {
  return (
    <>
      <div className="text-left">
        <h1 className="px-6 text-[28px]">Food & Dinner around You</h1>
        <h2 className="px-6 text-[14px]">Types</h2>
      </div>
      <div className="flex flex-col items-center gap-2 w-full h-[100vh] overflow-scroll">
        <div className=" w-[90%]">
          <HotelCard
            Image={carImage}
            Heading="Junglish"
            Price="$$$$"
            Ranking="#12 of 11423 resturents in Gilgit Baltistan"
            Badges="Certificate of Excellences in 2020"
            Location="Minapin Nagar - Gilgit Baltistan"
            Phone="+12 1312412424"
          />
          <HotelCard
            Image={carImage}
            Heading="Junglish"
            Price="$$$$"
            Ranking="#12 of 11423 resturents in Gilgit Baltistan"
            Badges="Certificate of Excellences in 2020"
            Location="Minapin Nagar - Gilgit Baltistan"
            Phone="+12 1312412424"
          />
        </div>
      </div>
    </>
  )
}

export default List