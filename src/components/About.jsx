import { Outlet } from "react-router-dom";
import { Profile } from "./Profile";
export function About() {
  return (
    <div>
      <h1>About us page</h1>
      <p>This is Namaste React Live course </p>
      <Profile />
    </div>
  );
}
