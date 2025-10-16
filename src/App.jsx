import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet, useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  const isProjectPage = pathname.startsWith("/projects");

  return (
    <>
    <Header isProjectPage={isProjectPage}/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
