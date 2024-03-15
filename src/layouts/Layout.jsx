import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import HeroHome from "../components/HeroHome";
import Footer from "../components/Footer";

const Layout = () => {
    return (
        <>
            <Header />
            <main>
                <HeroHome />
                <Outlet />
            </main>
            <Footer />

        </>
    )
}

export default Layout