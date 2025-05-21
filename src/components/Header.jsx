import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";

const Header = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch(() => {
            navigate("/error");
        })
    }
    
    return (
        <div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between">
            <img
                className="mx-8 w-48"
                src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo"
            />
            {
                isLoggedIn && (
                <div className="flex gap-4 m-4">
                    <img
                        alt="userIcon"
                        className="w-11 h-12"
                        src="https://occ-0-2087-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7"
                    />
                    <button 
                        className="text-white font-bold"
                        onClick={handleSignOut}
                    >Sign out</button>
                </div>)

            }
        </div>
    )
};

export default Header;