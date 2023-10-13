import { createContext, useContext, useEffect, useState } from "react";
import axios from "../utilies/axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const csrf = () => axios.get('/sanctum/csrf-cookie');

    const getUser = async () => {
        try{
            const {data} = await axios.get('/api/user');
            setUser(data);
        }catch(err){
            console.log(err);
        }
    }

    const register = async ({...data}) => {
        await csrf();
        setErrors([]);
        try{
            await axios.post('/register', data);
            await getUser();
            navigate('/');
        }catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }
    const login = async ({...data}) => {
        await csrf();
        setErrors([]);
        try{
            await axios.post('/login', data);
            await getUser();
            navigate('/');
        }catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }

    const logout = async () => {
        await csrf();
        setErrors([]);
        try{
            await axios.post('/logout');
            setUser(null);
        }catch(e){
            setErrors(e.response.data.errors);
        }
    }

    useEffect(() => {
        if(!user){
            getUser();
        }
    }, []);

    return (
        <AuthContext.Provider value={{user, errors, getUser, login, register,logout, csrf}}>
            {children}
        </AuthContext.Provider>
    );
}

export default function useAuthContext(){
    return useContext(AuthContext);
}