import { Link } from "react-router-dom";
import { BsFillEyeFill, BsFillEyeSlashFill } from 'react-icons/bs';


const Signup = () => {

    




    return (
        <div className="container mx-auto p-5">

            <div className="space-y-14 flex flex-col justify-center items-center">
                <h2 className="text-3xl text-main font-bold text-center">Sign up for free!</h2>

                <form className="flex flex-col justify-center items-center w-1/3 space-y-10 px-10">
                    <input type="text" name="name" placeholder="Full name" id="name" className="focus:outline-none border-b-[1px] pb-2 border-[lightgray] focus:border-main  transition-all duration-500 w-full" />

                    <input type="email" name="email" placeholder="Email address" id="eamil" className="focus:outline-none border-b-[1px] pb-2 border-[lightgray] focus:border-main  transition-all duration-500 w-full" />

                    <input type="text" name="username" placeholder="Username" id="username" className="focus:outline-none border-b-[1px] pb-2 border-[lightgray] focus:border-main  transition-all duration-500 w-full" />

                    <div>
                        <input type="password" name="password" placeholder="Password" id="password" className="focus:outline-none border-b-[1px] pb-2 border-[lightgray] focus:border-main  transition-all duration-500 w-full" />

                    </div>

                    <input type="file" name="image" accept="image/*" id="image" className="focus:outline-none border-b-[1px] pb-2 border-[lightgray] focus:border-main  transition-all duration-500" />

                    <input type="submit" value="Sign up" className="bg-main px-4 py-2 rounded text-white font-medium hover:bg-sub duration-300 w-full" />

                </form>
            </div>

            <div className="mt-5 flex justify-center items-center gap-1">
                <p className="text-center font-medium">Already have an account?</p>
                <Link to="/login" className="font-semibold border-t-2 border-t-[#ffffff00] border-b-2 border-sub hover:bg-sub px-2 py-1 hover:border-t-2 duration-300">Login</Link>
            </div>

        </div>
    );
};

export default Signup;