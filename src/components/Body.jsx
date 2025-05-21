import { onAuthStateChanged } from "firebase/auth";
import Browse from "./Browse";
import Login from "./Login"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";

const Body = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ userId: uid, email, name: displayName }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
    }, []);

    return (
        <div>
            <Login />
            <Browse />
        </div>
    )
}

export default Body;