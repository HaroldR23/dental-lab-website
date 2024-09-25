import { useMediaQuery } from "react-responsive";
import Anchor from "../../molecules/Anchor/Anchor";
import { NavBarPropTypes } from "./NavBarPropTypes";
import { MenuOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const NavBar = ({ logoUrl, anchorItems }: NavBarPropTypes) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {
    if (!isSmallScreen) {
      setIsMenuOpen(false);
    }
  }, [isSmallScreen]);

  return (
    <div className="mainNavContainer">
      <div className="navHorizontalContainer">
        <img src={logoUrl} alt={logoUrl}/>
        {isSmallScreen ? <MenuOutlined role="button" onClick={handleMenuClick}/> : <Anchor anchorList={anchorItems}/>}
      </div>
      <div className="navVerticalContainer">
        {isSmallScreen && isMenuOpen && <Anchor anchorList={anchorItems}/>}
      </div>
    </div>
  );
}

export default NavBar;