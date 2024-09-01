import { ParagraphPropTypes } from "./ParagraphPropTypes";

const Paragraph = ({ textContent }: ParagraphPropTypes) => {
  return (
    <p role="paragraph" className="paragraph">{textContent}</p>
  )
};

export default Paragraph;
