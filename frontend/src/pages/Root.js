import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
// import MainNavigation from "../components/navigation/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <Header />
      {/* <MainNavigation /> */}
      <Outlet />
    </>
  );
};

export default RootLayout;
