import { InformationContentPropTypes } from "./InformationContentPropTypes";

const InformationContent = ({ title, children, infoClassName }: InformationContentPropTypes) => {
  return (
    <div className={infoClassName}>
      <h4>{title}</h4>
      {children.map((child, index) => (
        <div role="listitem" key={index}>
          {child}
        </div>
      ))}
    </div>
  );
};

export default InformationContent;
