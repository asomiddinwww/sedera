import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import shop from "../sedesection/img/shop.png";

const Cards = () => {
  const [data, setData] = useState([]);
  const [active, setActive] = useState("all");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const newData = res.data.map((item, i) => ({
          ...item,
          category: ["bundles", "herbs", "vegetables", "fruits", "supples"][i % 5],
          image: `https://picsum.photos/300?random=${i + 1}`,
          price: (10 + i * 1.5).toFixed(2),
        }));
        setData(newData);
      });
  }, []);

  const filtered =
    active === "all"
      ? data
      : data.filter(
          (item) =>
            item.category?.toLowerCase().trim() ===
            active.toLowerCase().trim()
        );

  const btnStyle =
    "px-4 py-2 rounded-lg border transition-all";

  return (
    <div className="max-w-[1220px] m-auto pl-3 pr-3 pb-20">
      {/* FILTER BUTTONS */}
      <div className="flex gap-4 mb-6 overflow-x-auto">
        {[
          "all",
          "bundles",
          "herbs",
          "vegetables",
          "fruits",
          "supples",
          "flower",
        ].map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`${btnStyle} ${
              active === cat
                ? "bg-green-500 text-white border-green-600 cursor-pointer"
                : "bg-white text-black border-gray-300 cursor-pointer"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {filtered.map((item) => (
          <Link to={`/detail/${item.id}`} key={item.id}>
            <div className="bg-white shadow rounded-lg p-4">
              <h1>{item.id}</h1>
              <img
                src={item.image}
                alt="product"
                className="h-40 w-full object-cover rounded-lg"
              />
              <h2 className="mt-3 font-bold">{item.name}</h2>
              <p className="text-gray-600">{item.username}</p>
              <p className="text-gray-600">{item.email}</p>

              <div className="flex justify-between items-center mt-3">
                <h1>${item.price}</h1>
                <img src={shop} alt="" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Cards;
