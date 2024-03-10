import InformationContent from "../../molecules/InformationContent/InformationContent";
import { FooterChildType, FooterItemType, FooterItemsPropTypes } from "./FooterItemsPropTypes";

const FooterItems = ({ items }: FooterItemsPropTypes) => {

    const footerItems = (children: FooterChildType[]) => {
        return children.map((child: FooterChildType, index: number) => (
            <div className="footerItems" key={index}>
                {child.icon}
                <div>{child.description}</div>
            </div>
        ));
    };

    return (
        <div className="footerItemsContainer">
            {
                items.map((item: FooterItemType, index: number) => (
                    <InformationContent
                        key={index}
                        title={item.title} 
                        children={footerItems(item.children)}
                    />
                ))
            }
        </div>
    );
};

export default FooterItems;
