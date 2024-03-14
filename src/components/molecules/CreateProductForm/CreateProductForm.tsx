import { Input } from "antd"
import { CreateProductFormPropTypes } from "./CreateProductFormPropTypes";

const CreateProductForm = ({ onChange }: CreateProductFormPropTypes) => {
    return(
        <form className="createProductForm">
            <Input 
                placeholder="Nombre del producto" 
                onChange={onChange}
                name="name"
                type="text"
            />
            <Input 
                placeholder="Precio del producto" 
                onChange={onChange}
                name="price"
                type="number"
            />
        </form>
    );
};

export default CreateProductForm;
