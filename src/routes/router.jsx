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
import SportsCategory from "../components/SportsCategory";
import MyEquipment from "../components/Equipment Related Page/MyEquipment";
import UpdateEquipment from "../components/UpdateEquipment";
import NonExist from "../components/NonExist";

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
                    <SportsCategory></SportsCategory>
                </>,
                loader: async() => {
                    const forProducts =  await fetch("https://zeus-server.vercel.app/sixProducts");
                    const products = await forProducts.json()

                    return products
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
                loader: () => fetch("https://zeus-server.vercel.app/equipments")
            },
            {
                path: "details/:id",
                element: <Private><Details></Details></Private>,
                loader: ({ params }) => fetch(`https://zeus-server.vercel.app/equipments/${params.id}`)
            },
            {
                path: `category/:name`,
                element: <Products></Products>,
                loader: ({params}) => fetch(`https://zeus-server.vercel.app/category/${params.name}`)
            },
            {
                path: `myEquipment/:mail`,
                element: <Private><MyEquipment></MyEquipment></Private>,
                loader: ({params}) => fetch(`https://zeus-server.vercel.app/myEquipment/${params.mail}`)
            },
            {
                path: "updateEquipment",
                element: <UpdateEquipment></UpdateEquipment>
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
    {
        path: "*",
        element: <NonExist></NonExist>
    },




]);

export default router