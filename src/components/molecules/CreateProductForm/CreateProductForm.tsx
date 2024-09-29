import { Input, Select } from "antd"
import { CreateProductFormPropTypes } from "./CreateProductFormPropTypes";
import { SELECT_OPTIONS } from "../../../constants/productConstants";

const CreateProductForm = ({ onChange, errors }: CreateProductFormPropTypes) => {
  return (
    <form className="createProductForm" data-testid="createProductForm">
      <div className="input">
        <Input 
          placeholder="Nombre del producto" 
          onChange={onChange}
          name="name"
          type="text"
          status={errors.name ? "error" : undefined}
        />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div className="input">
        <Select 
          placeholder="Seleccione una opción"
          status={errors.price ? "error" : undefined}
          options={SELECT_OPTIONS}
          onChange={onChange}
        />
      </div>
      <div className="input">
        <Input 
          type="text" 
          status={errors.price ? "error" : undefined}
          placeholder="Precio" 
          onChange={onChange}
          name="price"
        />
        {errors.price && <span className="error">{errors.price}</span>}
      </div>
    </form>
  )
};

export default CreateProductForm;
