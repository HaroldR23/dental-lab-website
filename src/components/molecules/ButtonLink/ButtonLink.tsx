import { Link } from "react-router-dom";
import { ButtonLinkPropTypes } from "./ButtonLinkPropTypes";

const ButtonLink = ({ text, icon, disabled }: ButtonLinkPropTypes) => {
    return (
        <Link to="/products">
            <button className="buttonLink" disabled={disabled}>
                {icon}
                <div>{text}</div>
            </button>
        </Link>
    )
}

export default ButtonLink;
