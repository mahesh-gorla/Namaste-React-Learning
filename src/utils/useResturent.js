import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";
const useResturent = (resId) => {
  const [restaurent, setRestaurent] = useState(null);

  useEffect(() => {
    getResturentInfo();
  }, []);

  async function getResturentInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);
    const json = await data.json();
    setRestaurent(json.data);
  }
  return restaurent;
};

export default useResturent;
