import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";
import { Shimmer } from "./Shimmer";
import useResturent from "../utils/useResturent";

export const RestaurantMenu = () => {
  const { resId } = useParams();
  const resturent = useResturent(resId);

  return !resturent ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h2>Resturent: {resturent.name}</h2>
        <img src={IMG_CDN_URL + resturent?.cloudinaryImageId} />
        <h3>City: {resturent?.city}</h3>
        <h3>Cost for two: {resturent?.costForTwo}</h3>
        <h3>Avg Rating: {resturent?.avgRating}</h3>
        <h3>Category: {resturent?.category}</h3>
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
