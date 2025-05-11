import { useState } from "react";
import Header from "./Header";

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);

    const onSwitch = () => setSignIn(!isSignIn);

    return (
        <div>
            <Header />
            <div className="absolute">
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
                alt="bg"
            />
            </div>
            <form className="flex flex-col absolute bg-black w-3/12 mx-auto right-0 left-0 my-32 text-white gap-4 p-16 bg-opacity-75">
                <h1 className="text-3xl font-bold pb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && <input type='name' placeholder="Name" className="p-2 bg-inherit border-solid border-slate-500 rounded-md border" />}
                <input type='email' placeholder="Email Address" className="p-2 bg-inherit border-solid border-slate-500 rounded-md border" />
                <input type='password' placeholder="Password"  className="p-2 bg-inherit border-solid border-slate-500 rounded-md border" />
                <button className="bg-red-600 p-2 rounded-md font-bold" >{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer pt-4" onClick={onSwitch}>{isSignIn ? "Already a user? Login to Netflix" : "New User? Sign Up to Netflix"}</p>
            </form>
        </div>
    )
}

export default Login;