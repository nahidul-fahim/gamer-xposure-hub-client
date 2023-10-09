
import ChooseService from "./ChooseService";
import HomeCarousel from "./HomeCarousel";
import ContentProvider from "../../WebsiteContent/ContentProvider";


const Home = () => {



    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <ChooseService />
            <ContentProvider />
        </div>
    );
};

export default Home;