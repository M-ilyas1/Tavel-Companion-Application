import React, { useState } from "react";
import {
  ChapShroo,
  Chupati,
  Diram,
  Goli,
  Hotel1,
  Hotel2,
  Hotel3,
  Hotel4,
  Hotel5,
  Lake1,
  Lake2,
  Lake3,
  Lake4,
  Lake5,
  Lake6,
  Mantu,
} from "../../Img";
import RustorentsCard from "../Cards/RustorentsCard";
import HotelCard from "../Cards/HotelCard";
import LackesCard from "../Cards/LackesCard";

function List() {
  let [tab, setTab] = useState(0);

  return (
    <>
      <div className="text-left">
        <h1 className="px-6 text-[22px] font-normal md:text-[30px] pt-5 pb-1">Food & Dinner around You</h1>
        <h2 className="px-6 text-[14px]">Types</h2>
        <div className="flex gap-4 px-6 py-2">
          <select
            onChange={(event) => {
              const selectedTabIndex = parseInt(event.target.value);
              setTab(selectedTabIndex);
            }}
            className="w-[120px] text-[16px] font-normal p-1 border-b-2 bg-transparent border-gray-500 outline-none"
          >
            <option value="0">Restaurants</option>
            <option value="1">Hotels</option>
            <option value="2">Lackes</option>
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

      <section className={`${tab === 0 ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center gap-4 w-full h-[97vh] overflow-scroll">
          <div className=" w-[90%] ">
            <RustorentsCard
              Image={ChapShroo}
              Heading="Chapshroo"
              Price="$$-$$"
              Ranking="#12 of 11423 resturents in Gilgit Baltistan"
              Badges="Certificate of Excellences in 2020"
              Location="Minapin Nagar - Gilgit Baltistan"
              Phone="+12 1312412424"
            />
          </div>
          <div className=" w-[90%] ">
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
          <div className=" w-[90%] ">
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
          <div className=" w-[90%] ">
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
          <div className=" w-[90%] ">
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

      <section className={`${tab === 1 ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center gap-4 w-full h-[97vh] overflow-scroll">
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

      <section className={`${tab === 2 ? "block" : "hidden"}`}>
        <div className="flex flex-col items-center gap-4 w-full h-[97vh] overflow-scroll">
        <div className=" w-[90%] ">
            <LackesCard
              Image={Lake3}
              Heading="Rush Lake"
              Location="Rush Lake is a high-altitude lake located in Nagar Valley, Gilgit-Baltistan"
            />
          </div>
          <div className=" w-[90%] ">
            <LackesCard
              Image={Lake5}
              Heading="Attabad Lake"
              Location="Attabad Lake Gojal is a lake located in the Gojal region of Gilgit-Baltistan"
            />
          </div>
          <div className=" w-[90%] ">
            <LackesCard
              Image={Lake2}
              Heading="Upper Kachura Lake"
              Location="The Kachura Lakes are three lakes in the Skardu District of Gilgit-Baltistan"
            />
          </div>
          <div className=" w-[90%] ">
            <LackesCard
              Image={Lake4}
              Heading="Shausar Lake"
              Location="Sheosar Lake is an alpine lake situated at the western end of Deosai National Park, Gilgit-Baltistan"
            />
          </div>
          
          <div className=" w-[90%] ">
            <LackesCard
              Image={Lake6}
              Heading="Naltar Lakes"
              Location="There are three lakes in Naltar Valley known as Naltar Lakes or Bashkiri Lakes at altitudes ranging from 3,050–3,150 metres."
            />
          </div>
          <div className=" w-[90%] ">
            <LackesCard
              Image={Lake1}
              Heading="Satpara Lake"
              Location="Satpara sar Lake is a natural lake near Skardu in the Gilgit-Baltistan."
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default List;
