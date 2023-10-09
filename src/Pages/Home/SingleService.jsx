import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';




const SingleService = ({ websiteContent }) => {

    const { name, image, short_desc, price } = websiteContent;


    return (
        <div className="p-12 flex flex-col justify-center items-start gap-4 rounded"
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${image}})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',}}>
            <h3 className="text-3xl font-bold text-sub">{name}</h3>
            <p className="text-white text-[14px] leading-8">{short_desc}</p>
            <h3 className="text-xl font-semibold text-sub">Entry fee: <span className="text-white">${price}</span></h3>
            <Link><button className="text-[18px] font-medium px-5 py-2 bg-sub mt-3 rounded text-black">Explore details</button></Link>
        </div >
    );
};

export default SingleService;


SingleService.propTypes = {
    websiteContent: PropTypes.object,
}