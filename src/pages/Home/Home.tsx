import { useState } from "react";
import { BUTTON_LINKS, CAROUSEL_IMAGES, GALLERY_IMAGES_SRC, LAB_INFORMATION_ITEMS } from "../../constants/homeConstants";
import ButtonLink from "../../components/molecules/ButtonLink/ButtonLink";
import Galery from "../../components/molecules/Galery/Galery";
import LabInformation from "../../components/organisms/LabInformation/LabInformation";
import ModalCalendar from "../../components/organisms/ModalCalendar/ModalCalendar";
import PageTemplate from "../../components/templates/PageTemplate";
import { Carousel, Divider } from "antd";


const Home = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const handleClose = () => setIsOpenModal(false);
  const handleOpen = () => setIsOpenModal(true);

  const  HomeBody = () => {
  
    return (
      <div className="homePageContainer">
        <div className="buttonLinksContainer" id="content">
          {
            BUTTON_LINKS.map((buttonLink, index) => 
              <ButtonLink 
                icon={buttonLink.icon}
                text={buttonLink.text}
                ref_path={buttonLink.ref_path}
                onClick={buttonLink.ref_path ? undefined : handleOpen }
                key={index}
              />
            )
          }
        </div>
        <Divider/>
        <div className="textContent">Algunos de nuestros trabajos</div>
        <Galery imageUrls={GALLERY_IMAGES_SRC}/>
        <Divider/>
        <div className="textContent">Nosotros</div>
        <LabInformation items={LAB_INFORMATION_ITEMS}/>
        <ModalCalendar
          isOpen={isOpenModal}
          onClose={handleClose}
        />
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