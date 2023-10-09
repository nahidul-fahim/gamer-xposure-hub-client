import { useContext } from "react";
import { ContentContext } from "../../WebsiteContent/ContentProvider";
import SingleService from "./SingleService";



const ChooseService = () => {

    const {websiteContents} = useContext(ContentContext);

    const result = Array.isArray(websiteContents);

    console.log( "checking array:" ,result);


    return (
        <div className="container mx-auto p-5 mt-[3rem] md:mt-[5rem]">
            <div className="flex md:flex-row flex-col justify-center items-center gap-2 md:gap-4">
                <h2 className="text-center text-sub text-5xl font-extrabold">CHOOSE YOUR <span className="text-main">STAGE</span></h2>
                <div className="w-[150px] h-full bg-main">.</div>
            </div>

            <div>
                {/* {
                    websiteContents.map(websiteContent => <SingleService 
                    key={websiteContent.id}
                    websiteContent={websiteContent}>
                    </SingleService>)
                } */}
            </div>
        </div>
    );
};

export default ChooseService;