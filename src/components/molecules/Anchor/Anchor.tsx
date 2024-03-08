import AnchorItem from "../../atoms/AnchorItem/AnchorItem"
import { AnchorItemPropTypes } from "../../atoms/AnchorItem/AnchorItemPropTypes";
import { AnchorPropTypes } from "./AnchorPropTypes"

const Anchor = ({ anchorList }: AnchorPropTypes) => {
    return (
        <div role="list" className="anchorContainer">
            {
                anchorList.length !== 0 && anchorList.map(
                    (anchor: AnchorItemPropTypes, index: number) => 
                    <div role="listitem" key={index}>
                        <AnchorItem 
                            id={anchor.id}
                            href={anchor.href}
                            title={anchor.title}
                        />
                    </div> 
                )
            }
        </div>
    )
}

export default Anchor;
