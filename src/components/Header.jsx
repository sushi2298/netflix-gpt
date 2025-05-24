import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useDispatch } from "react-redux";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch(() => {
            navigate("/error");
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName } = user;
                dispatch(addUser({ userId: uid, email, name: displayName }));
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between">
            <img
                className="mx-8 w-48"
                src={LOGO}
                alt="logo"
            />
            {
                isLoggedIn && (
                    <div className="flex gap-4 m-4">
                        <img
                            alt="userIcon"
                            className="w-11 h-12"
                            src={USER_AVATAR}
                        />
                        <button
                            className="text-white font-bold"
                            onClick={handleSignOut}
                        >
                            Sign out
                        </button>
                    </div>)

            }
        </div>
    )
};

export default Header;