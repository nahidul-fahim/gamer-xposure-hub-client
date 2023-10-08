
import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="bg-[#14133f]">
            <div className="h-[100vh] container mx-auto flex justify-center items-center flex-col">
                <h2 className="text-[white] text-[120px] font-primary font-bold">404</h2>
                <h3 className="text-[40px] font-medium text-[white]">PAGE NOT FOUND!</h3>
                <Link to="/"><button className="bg-[white] px-5 py-2 text-xl font-semibold mt-12 rounded border-2 border-[#00000000] hover:border-2 hover:border-[white] hover:text-[white] hover:bg-[#ffffff00] duration-500">Go to Homepage</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;