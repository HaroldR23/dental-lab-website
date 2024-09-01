import { GaleryPropTypes } from "./GaleryPropTypes";

const Galery = ({ imageUrls }: GaleryPropTypes) => {
  return (
    <div className="galeryContainer" id="galery">
      {imageUrls.map((url: string, index: number) => (
        <img key={index} src={url} alt={url} width='400px' height='250px'/>
      ))}
    </div>
  )
};

export default Galery;
