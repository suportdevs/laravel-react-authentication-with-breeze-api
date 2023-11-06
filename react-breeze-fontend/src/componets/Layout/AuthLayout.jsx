import {Navigate, Outlet} from 'react-router-dom';
import useAuthContext from '../../context/AuthContext';

export default function AuthLayout(){
    const {user} = useAuthContext();
    if(!user){
        return <Navigate to='/login' />
    }
    return (
        <>
        <Outlet />
        </>
    )
}