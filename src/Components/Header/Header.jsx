import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <>
        <NavLink className="text-[white] font-bold">Home</NavLink>
    </>

    return (
        <div className="container mx-auto p-5 absolute z-10">

            {/* div for logged in user information */}
            <div className="flex justify-end items-center">
                <div>
                    <button className="bg-main text-white px-3 py-1 font-medium rounded-l">Login</button>
                    <button className="bg-main text-white px-3 py-1 font-medium rounded-r border-l-[1px] border-[#868686]">Sign up</button>
                </div>
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
                        <a href="/"><img className="w-[40%]" src="https://i.ibb.co/6PYp5wm/logo.png" alt="website logo" /></a>
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