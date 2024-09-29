import { ConfigProvider, Modal } from "antd";
import CreateProductForm from "../../molecules/CreateProductForm/CreateProductForm";
import { useState } from "react";
import { ProductModel } from "../../../models/ProductModel";
import Button from "../../atoms/Button/Button";
import { CrateProductModalPropTypes } from "./CreateProductModalPropTypes";
import { useProductContext } from "../../../hooks/useProductContext";
import { NAME_PRODUCT_INPUT_ERROR_MESSAGE, PRICE_INPUT_ERROR_MESSAGE } from "../../../constants/productConstants";

const CreateProductModal = ({ isModalOpen, handleClose }: CrateProductModalPropTypes) => {
  const { createProduct } = useProductContext();

  const [form, setForm] = useState<ProductModel>({ name: "", price: [{description: "cada_diente", price: ""}] });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(typeof(e) === "string") setForm({ ...form, price: [{...form.price[0], description: e}]});
    else if(e.target.name === "price") setForm({ ...form,  price: [{...form.price[0], price: e.target.value}]});
    else setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [errors, setErrors] = useState({
    name: "",
    price: ""
  });
  
  const validate = () => {
    const newErrors = {
      name: form.name ? "" : NAME_PRODUCT_INPUT_ERROR_MESSAGE,
      price: form.price ? "" : PRICE_INPUT_ERROR_MESSAGE
    };
    setErrors(newErrors);
    return Object.values(newErrors).every(error => error === "");
  };

  const handleSaveClick = () => {
    if (validate()) {
      createProduct(form);
      handleClose();
    }
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#b2dafa",
          }
        }
      }}
    >
      <Modal data-testid="modal" className="modalContainer" onCancel={handleClose} open={isModalOpen} footer={
        [
          <Button className="createButton" textContent={"Guardar"} onClick={handleSaveClick} />,
          <Button className="cancelButton" textContent={"Cancelar"} onClick={handleClose} />
        ]
      }>
        <CreateProductForm 
          onChange={handleChange} 
          errors={errors}
        />
      </Modal>
    </ConfigProvider>
  );
};

export default CreateProductModal;
