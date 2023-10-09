import Marquee from "react-fast-marquee";


const Sponsors = () => {

    const sponsor1 = 'https://i.ibb.co/M1jn3tc/1.png';
    const sponsor2 = 'https://i.ibb.co/qCgVwZk/2.png';
    const sponsor3 = 'https://i.ibb.co/XDsZSFM/3.png';
    const sponsor4 = 'https://i.ibb.co/fQQR63g/4.png';
    const sponsor5 = 'https://i.ibb.co/hyprJSR/6.png';
    const sponsor6 = 'https://i.ibb.co/7j549DL/7.png';
    const sponsor7 = 'https://i.ibb.co/M1Dyf8x/8.png';
    const sponsor8 = 'https://i.ibb.co/rtmByj1/9.png';



    return (
        <div className="container p-10 mx-auto mt-[5rem] space-y-8">
            <div className="flex md:flex-row flex-col justify-center items-center gap-2 md:gap-4">
                <h2 className="text-center text-sub text-5xl font-extrabold">MEET OUR <span className="text-main">SPONSORS</span></h2>
                <div className="w-[150px] h-full bg-main">.</div>
            </div>
            <Marquee
                speed={120}>
                <img src={sponsor1} alt="" className="w-[70%] mr-[-200px] md:mr-[-140px]" />
                <img src={sponsor2} alt="" className="w-[70%] mr-[-200px] md:mr-[-140px]" />
                <img src={sponsor3} alt="" className="w-[70%] mr-[-200px] md:mr-[-140px]" />
                <img src={sponsor4} alt="" className="w-[70%] mr-[-200px] md:mr-[-140px]" />
                <img src={sponsor5} alt="" className="w-[70%] mr-[-200px] md:mr-[-140px]" />
                <img src={sponsor6} alt="" className="w-[70%] mr-[-200px] md:mr-[-140px]" />
                <img src={sponsor7} alt="" className="w-[70%] mr-[-200px] md:mr-[-140px]" />
                <img src={sponsor8} alt="" className="w-[70%] mr-[-200px] md:mr-[-140px]" />
            </Marquee>
        </div>
    );
};

export default Sponsors;