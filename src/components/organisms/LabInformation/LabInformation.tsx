import Paragraph from "../../atoms/Paragraph/Paragraph";
import { LabInformationPropTypes } from "./LabInformationPropTypes";

const LabInformation = ({ items }: LabInformationPropTypes) => {
    return (
        <div className="labInformationContainer" id="labInfo">
            {
                items.map((item, index) => (
                    <div key={index} className="labInformationItem">
                        <h4>{item.title}</h4>
                        <Paragraph textContent={item.description}/>
                    </div>
                ))
            }
        </div>
    );
}

export default LabInformation;
