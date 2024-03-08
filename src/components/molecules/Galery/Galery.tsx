import { GaleryPropTypes } from "./GaleryPropTypes";

const Galery = ({ imageUrls }: GaleryPropTypes) => {
    return (
        <div className="galeryContainer">
            {imageUrls.map((url: string, index: number) => (
                <img key={index} src={url} alt={url} />
            ))}
        </div>
    )
};

export default Galery;
