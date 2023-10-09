import AOS from 'aos';
import 'aos/dist/aos.css';

const BuyTicket = () => {


    const ticketCoverImg = 'https://i.ibb.co/9YcjN2c/car-race.jpg';


    AOS.init();

    return (
        <div>
            <div className="h-[500px] w-full flex justify-start items-center p-10"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url(${ticketCoverImg}})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                }}>
                <div className="space-y-3">
                    <h2 className="text-5xl lg:text-6xl font-extrabold text-white container mx-auto">Buy Ticket</h2>
                    <div className="bg-sub h-7 w-[150px] lg:w-[250px]"
                        data-aos="fade-left"
                        data-aos-offset="50"
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        data-aos-anchor-placement="top-center">
                    </div>
                </div>
            </div>

            <div className="mt-[5rem] container mx-auto p-5 flex flex-col lg:flex-row justify-around items-center gap-10">

                <div className="flex flex-col justify-center items-center gap-4 bg-main p-10 rounded w-full lg:w-1/3"
                    data-aos="fade-right"
                    data-aos-offset="-500"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <h4 className="text-2xl font-medium text-white">Silver</h4>
                    <h3 className="text-5xl font-extrabold text-sub">$99</h3>
                    <button className="text-[18px] font-medium px-5 py-2 bg-white mt-3 rounded text-main hover:shadow-[0_0_70px_white] duration-300">Buy Now</button>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 bg-main p-10 rounded w-full lg:w-1/3"
                    data-aos="fade"
                    data-aos-offset="-500"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <h4 className="text-2xl font-medium text-white">Gold</h4>
                    <h3 className="text-5xl font-extrabold text-sub">$199</h3>
                    <button className="text-[18px] font-medium px-5 py-2 bg-white mt-3 rounded text-main hover:shadow-[0_0_70px_white] duration-300">Buy Now</button>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 bg-main p-10 rounded w-full lg:w-1/3"
                    data-aos="fade-left"
                    data-aos-offset="-500"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <h4 className="text-2xl font-medium text-white">Platinum</h4>
                    <h3 className="text-5xl font-extrabold text-sub">$299</h3>
                    <button className="text-[18px] font-medium px-5 py-2 bg-white mt-3 rounded text-main hover:shadow-[0_0_70px_white] duration-300">Buy Now</button>
                </div>

            </div>
        </div>
    );
};

export default BuyTicket;