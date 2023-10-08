import {  Pagination  } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import banner1 from "../../assets/car_race.jpg";
import banner2 from "../../assets/war.jpg";
import banner3 from "../../assets/sports.jpg";
import banner4 from "../../assets/football.jpg";


const HomeCarousel = () => {
    return (
        <div>
            <Swiper
                modules={[Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <div className="flex flex-col gap-3 justify-center items-center p-5" style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${banner1})`,
                        height: '100vh',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}>
                        <h2 className="text-6xl font-bold text-white text-center">START YOUR ENGINES!</h2>
                        <p className="w-full md:w-2/3 text-center text-white font-medium">Rev up your excitement with our Racing Event! Get ready to burn rubber, tackle hairpin turns, and chase victory in the virtual world of racing. With cutting-edge simulations and a community of fellow enthusiasts, our events offer a pulse-pounding experience like no other. {'It\'s'}not just a game; {'it\'s'} a race for glory, speed, and the ultimate thrill of victory!</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col gap-3 justify-center items-center p-5" style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${banner2})`,
                        height: '100vh',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}>
                        <h2 className="text-6xl font-bold text-white text-center">LAST ONE STANDING!</h2>
                        <p className="w-full md:w-2/3 text-center text-white font-medium">Immerse yourself in the ultimate showdown of skill and strategy. Join a dynamic arena where only the strongest survive, and where every match is a thrilling quest for supremacy. Form squads, outwit your opponents, and emerge as the last team standing. Are you ready to conquer the battlefield and claim victory?</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col gap-3 justify-center items-center p-5" style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${banner3})`,
                        height: '100vh',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}>
                        <h2 className="text-6xl font-bold text-white text-center">FUEL YOUR FANTASY!</h2>
                        <p className="w-full md:w-2/3 text-center text-white font-medium">Experience the thrill of speed, precision, and competition. Get behind the virtual wheel of your dream car, compete on iconic tracks, and push your skills to the limit. Whether {'you\'re'} a seasoned racer or a novice driver, our events offer high-octane fun for all. Race against the best, set new records, and fuel your passion for gaming on the track!</p>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="flex flex-col gap-3 justify-center items-center p-5" style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.6)), url(${banner4})`,
                        height: '100vh',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                    }}>
                        <h2 className="text-6xl font-bold text-white text-center">GAME ON! GOAL ON!</h2>
                        <p className="w-full md:w-2/3 text-center text-white font-medium">Elevate your passion for football. Step onto the virtual pitch, assemble your dream team, and strategize for victory. Experience the excitement of every goal, every pass, and every save as you compete against skilled gamers. Join us for a soccer competition like {'you\'ve'} never seen before!</p>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default HomeCarousel;