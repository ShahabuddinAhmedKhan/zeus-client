import {
    createBrowserRouter,
} from "react-router";
import App from "../App";
import HomeLayout from "../components/HomeLayout/HomeLayout";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import ResetPassword from "../components/ResetPassword";
import Banner from "../components/Banner";
import Loading from "../components/Loading";
import AddEquipment from "../components/Equipment Related Page/AddEquipment";
import Socials from "../components/Socials";
import Private from "../components/Private";
import AllEquipment from "../components/Equipment Related Page/AllEquipment";
import Details from "../components/Equipment Related Page/Details";
import Products from "../components/Products";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <>
                    <Banner></Banner>
                    <Products></Products>
                </>,
                loader: () => {
                    const forProducts = fetch("http://localhost:5031/sixProducts");

                    return forProducts
                }
            },


            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <SignUp></SignUp>
            },
            {
                path: "addEquipment",
                element: <Private><AddEquipment></AddEquipment></Private>
            },
            {
                path: "allEquipment",
                element: <AllEquipment></AllEquipment>,
                loader: () => fetch("http://localhost:5031/equipments")
            },
            {
                path: "details/:id",
                element: <Private><Details></Details></Private>,
                loader: ({ params }) => fetch(`http://localhost:5031/equipments/${params.id}`)
            }

        ]
    },
    {
        path: "resetPassword",
        element: <ResetPassword></ResetPassword>
    },
    {
        path: "socials",
        element: <Socials></Socials>
    },




]);

export default router