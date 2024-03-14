import { Input, Select } from "antd"
import { CreateProductFormPropTypes } from "./CreateProductFormPropTypes";
import { useState } from "react";
import Button from "../../atoms/Button/Button";
import { SELECT_OPTIONS } from "../../../constants/productConstants";

const CreateProductForm = ({ onChange }: CreateProductFormPropTypes) => {
    const priceInput: React.ReactNode = (
        <div>
            <Select 
                options={SELECT_OPTIONS}
                onChange={onChange}
            />
            <Input
                placeholder="Precio del producto" 
                onChange={onChange}
                name="price"
                type="number"
            />
        </div>
    );
    const [priceInputs, setPriceInputs] = useState<React.ReactNode[]>([priceInput]);
    const handleClick = () => {
        setPriceInputs([...priceInputs, priceInput]);
    };

    return(
        <form className="createProductForm">
            <Input 
                placeholder="Nombre del producto" 
                onChange={onChange}
                name="name"
                type="text"
            />
            {priceInputs.map((input, index) => (
                <div key={index}>
                    {input}
                </div>
            ))}
            <Button onClick={handleClick} textContent="Añadir tipo de precio" />
        </form>
    );
};

export default CreateProductForm;
