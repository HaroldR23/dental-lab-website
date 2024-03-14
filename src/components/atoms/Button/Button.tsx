import { ButtonPropTypes } from "./ButtonPropTypes";

const Button = ({
    textContent, 
    onClick, 
}: ButtonPropTypes) => {
    return (
        <button className="button" onClick={onClick}>
            {textContent}
        </button>
    )
}

export default Button;
