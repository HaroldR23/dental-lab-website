import FooterItems from "../FooterItems/FooterItems";
import { FooterPropTypes } from "./FooterPropTypes";

const Footer = ({ items, logoUrl }: FooterPropTypes) => {
    return (
        <div>
            <img src={logoUrl} alt='logotipo' width='135px' height='135px'/>
            <FooterItems items={items}/>
        </div>
    );
};

export default Footer;
