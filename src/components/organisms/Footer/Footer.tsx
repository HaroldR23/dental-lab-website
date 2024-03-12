import Copyright from "../../molecules/Copyright/Copyright";
import FooterItems from "../FooterItems/FooterItems";
import { FooterPropTypes } from "./FooterPropTypes";

const Footer = ({ items, logoFooterUrl, logoCopyrightUrl, copyrightTextContent }: FooterPropTypes) => {
    return (
        <div id="footer">
            <div className="footer">
                <img src={logoFooterUrl} alt='logotipo' width='135px' height='135px'/>
                <FooterItems items={items}/>
            </div>
            <Copyright logoUrl={logoCopyrightUrl} textContent={copyrightTextContent}/>
        </div>
    );
};

export default Footer;
