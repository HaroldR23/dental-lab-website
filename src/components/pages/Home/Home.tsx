import Carousel from "../../molecules/Carousel/Carousel";
import PageTemplate from "../../templates/PageTemplate";
import { BUTTON_LINKS, CAROUSEL_IMAGES, GALLERY_IMAGES_SRC, LAB_INFORMATION_ITEMS } from "../../../constants/homeConstants";
import ButtonLink from "../../molecules/ButtonLink/ButtonLink";
import Galery from "../../molecules/Galery/Galery";
import LabInformation from "../../organisms/LabInformation/LabInformation";

const Home = () => {

  const  HomeBody = () => {
    return (
      <div className="homePageContainer">
         <div className="buttonLinksContainer" id="content">
          {
              BUTTON_LINKS.map((buttonLink, index) => 
                  <ButtonLink 
                    icon={buttonLink.icon} 
                    text={buttonLink.text}
                    disabled={buttonLink.disabled}
                    key={index}
                  />
              )
          }
        </div>
        <div className="textContent">Algunos de nuestros trabajos</div>
        <Galery imageUrls={GALLERY_IMAGES_SRC}/>
        <div className="textContent">Nosotros</div>
        <LabInformation items={LAB_INFORMATION_ITEMS}/>
      </div>
      )      
   }
    return (
        <PageTemplate
          carousel={<Carousel autoplay children={CAROUSEL_IMAGES}/>}
          body={<HomeBody/>}
        />
    );
};

export default Home;