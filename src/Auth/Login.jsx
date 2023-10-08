import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';
import { useState } from "react";



const Login = () => {

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }



    return (
        <div>
            <div className="container mx-auto p-5">

                <div className="space-y-14 flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-main font-bold text-center">Login to your account</h2>

                    <form className="flex flex-col justify-center items-center w-full md:w-2/3 lg:w-1/3 space-y-7 lg:space-y-10 px-10">

                        <input type="email" name="email" placeholder="Email address" id="eamil" className="focus:outline-none border-b-[1px] pb-2 border-[lightgray] focus:border-main  transition-all duration-500 w-full" />

                        <div className="flex relative w-full justify-center items-center">
                            <input type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="password" className="focus:outline-none border-b-[1px] pb-2 border-[lightgray] focus:border-main  transition-all duration-500 w-full" />
                            <span onClick={handleShowPassword} className="absolute right-2 text-[gray]"> {showPassword ? <BsFillEyeSlashFill /> : <BsFillEyeFill />} </span>
                        </div>

                        <input type="submit" value="Login" className="bg-main px-4 py-2 rounded text-white font-medium hover:bg-sub duration-300 w-full" />

                    </form>
                </div>

                <div className="mt-5 flex justify-center items-center gap-1">
                    <p className="text-center font-medium">{'Dont\'t'} have an account?</p>
                    <Link to="/signup" className="font-semibold border-t-2 border-t-[#ffffff00] border-b-2 border-sub hover:bg-sub px-2 py-1 hover:border-t-2 duration-300">Sign up</Link>
                </div>

            </div>
        </div>
    );
};

export default Login;