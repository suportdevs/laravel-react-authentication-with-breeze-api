import useAuthContext from "../../context/AuthContext"

export default function Home(){
    const {user} = useAuthContext();
    return (
        <h1>
            Hello, {user?.name}
        </h1>
    )
}