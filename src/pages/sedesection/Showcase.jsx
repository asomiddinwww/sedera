import React from "react";
import low from "../sedesection/img/low.svg"
import swp from "../sedesection/img/swiperimg.png"

const Showcase = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1220px] m-auto pl-3 pr-3 ">
        <div className="swipe w-full p-10 rounded-2xl flex justify-between items-center bg-[#ebf2ec] max-[687px]:flex-col-reverse max-[687px]:text-center">
          <div>
            <h1 className="text-[48px] font-bold max-w-[660px] max-[490px]:text-4xl">SEEDRA Basil Seeds for Indoor and Outdoor Planting</h1>
            <p className="text-[16px] text-[#1F2533] max-w-[540px] max-[490px]:text-[14px]">Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. Your easy growing experience is our guarantee</p>
            <div className="flex items-center gap-4 text-end">
                <div><img src={low} alt="" /></div>
                <div><h1 className="text-[42px] font-[600]">$12.56</h1></div>
                <div><del className="text-[22px] font-[600] text-[#70737C]">$15.56</del></div>
            </div>
             <div className="flex gap-3 pt-7">
            <button className="p-3 pl-6 text-[14px] font-[600] pr-6 bg-[#359740] cursor-pointer hover:bg-[#2c9338d2] text-white rounded-[5px]">Add to card</button>
            <button className="p-3 pl-6 text-[14px] font-[600] pr-6 bg-[#ffff] text-[#359740] rounded-[5px] cursor-pointer hover:bg-[#35974062]">Discover</button>
          </div>
          </div>
          <div>
          <img src={swp} alt="" />
          </div>
        </div>
        <br />
        <div className="barg p-10 bg-[#fffded] rounded-2xl text-center">
          <h1 className="text-[27px] font-bold">We sell seeds </h1>
          <p className="text-[#70737C] font-[500]">that always sprout and gardening supplies which never break</p>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
