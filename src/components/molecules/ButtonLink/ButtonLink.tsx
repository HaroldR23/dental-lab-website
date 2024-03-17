// import { Link } from "react-router-dom";
import { ButtonLinkPropTypes } from "./ButtonLinkPropTypes";

const ButtonLink = ({ text, icon, disabled }: ButtonLinkPropTypes) => {
    return (
        <a href="/products">
            <button className="buttonLink" disabled={disabled}>
                {icon}
                <div>{text}</div>
            </button>
         </a>
    )
}

export default ButtonLink;
