import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Navigation />
      <div id="app">
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
