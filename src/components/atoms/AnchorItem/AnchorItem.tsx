import { AnchorItemPropTypes } from "./AnchorItemPropTypes";

const AnchorItem = ({ id, href, title }: AnchorItemPropTypes) => {
  return(
    <a id={id} href={href} className="anchorItem">{title}</a>
  );
}

export default AnchorItem;
