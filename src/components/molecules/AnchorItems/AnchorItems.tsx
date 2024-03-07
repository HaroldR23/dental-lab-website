import AnchorItem from "../../atoms/AnchorItem/AnchorItem"
import { AnchorItemsPropTypes } from "./AnchorItemsPropTypes"

const AnchorItems = ({ anchorIdsList }: AnchorItemsPropTypes) => {
    return (
        <div role="list">
            {
                anchorIdsList.length !== 0 && anchorIdsList.map((anchorId: string, index: number) => 
                    <div role="listitem" key={index}>
                        <AnchorItem id={anchorId}/>
                    </div> 
                )
            }
        </div>
    )
}

export default AnchorItems;
