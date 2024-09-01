import Anchor from "../../molecules/Anchor/Anchor";
import { NavBarPropTypes } from "./NavBarPropTypes";

const NavBar = ({ logoUrl, anchorItems }: NavBarPropTypes) => {
  return (
    <div className="navContainer">
      <img src={logoUrl} width='200px' height='65px' alt={logoUrl}/>
      <Anchor anchorList={anchorItems}/>
    </div>
  );
}

export default NavBar;
