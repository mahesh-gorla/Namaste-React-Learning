import { useContext } from "react";
import { userContext } from "../utils/AppContext";

export const Footer = ({ setStateUp, stateUp }) => {
  const { appData } = useContext(userContext);
  console.log("appData==>", appData);
  return (
    <>
      {stateUp ? "True" : "False"}
      <h1 onClick={() => setStateUp(!stateUp)}>Footer</h1>
      created by: {appData?.name}
      <h1>reach me @ {appData?.email}</h1>
    </>
  );
};
