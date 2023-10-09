import { useContext } from "react";
import { ContentContext } from "../../WebsiteContent/ContentProvider";
import { useParams } from "react-router-dom";


const EventDetails = () => {

    const { id } = useParams();

    const { websiteContents, loading } = useContext(ContentContext);

    if (loading) {
        return <span className="loading loading-dots loading-lg"></span>
    }

    const currentContent = websiteContents.find(currentContent => currentContent.path === id);

    const { name, article_img, price, place, long_desc } = currentContent;

    console.log(article_img);


    return (
        <div>
            <div className="h-[500px] w-full flex justify-start items-center p-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${article_img}})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                <div className="space-y-3">
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-white container mx-auto">{name}</h2>
                    <div className="bg-sub h-7 w-[150px] lg:w-[250px]">
                    </div>
                </div>
            </div>


            <div className="mt-[5rem] container mx-auto p-5 flex flex-col lg:flex-row justify-center items-center w-full gap-10">

                <div className="lg:w-[70%]">
                    <img src={article_img} alt="" className="shadow-[-20px_-20px_30px_lightgray]" />
                </div>

                <div className="lg:w-[30%]">
                    <div className="rounded-t-lg border-2 p-7 lg:p-10 border-sub flex justify-center items-center">
                        <h3 className="text-xl font-bold text-center">Price: <br /> <span className="text-sub text-3xl">${price}</span></h3>
                    </div>
                    <div className="rounded-b-lg border-b-2 border-x-2 p-7 lg:p-10 border-sub flex justify-center items-center">
                        <h3 className="text-xl font-bold text-center">Venue: <br /> <span className="text-sub text-3xl">${place}</span></h3>
                    </div>
                </div>

            </div>


            <div className=" container mx-auto p-10 mt-[3rem] lg:mt-[5rem] space-y-5">
                <h2 className="text-3xl font-extrabold">ABOUT <span className="uppercase text-sub">{name}</span></h2>
                <p className="leading-9">
                    {long_desc}
                </p>
            </div>

        </div>
    );
};

export default EventDetails;