import { useContext } from "react";
import { ContentContext } from "../../WebsiteContent/ContentProvider";
import SingleService from "./SingleService";



const ChooseService = () => {

    const {websiteContents, loading} = useContext(ContentContext);

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }


    return (
        <div className="container mx-auto p-5 mt-[3rem] md:mt-[5rem] space-y-[3rem]">
            <div className="flex md:flex-row flex-col justify-center items-center gap-2 md:gap-4">
                <h2 className="text-center text-sub text-5xl font-extrabold">CHOOSE YOUR <span className="text-main">STAGE</span></h2>
                <div className="w-[150px] h-full bg-main">.</div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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