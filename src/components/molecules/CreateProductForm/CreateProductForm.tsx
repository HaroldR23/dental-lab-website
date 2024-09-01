import { Input, Select} from "antd"
import { CreateProductFormPropTypes } from "./CreateProductFormPropTypes";
import { SELECT_OPTIONS } from "../../../constants/productConstants";

const CreateProductForm = ({ onChange }: CreateProductFormPropTypes) => {
  return (
    <form className="createProductForm">
      <Input 
        placeholder="Nombre del producto" 
        onChange={onChange}
        name="name"
        type="text"
        style={{ margin: 8, width: "50%"}}
      />
      <Select 
        placeholder="Seleccione una opción"
        style={{ margin: 8, width: "50%"}}

        options={SELECT_OPTIONS}
        onChange={onChange}
      />
      <Input 
        type="text" 
        style={{ margin: 8, width: "50%"}}

        placeholder="Precio" 
        onChange={onChange}
        name="price"
      />
    </form>
  )
};

export default CreateProductForm;
