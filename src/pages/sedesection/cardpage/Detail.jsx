import axios from "axios";
import { useEffect, useState } from "react";
import shop from "../img/shop.png"
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

 useEffect(() => {
  console.log("Kelayotgan ID:", id);

  axios
    .get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => setItem(res.data))
    .catch((err) => {
      console.error("XATO:", err);
    });
}, [id]);

  if (!item)
    return (
      <h1 className="text-center text-xl font-bold mt-20">
        Loading...
      </h1>
    );

  return (
    <div className="max-w-4xl mx-auto mt-10">
      <div key={item.id} className="bg-white shadow p-6 rounded-lg">
        <h1>{item.id}</h1>

        <img
          src={item.image}
          className="w-full h-80 object-cover rounded-lg"
        />

        <h1 className="text-3xl font-bold mt-5">{item.title}</h1>
        <h1 className="text-3xl font-bold mt-5">{item.name}</h1>
        <p>Seedra Cilantro Seeds for Planting Indoor and Outdoor</p>
        <div className="flex justify-between">
          <h1>$12.56</h1>
          <div><img src={shop} alt="" /></div>
        </div>

        <p className="text-gray-600 mt-3">
          Category: <b>{item.category}</b>
        </p>
      </div>
    </div>
  );
};

export default Detail;
