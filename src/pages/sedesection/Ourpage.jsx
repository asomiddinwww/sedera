import React from "react";
import bragg from "../sedesection/img/bragg.png"
import braggg from "../sedesection/img/bargg.png"
import bragggg from "../sedesection/img/womn.png"

const Ourpage = () => {
  return (
    <div className="w-full">
      <div className="max-w-[1220px] m-auto pl-3 pr-3 ">
        <div className="flex w-full justify-between items-center">
          <h1 className="font-bold text-4xl">Our blog.</h1>
          <button className="p-3 pl-6 pr-6 rounded-[10px] text-[#359740] border-[#359740] border-1 hover:bg-[#359740] hover:text-white cursor-pointer">Go to our blog</button>
        </div>
        <div className="flex w-full justify-between">
            <div className="max-w-[770px] flex flex-col gap-7">
                <div className="flex rounded-2xl items-end gap-3 max-w-[730px] bg-[#EAF1EB]">  
                    <div className="p-10 flex flex-col gap-3 items-start">
                        <p className="text-[#70737C] text-[14px]">12.09.2021</p>
                        <h1 className="font-bold text-[#1F2533] text-[24px]">How to plant spinach correctly in winter</h1>
                        <p className="text-[#70737C] text-[14px] max-w-[401px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                        <button className="p-3 pl-10 pr-10 rounded-[10px]  bg-[#ffff] text-[#359740] hover:text-white hover:bg-[#359740] cursor-pointer">Read</button>
                    </div>
                    <div>
                        <img src={bragg} alt="" />
                    </div>
                </div>
                <div className="flex justify-between">
                       <div className="flex rounded-2xl items-end max-w-[350px] bg-[#EAF1EB]">  
                    <div className="pl-10 pt-5 pb-5 w-full flex gap-3 flex-col items-start">
                        <p className="text-[#70737C] text-[14px]">12.09.2021</p>
                        <h1 className="font-bold text-[#1F2533] max-w-100 text-[20px]">How to plant spinach correctly in winter</h1>
                        <button className="p-3 pl-10 pr-10 rounded-[10px]  bg-[#ffff] text-[#359740] hover:text-white hover:bg-[#359740] cursor-pointer">Read</button>
                    </div>
                    <div>
                        <img src={braggg} alt="" />
                    </div>
                </div>
                    <div className="flex rounded-2xl items-end max-w-[350px] bg-[#EAF1EB]">  
                    <div className="pl-10 pt-5 pb-5 w-full flex gap-3 flex-col items-start">
                        <p className="text-[#70737C] text-[14px]">12.09.2021</p>
                        <h1 className="font-bold text-[#1F2533] max-w-100 text-[20px]">How to plant spinach correctly in winter</h1>
                        <button className="p-3 pl-10 pr-10 rounded-[10px]  bg-[#ffff] text-[#359740] hover:text-white hover:bg-[#359740] cursor-pointer">Read</button>
                    </div>
                    <div>
                        <img src={braggg} alt="" />
                    </div>
                </div>
                </div>
            </div>
              <div className="flex rounded-2xl h-[575px] flex-col max-w-[400px] bg-[#EAF1EB]">  
                    <div className="pt-10 pb-0 pr-10 pl-10 flex flex-col gap-3 items-start">
                        <p className="text-[#70737C] text-[14px]">12.09.2021</p>
                        <h1 className="font-bold text-[#1F2533] text-[24px]">How to plant spinach correctly in winter</h1>
                        <p className="text-[#70737C] text-[14px] max-w-[401px]">In most areas, successive sowing can be done from early spring until early winter, but more often during hotter months...</p>
                        <button className="p-3 pl-10 pr-10 rounded-[10px]  bg-[#ffff] text-[#359740] hover:text-white hover:bg-[#359740] cursor-pointer">Read</button>
                    </div>
                    <div className="w-full flex justify-end">
                        <img className="w-54" src={bragggg} alt="" />
                    </div>
                </div>
        </div>
      </div>
    </div>
  );
};

export default Ourpage;
