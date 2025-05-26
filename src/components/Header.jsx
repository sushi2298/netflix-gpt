import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { auth } from "../utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { languages, LOGO, USER_AVATAR } from "../utils/constants";
import { toggleSearch } from "../utils/slices/searchSlice";
import { changeLanguage } from "../utils/slices/configSlice";

const Header = ({ isLoggedIn }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const currentLang = useSelector(state => state.config?.language);
    const isSearchOpen = useSelector(state => state.search?.isOpen);

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch(() => {
            navigate("/error");
        })
    }

    const handleSearchOpen = () => {
        dispatch(toggleSearch());
    }

    const selectLanguage = (e) => {
        dispatch(changeLanguage(e.target.value))
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
        <div className="absolute bg-gradient-to-b from-black z-10 w-full flex justify-between flex-row">
            <img
                className="mx-0 w-28 md:mx-8 md:w-48 "
                src={LOGO}
                alt="logo"
            />
            {
                isLoggedIn && (
                    <div className="flex gap-2 md:gap-4  md:m-4 justify-center items-center">
                        {
                            isSearchOpen &&
                            <select className="bg-slate-300 bg-opacity-20 text-white p-2" onChange={selectLanguage} value={currentLang}>
                                {languages.map((lg) => <option key={lg.id} className="text-black" value={lg.id}> {lg.name}</option>)}
                            </select>
                        }
                        <button 
                            className="bg-slate-400 bg-opacity-25 text-white rounded-md p-2 md:p-4 hover:bg-opacity-15 font-semibold"
                            onClick={handleSearchOpen}
                        >
                                Search
                        </button>
                        <img
                            alt="userIcon"
                            className="w-5 h-6 md:w-11 md:h-12"
                            src={USER_AVATAR}
                        />
                        <button
                            className="text-white font-semibold"
                            onClick={handleSignOut}
                        >
                            Sign out
                        </button>
                    </div>
                )
            }
        </div>
    )
};

export default Header;