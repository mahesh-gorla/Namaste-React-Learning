import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const RestaurantMenu = () => {
  const [resturent, setResturent] = useState({});
  useEffect(() => {
    getResturentInfo();
  }, []);
  async function getResturentInfo() {
    const data = await fetch(``);
    const json = await data.json();
    console.log(json);
    setResturent(json.data);
  }
  const { id } = useParams();
  return (
    <>
      <h1>RestaurantMenu: {id}</h1>
      <h1></h1>
    </>
  );
};
