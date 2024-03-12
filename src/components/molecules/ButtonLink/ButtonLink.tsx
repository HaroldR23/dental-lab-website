import { ButtonLinkPropTypes } from "./ButtonLinkPropTypes";

const ButtonLink = ({ text, icon }: ButtonLinkPropTypes) => {
    return (
            <button className="buttonLink">
                {icon}
                <div>{text}</div>
            </button>
    )
}

export default ButtonLink;
