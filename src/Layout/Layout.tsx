import { Outlet } from "react-router-dom";
import { Header } from "./Routes/components/Header";
import { BottomBar } from "./Routes/components/BottomBar";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <BottomBar />
    </>
  );
};

export default Layout;
