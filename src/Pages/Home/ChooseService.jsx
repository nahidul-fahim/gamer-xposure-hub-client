import { useContext } from "react";
import { ContentContext } from "../../WebsiteContent/ContentProvider";
import SingleService from "./SingleService";
import AOS from 'aos';
import 'aos/dist/aos.css';



const ChooseService = () => {

    const { websiteContents, loading } = useContext(ContentContext);

    if (loading) {
        return <span className="loading loading-dots loading-lg container mx-auto flex justify-center items-center h-[100vh]"></span>
    }


    AOS.init();


    return (
        <div className="container mx-auto p-5 mt-[3rem] md:mt-[5rem] space-y-[3rem]">
            <div className="flex md:flex-row flex-col justify-center items-center gap-2 md:gap-4">
                <h2 className="text-center text-sub text-5xl font-extrabold">CHOOSE YOUR <span className="text-main">STAGE</span></h2>
                <div className="w-[150px] h-full bg-main"
                    data-aos="fade-left"
                    data-aos-offset="-50"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">.</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10"
                data-aos="fade-up"
                data-aos-offset="20"
                data-aos-delay="0"
                data-aos-duration="1000"
                data-aos-easing="ease-in-sine"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                {
                    websiteContents.map(websiteContent => <SingleService
                        key={websiteContent.id}
                        websiteContent={websiteContent}>
                    </SingleService>)
                }
            </div>
        </div>
    );
};

export default ChooseService;