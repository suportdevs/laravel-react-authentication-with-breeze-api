import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import AuthLayout from "./AuthLayout";

export default function Layout(){
    return (
        <>
        {/* <AuthLayout> */}
            <Navbar />
            <Outlet />
        {/* </AuthLayout> */}
        </>
    )
}