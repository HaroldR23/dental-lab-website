import { Collapse, CollapseProps } from "antd";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import { LabInformationPropTypes } from "./LabInformationPropTypes";
import { CaretRightOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const LabInformation = ({ items }: LabInformationPropTypes) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const collapseItems : CollapseProps["items"] = items.map((item, index) => ({
    key: index.toString(),
    label: item.title,
    children: <Paragraph textContent={item.description}/>
  }));

  return (
    <Collapse
      size={isSmallScreen ? "middle" :"large"}
      expandIcon={() => <CaretRightOutlined />}
      expandIconPosition="start"
      accordion
      items={collapseItems}
    />
  );
}

export default LabInformation;
