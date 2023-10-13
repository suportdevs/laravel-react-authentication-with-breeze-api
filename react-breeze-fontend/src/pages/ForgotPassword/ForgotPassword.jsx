import { useState } from "react";
import useAuthContext from '../../context/AuthContext';
import axios from "../../utilies/axios";

export default function ForgotPassword(){
    const [email, setEmail] = useState('');
    const [errors, setErrors]= useState([]);
    const [status, setStatus] = useState(null);
    const {csrf} = useAuthContext();
    const handleSubmit = async(event) => {
        event.preventDefault();
        await csrf();
        setErrors([]);
        try{
            const response = await axios.post('/forgot-password', {email});
            setStatus(response.data.status);
        }catch(e){
            if(e.response.status === 422){
                setErrors(e.response.data.errors);
            }
        }
    }
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <p className="mt-10 text-center tracking-tight text-gray-900">Forgot your password? Let us know your email address, we will email you a password reset link.</p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            {status && <div className="text-green-700">{status}</div>}
            <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                <input id="email" name="email" type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors?.email && (
                <span className="text-sm text-red-500">{errors?.email[0]}</span>)
                }
            </div>
            <div>
                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Send reset password link</button>
            </div>
            </form>
        </div>
    </div>
    );
}