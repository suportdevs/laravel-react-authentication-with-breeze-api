import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { AuthProvider } from "../../context/AuthContext";

export default function Layout(){
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}