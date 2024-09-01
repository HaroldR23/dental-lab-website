import { Modal } from "antd";
import CreateProductForm from "../../molecules/CreateProductForm/CreateProductForm";
import { useState } from "react";
import { ProductModel } from "../../../models/ProductModel";
import Button from "../../atoms/Button/Button";
import { CrateProductModalPropTypes } from "./CreateProductModalPropTypes";
import { useProductContext } from "../../../hooks/useProductContext";

const CreateProductModal = ({ isModalOpen, handleClose }: CrateProductModalPropTypes) => {
  const { createProduct } = useProductContext();

  const [form, setForm] = useState<ProductModel>({ name: "", price: [{description: "cada_diente", price: ""}] });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(typeof(e) === "string") setForm({ ...form, price: [{...form.price[0], description: e}]});
    else if(e.target.name === "price") setForm({ ...form,  price: [{...form.price[0], price: e.target.value}]});
    else setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSaveClick = () => {
    createProduct(form);
    handleClose();
  };

  return (
    <Modal onCancel={handleClose} open={isModalOpen} footer={
      [
        <Button className="createButton" textContent={"Guardar"} onClick={handleSaveClick} />,
        <Button className="cancelButton" textContent={"Cancelar"} onClick={handleClose} />
      ]
    }>
      <CreateProductForm onChange={handleChange} />
            
    </Modal>
  );
};

export default CreateProductModal;
