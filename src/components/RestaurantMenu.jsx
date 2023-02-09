import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { Shimmer } from "./Shimmer";

export const RestaurantMenu = () => {
  const [resturent, setResturent] = useState(null);
  useEffect(() => {
    getResturentInfo();
  }, []);
  const { id } = useParams();
  console.log("resId", id);

  async function getResturentInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/v4/full?lat=17.385044&lng=78.486671&menuId=${id}`
    );
    const json = await data.json();
    setResturent(json.data);
  }
  console.log(resturent?.menu?.items);
  return !resturent ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h2>Resturent: {resturent.name}</h2>
        <img src={IMG_CDN_URL + resturent.cloudinaryImageId} />
        <h3>City: {resturent.city}</h3>
        <h3>Cost for two: {resturent.costForTwo}</h3>
        <h3>Avg Rating: {resturent.avgRating}</h3>
        <h3>Category: {resturent.category}</h3>
      </div>
      Menu:
      <ul>
        {Object.values(resturent?.menu?.items).map((item) => (
          <li key={item?.id}>{item?.name}</li>
        ))}
      </ul>
    </div>
  );
};
