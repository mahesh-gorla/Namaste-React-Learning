import { createContext } from "react";

export const userContext = createContext({
  appData: {
    name: "Mahesh Reddy Gorla",
    email: "mgorla@snapfinance.com",
  },
});
userContext.displayName = "userContext";
