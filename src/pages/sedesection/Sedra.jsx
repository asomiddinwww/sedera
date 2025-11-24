import React from "react";
import ava from "../sedesection/img/ava.png"

const Sedra = () => {
  return (
    <div className="w-full pt-15 pb-15">
      <div className="max-w-[1220px] m-auto pl-3 pr-3 flex items-center justify-between gap-10">
        <div className="max-w-[541px] flex flex-col gap-4">
            <h1 className="max-w-[500px] text-[36px] font-bold">Seedra helps to grow fast and efficiant</h1>
            <p>SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and professional instructions created by PhD Helga George</p>
            <p>Be sure of our quality - the freshest batches of this season. Non-GMO, Heirloom - our seeds were tested and have the best germination ratings. </p>
            <p>  Your easy growing experience is our guarantee Spinach commom culinary uses: salads, soups, smoothies, lasagne, pizza, pies, risotto, and more</p>
            <p>  Proudly sourced in the USA - our garden seeds are grown, harvested, and packaged in the USA. We support local farmers and are happy to produce this American-made product</p>
        </div>
        <div>
            <img src={ava} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sedra;
