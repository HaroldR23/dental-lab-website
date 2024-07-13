import { ButtonLinkPropTypes } from "./ButtonLinkPropTypes";

const ButtonLink = ({ text, icon, disabled, ref_path, onClick }: ButtonLinkPropTypes) => {
    return (
        <a href={ref_path}>
            <button className="buttonLink" disabled={disabled} onClick={onClick}>
                {icon}
                <div>{text}</div>
            </button>
         </a>
    )
}

export default ButtonLink;
