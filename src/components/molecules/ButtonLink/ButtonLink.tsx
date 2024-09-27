import { ButtonLinkPropTypes } from "./ButtonLinkPropTypes";

const ButtonLink = ({ text, icon, ref_path, onClick }: ButtonLinkPropTypes) => {
  return (
    <a href={ref_path} className="buttonLink" onClick={onClick} >
      {icon}
      <div>{text}</div>
    </a>
  )
}

export default ButtonLink;
