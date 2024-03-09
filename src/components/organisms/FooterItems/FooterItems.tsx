import InformationContent from "../../molecules/InformationContent/InformationContent";
import { FooterChildType, FooterItemType, FooterItemsPropTypes } from "./FooterItemsPropTypes";

const FooterItems = ({ items }: FooterItemsPropTypes) => {

    const footerItems = (children: FooterChildType[]) => {
        return children.map((child: FooterChildType, index: number) => (
            <div key={index}>
                {child.icon}
                <p>{child.description}</p>
            </div>
        ));
    };

    return (
        <div>
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
