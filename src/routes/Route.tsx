
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import NoPage from "../pages/NoPage";
import MenuNav from "../components/MenuNav"

const RouteTe = () => {


    return (

        <BrowserRouter>
            <Routes>
                {
                    <Route path="/" element={<MenuNav />}>
                        <Route index element={<Home />} />
                        <Route path="blogs" element={<Blogs />} />

                        <Route path="*" element={<NoPage />} />
                    </Route>
                }
            </Routes>
        </BrowserRouter>
    );
}
export default RouteTe 