import { CopyrightPropTypes } from "./CopyrightPropTypes";

const Copyright = ({ textContent, logoUrl }: CopyrightPropTypes) => {
    return (
        <div className="copyrightContainer">
            <img src={logoUrl} alt="logo" />
            <p>{textContent}</p>
        </div>
    );
};

export default Copyright;
