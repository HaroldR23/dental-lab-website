import { ButtonLinkPropTypes } from "./ButtonLinkPropTypes";

const ButtonLink = ({ text, icon }: ButtonLinkPropTypes) => {
    return (
            <button className="buttonLink">
                {icon}
                <h4>{text}</h4>
            </button>
    )
}

export default ButtonLink;
