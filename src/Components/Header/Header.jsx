import { useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";


const Header = () => {

    let location = useLocation();

    const { signOutUser, currentUser } = useContext(AuthContext);

    console.log(currentUser);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                console.log("Sign out successfull")
            })
            .catch(() => {
                console.log("error in sign out")
            })
    }

    const links = <>
        <NavLink className={`${location.pathname === "/" ? "text-white" : "text-black"} font-bold`}>Home</NavLink>
    </>;



    return (
        <div className={`container mx-auto p-5 absolute z-10 ${location.pathname === "/" ? 'absolute' : 'relative'}`}>

            {/* div for logged in user information */}
            <div className="flex justify-end items-center">

                {
                    currentUser ?
                        <div className="flex justify-end items-center gap-x-3">
                            <img src={currentUser?.photoURL} alt="" className="w-[35px] h-[35px] rounded-full bg-cover"/>
                            <p className="text-[12px] md:text-[13px] lg:text-[14px] font-semibold text-[gray]">{currentUser?.displayName}</p>
                            <button onClick={handleSignOut} className="bg-main text-white px-4 py-2 text-[14px] font-medium rounded-lg hover:text-main hover:bg-[white] duration-300">Sign out</button>
                        </div>
                        :
                        <div>
                            <Link to="/login"><button className="bg-main text-white px-4 py-2 text-[14px] font-medium rounded-l-lg hover:text-main hover:bg-[white] duration-300">Login</button></Link>
                            <Link to="/signup"><button className="bg-main text-white px-4 py-2 text-[14px] font-medium rounded-r-lg border-l-[1px] border-[#868686] hover:text-main hover:bg-[white] duration-300">Sign up</button></Link>
                        </div>
                }

            </div>

            {/* Nav bar */}
            <div>
                <div className="navbar bg-[#ffffff00]">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                {links}
                            </ul>
                        </div>
                        <img className="w-[50%] md:w-[30%] lg:w-[20%]" src={location.pathname === "/" ? "https://i.ibb.co/m5dmMjf/logo.png" : "https://i.ibb.co/dfpYy8y/G-1.png"} alt="website logo" />
                    </div>
                    <div className="navbar-end hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;