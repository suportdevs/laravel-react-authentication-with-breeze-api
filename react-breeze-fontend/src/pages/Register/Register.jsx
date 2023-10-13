import { useState } from "react";
import { Link } from "react-router-dom";
import useAuthContext from "../../context/AuthContext";

export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const {register, errors} = useAuthContext();

    const handleRegistration = async (event) => {
        event.preventDefault();
        register({name, email, password, password_confirmation});
    }

    return (
        <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to your account</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form class="space-y-4" onSubmit={handleRegistration}>
            <div>
                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="mt-2">
                <input id="name" name="name" type="name" autocomplete="name" value={name} onChange={(e) => setName(e.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors?.name &&
                <span className="text-sm text-red-500">{errors.name[0]}</span>
                }
            </div>
            <div>
                <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors?.email &&
                <span className="text-sm text-red-500">{errors.email[0]}</span>
                }
            </div>

            <div>
                <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>
                <div class="mt-2">
                <input id="password" name="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors?.password &&
                <span className="text-sm text-red-500">{errors.password[0]}</span>
                }
            </div>
            <div>
                <div class="flex items-center justify-between">
                <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                </div>
                <div class="mt-2">
                <input id="password_confirmation" name="password_confirmation" type="password" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                </div>
                {errors?.password_confirmation &&
                <span className="text-sm text-red-500">{errors.password_confirmation[0]}</span>
                }
            </div>

            <div>
                <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
            </div>
            </form>
            <p class="mt-10 text-center text-sm text-gray-500">
            Not a member?
            <Link to="/login" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Sign In</Link>
            </p>
        </div>
    </div>
    )
}