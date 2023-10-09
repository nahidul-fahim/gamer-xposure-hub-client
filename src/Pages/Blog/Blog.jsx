import { useContext } from "react";
import { ContentContext } from "../../WebsiteContent/ContentProvider";
import SingleBlog from "./SingleBlog";


const Blog = () => {


    const {blogData, loading} = useContext(ContentContext);

    if (loading) {
        return <span className="loading loading-dots loading-lg container mx-auto flex justify-center items-center h-[100vh]"></span>
    }


    const blogCoverImg = "https://i.ibb.co/5rhb9vb/game-blog.png";

    return (
        <div>
            <div className="h-[500px] w-full flex justify-start items-center p-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${blogCoverImg}})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                <div className="space-y-3">
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-white container mx-auto">Blog</h2>
                    <div className="bg-sub h-7 w-[150px] lg:w-[250px]">
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 mt-[5rem] container mx-auto p-5 gap-10">
                {
                    blogData.map(singleBlog => <SingleBlog
                    key={singleBlog.id}
                    singleBlog= {singleBlog}></SingleBlog>)
                }
            </div>

        </div>
    );
};

export default Blog;