import { ANCHOR_ITEMS, COPYRIGHT_LOGO_URL, COPYRIGHT_TEXT_CONTENT, FOOTER_ITEMS, FOOTER_LOGO_URL, NAV_BAR_LOGO_URL } from "../../constants/templateConstants";
import Footer from "../organisms/Footer/Footer";
import NavBar from "../organisms/NavBar/NavBar";
import { PageTemplatePropTypes } from "./PageTemplatePropTypes";

const PageTemplate = ({ body, carousel }: PageTemplatePropTypes) => {
  return (
    <>
      <header>
        {carousel && carousel}
        <NavBar anchorItems={ANCHOR_ITEMS} logoUrl={NAV_BAR_LOGO_URL}/>
      </header>
      {body}
      <footer>
        <Footer 
          items={FOOTER_ITEMS} 
          logoFooterUrl={FOOTER_LOGO_URL}
          logoCopyrightUrl={COPYRIGHT_LOGO_URL}
          copyrightTextContent={COPYRIGHT_TEXT_CONTENT}
        />
      </footer>
    </>
  );
};

export default PageTemplate;
