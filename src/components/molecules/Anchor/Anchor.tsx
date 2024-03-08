import AnchorItem from "../../atoms/AnchorItem/AnchorItem"
import { AnchorItemPropTypes } from "../../atoms/AnchorItem/AnchorItemPropTypes";
import { AnchorPropTypes } from "./AnchorPropTypes"

const Anchor = ({ anchorIdsList }: AnchorPropTypes) => {
    return (
        <div role="list">
            {
                anchorIdsList.length !== 0 && anchorIdsList.map(
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
