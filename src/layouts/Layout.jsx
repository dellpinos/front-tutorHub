import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";

const Layout = () => {
    return (
        <>
        <main className="relative">
            <Header />
            <HeroHome />
            <Outlet />
        </main>


        </>
    )
}

export default Layout