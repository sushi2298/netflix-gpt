import { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/slices/userSlice";

const Login = () => {
    const [isSignIn, setSignIn] = useState(true);
    const [error, setFormError] = useState(null);
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);
    const dispatch = useDispatch();

    const onSwitch = () => setSignIn(!isSignIn);

    const onSubmit = () => {

        const newError = checkValidData(name.current?.value, email.current?.value, password.current?.value, isSignIn);
        if(newError) {
            setFormError(newError);
            return;
        } else if(error) {
            setFormError(null);
        }

        if(!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current?.value
                    }).then(() => {
                        const { uid, email, displayName } = auth.currentUser;
                        dispatch(addUser({ userId: uid, email, name: displayName }));
                    }).catch((err) => {
                        const errCode = err.code;
                        const errMessage = err.message;
                        setFormError(errCode + ": " + errMessage);
                    })
                })
                .catch((err) => {
                    const errCode = err.code;
                    const errMessage = err.message;
                    setFormError(errCode + ": " + errMessage);
                });   
        } else {
            signInWithEmailAndPassword(auth, email.current?.value, password.current?.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((err) => {
                    const errCode = err.code;
                    const errMessage = err.message;
                    setFormError(errCode + ": " + errMessage);
                });
        }
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/cb17c41d-6a67-4472-8b91-cca977e65276/web/IN-en-20250505-TRIFECTA-perspective_03ae1a85-5dcf-4d20-a8a6-1e61f7ef73cb_large.jpg"
                    alt="bg"
                />
            </div>
            <form
                onSubmit={(e) => e.preventDefault()}
                className="flex flex-col absolute bg-black w-3/12 mx-auto right-0 left-0 my-32 text-white gap-4 p-16 bg-opacity-75"
            >
                <h1 className="text-3xl font-bold pb-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn && 
                    <input
                        ref={name} 
                        type='name' placeholder="Name" className="p-2 bg-inherit border-solid border-slate-500 rounded-md border"
                    />}
                <input
                    ref={email}
                    type='email'
                    placeholder="Email Address" className="p-2 bg-inherit border-solid border-slate-500 rounded-md border" />
                <input
                    ref={password}
                    type='password'
                    placeholder="Password" className="p-2 bg-inherit border-solid border-slate-500 rounded-md border" />
                {error && <p className="text-red-600">{error}</p>}
                <button className="bg-red-600 p-2 rounded-md font-bold" onClick={onSubmit}>{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer pt-4" onClick={onSwitch}>{!isSignIn ? "Already a user? Login to Netflix" : "New User? Sign Up to Netflix"}</p>
            </form>
        </div>
    )
}

export default Login;