import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    const aboutBg = 'https://i.ibb.co/FK8cGf9/war-background.png';

    AOS.init();

    return (
        <div className="md:py-14 md:px-[5rem] p-8 mt-[5rem]"
            style={{
                backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(0, 0, 0, 0.5)), url(${aboutBg}})`,
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>

            <div className="flex lg:flex-row flex-col justify-center lg:justify-around items-center gap-[80px] container mx-auto">

                <div className="lg:w-1/2"
                    data-aos="fade-right"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <img src="https://i.ibb.co/NSb56g2/gamer-team.png" alt="A gaming team" className="rounded" />
                </div>

                <div className="lg:w-1/2 space-y-7"
                    data-aos="fade-left"
                    data-aos-offset="50"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <div className="flex md:flex-row flex-col justify-center items-center gap-2 md:gap-4">
                        <h2 className="text-center text-main text-5xl font-extrabold">ABOUT THE <span className="text-sub">GXH</span></h2>
                        <div className="w-[130px] md:w-[70px] h-full bg-sub">.</div>
                    </div>
                    <p className="text-white leading-8">
                        Welcome to Gaming Xposure Hub, {'California\'s'} gaming convention specialists. {'We\'re'} dedicated to crafting unforgettable gaming experiences. Our events unite gamers, enthusiasts, and industry leaders under one roof. Based in California, we deliver top-notch conventions showcasing the latest in gaming. Whether {'you\'re'} a casual player or industry professional, our events offer something for everyone. Join us in celebrating the dynamic world of gaming and fostering a sense of community. Welcome to Gaming Xposure Hub, where gaming thrives!
                    </p>
                </div>

            </div>
        </div>
    );
};

export default About;