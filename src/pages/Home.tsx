import { Outlet, useLocation, useNavigation } from "react-router-dom";
import SideNav from "../components/SideNav";
import NavBar from "../components/NavBar";
import { useEffect } from "react";

function Home() {
  const location = useLocation();
  useEffect(() => {
    document.title = `Home | ${location.pathname.split("/").slice(-1)}`;
  }, [location]);
  return (
    <main className="grid h-screen grid-rows-10">
      <NavBar />

      <section className="row-span-9 grid grid-cols-10">
        <SideNav />
        <Outlet />
      </section>
    </main>
  );
}

export default Home;
