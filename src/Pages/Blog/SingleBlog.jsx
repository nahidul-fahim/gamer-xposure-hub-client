

const SingleBlog = ({singleBlog}) => {

    const {image, name, description, writer, date, tags} = singleBlog;

    console.log(singleBlog);
    return (
        <div className="flex flex-col justify-center items-start gap-5">
            <img src={image} alt="" className="rounded"/>
            <h3 className="text-2xl font-bold">{name}</h3>
            <p className="text-base">{description}</p>
            <div className="flex justify-start items-center gap-3">
                <p className="text-[14px] text-[gray]">{writer}</p>
                <p className="text-[14px] text-[gray]">{tags}</p>
            </div>
            <p>{date}</p>
        </div>
    );
};

export default SingleBlog;