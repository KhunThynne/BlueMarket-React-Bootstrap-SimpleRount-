import { createBrowserRouter, RouterProvider, redirect } from "react-router-dom";


import Home from "../pages/Home";
import Blogs from "../pages/Blogs";
import NoPage from "../pages/NoPage";
import MenuNav from "../components/MenuNav"
import Demo from "../pages/Demo"
import Example from "../pages/Example";
import PrsocketIOT from "../projects/ProSocket";
import SendEmail from "../projects/ProSendEmail";
/*
import Exam from "../Poomz/Exam";
import Categories from "../Poomz/Pages/Categories";
*/
const RouteNav = () => {
    const router = createBrowserRouter([
        {

            path: "/",
            element: <MenuNav />,
            loader: ({  request }:any) => {




                console.log(request.url)
                redirect(request.url);
                return null

            },
            children: [
                {
                    index: true,
                    path: "",
                    element: <Home />,
                },


                {
                    path: "blogs",
                    element: <Blogs />,
                },
                {
                    path: "example",
                    element: <Example />,
                },

                {
                    path: "demo",
                    element: <Demo />,
                },
                {
                    path: "socketio",
                    element: <PrsocketIOT />,
                },
                {
                    path: "*",
                    element: <NoPage />,
                },

                {
                    path: "mail",
                    element: <SendEmail />,
                },

            ],
        }
    ], {
        future: {
            // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
            v7_normalizeFormMethod: true,
        },
        basename: "/"
    });

/*
    const routerDoggyShop = createHashRouter([{
        path: "/",

        children: [
            {
                index: true,

                element: <Exam />,
            },

            {
                path: "category",
                element: <Categories />,
            },],
    },])


*/



    return (

        <>


            <RouterProvider router={router} />

        </>
    );
}
export default RouteNav

