import { Outlet } from "react-router-dom";
import Navi from "../Components/Navi";
const RootLayout = () => {
  return (
    <>
      <Navi />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
