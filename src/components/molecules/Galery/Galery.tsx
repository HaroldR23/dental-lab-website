import { GaleryPropTypes } from "./GaleryPropTypes";

const Galery = ({ imageUrls }: GaleryPropTypes) => {
  return (
    <div className="galeryContainer" id="galery">
      {imageUrls.map((url: string, index: number) => (
        <div className="imgContainer" key={index} >
          <img className="imgElement" src={url} alt={url} />
        </div>
      ))}
    </div>
  )
};

export default Galery;
