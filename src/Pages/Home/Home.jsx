
import ChooseService from "./ChooseService";
import HomeCarousel from "./HomeCarousel";
import ContentProvider from "../../WebsiteContent/ContentProvider";
import About from "./About";
import Sponsors from "./Sponsors";


const Home = () => {



    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <ChooseService />
            <ContentProvider />
            <About />
            <Sponsors />
        </div>
    );
};

export default Home;