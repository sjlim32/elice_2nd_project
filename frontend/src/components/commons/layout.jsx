import { Outlet } from "react-router-dom";
import NavigationBar from "./navbar";

function Layout() {
  return (
    <>
      <NavigationBar />
      <Outlet />
    </>
  );
}

export default Layout;
