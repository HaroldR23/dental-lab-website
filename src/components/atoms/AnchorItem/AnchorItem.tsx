import { AnchorItemPropTypes } from "./AnchorItemPropTypes";

const AnchorItem = ({ id }: AnchorItemPropTypes) => {
    return(
        <div id={id} className="anchorItem"/>
    );
}

export default AnchorItem;
