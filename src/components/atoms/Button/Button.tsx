import { ButtonPropTypes } from "./ButtonPropTypes";

const Button = ({
  textContent, 
  onClick,
  className
}: ButtonPropTypes) => {
  return (
    <button className={className} onClick={onClick}>
      {textContent}
    </button>
  )
}

export default Button;
