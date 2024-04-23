import React, { useState } from "react";
import Hotel1 from "../../Img/hotel1.png";
import Hotel2 from "../../Img/hotel2.png";
import Hotel3 from "../../Img/hotel3.png";
import Hotel4 from "../../Img/hotel4.png";
import Hotel5 from "../../Img/hotel5.png";
import Chapshroo from "../../Img/ChapShroo.png";
import Chupati from "../../Img/Chupati.png";
import Diram from "../../Img/Diram.png";
import Goli from "../../Img/Goli.png";
import Mantu from "../../Img/Mantu.png";
import HotelCard from "../Cards/HotelCard";
import RustorentsCard from "../Cards/RustorentsCard";

function List() {
  let [tab, setTab] = useState(0);

  function RandomImageGenerator() {
    setTab(0);
    // console.log(tabs);
  }

  return (
    <>
      <div className="text-left">
        <h1 className="px-6 text-[28px] pt-5 pb-1">Food & Dinner around You</h1>
        <h2 className="px-6 text-[13px]">Types</h2>
        <div className="flex gap-4 px-6 py-2">
          <select className="w-[120px] text-[16px] font-normal p-1 border-b-2 bg-transparent border-gray-500 outline-none">
            <option value="">Resturents</option>
            <option value="" className="text-[14px]">
              <button onClick={RandomImageGenerator}>Hotels</button>
            </option>
            <option value="" className="text-[14px]">
              <button
                onClick={() => {
                  setTab(1);
                }}
              >
                Attractions
              </button>
            </option>
            <option value="" className="text-[14px]">
              <button
                onClick={() => {
                  setTab(2);
                }}
              >
                Lakes
              </button>
            </option>
          </select>

          <select className="w-[120px] text-[16px] font-normal p-1 border-b-2 bg-transparent border-gray-500 outline-none">
            <option value="">Rating</option>
            <option value="" className="text-[14px]">
              4.0
            </option>
            <option value="" className="text-[14px]">
              3.0
            </option>
            <option value="" className="text-[14px]">
              2.0
            </option>
            <option value="" className="text-[14px]">
              1.0
            </option>
          </select>
        </div>
      </div>
      <section className={`${tab == 0 ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center gap-4 w-full h-[100vh] overflow-scroll">
          <div className=" w-[95%] ">
            <RustorentsCard
              Image={Chapshroo}
              Heading="Chapshroo"
              Price="$$-$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
              Location="Minapin Nagar - Gilgit Baltistan"
              Phone="+12 1312412424"
            />
          </div>
          <div className=" w-[95%] ">
            <RustorentsCard
              Image={Chupati}
              Heading="Chupati"
              Price="$$-$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
              Location="Minapin Nagar - Gilgit Baltistan"
              Phone="+12 1312412424"
            />
          </div>
          <div className=" w-[95%] ">
            <RustorentsCard
              Image={Diram}
              Heading="Diram Fitii"
              Price="$$-$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
              Location="Minapin Nagar - Gilgit Baltistan"
              Phone="+12 1312412424"
            />
          </div>
          <div className=" w-[95%] ">
            <RustorentsCard
              Image={Goli}
              Heading="Goli"
              Price="$$-$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
              Location="Minapin Nagar - Gilgit Baltistan"
              Phone="+12 1312412424"
            />
          </div>
          <div className=" w-[95%] ">
            <RustorentsCard
              Image={Mantu}
              Heading="Mantu"
              Price="$$-$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
              Location="Minapin Nagar - Gilgit Baltistan"
              Phone="+12 1312412424"
            />
          </div>
        </div>
      </section>

      <section className={`${tab == 1 ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center gap-4 w-full h-[100vh] overflow-scroll">
          <div className=" w-[90%] ">
            <HotelCard
              Image={Hotel3}
              Heading="Pearl Continental Hotel"
              Price="$$$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
            />
          </div>
          <div className=" w-[90%] ">
            <HotelCard
              Image={Hotel1}
              Heading="Dumani Hotel"
              Price="$$$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
            />
          </div>
          <div className=" w-[90%] ">
            <HotelCard
              Image={Hotel2}
              Heading="View Point Hotel"
              Price="$$-$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
            />
          </div>

          <div className=" w-[90%] ">
            <HotelCard
              Image={Hotel4}
              Heading="Gilgit Serena Hotel"
              Price="$$$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
            />
          </div>
          <div className=" w-[90%] ">
            <HotelCard
              Image={Hotel5}
              Heading="Gilgit Park Hotel"
              Price="$$$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default List;
