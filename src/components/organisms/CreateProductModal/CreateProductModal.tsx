import { Modal } from "antd";
import CreateProductForm from "../../molecules/CreateProductForm/CreateProductForm";
import { useState } from "react";
import { ProductModel } from "../../../models/ProductModel";
import Button from "../../atoms/Button/Button";
import { CrateProductModalPropTypes } from "./CreateProductModalPropTypes";
import { useProductContext } from "../../../hooks/useProductContext";

const CreateProductModal = ({ isModalOpen, handleClose }: CrateProductModalPropTypes) => {
    const { createProduct } = useProductContext();

    const [form, setForm] = useState<ProductModel>({ name: "", price: [] });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSaveClick = () => {
        createProduct(form);
        handleClose();
    };

    return (
        <Modal open={isModalOpen} footer={
            [
                <Button textContent={"Guardar"} onClick={handleSaveClick} />,
                <Button textContent={"Cancelar"} onClick={handleClose} />
            ]
        }>
            <CreateProductForm onChange={handleChange} />
            
        </Modal>
    );
};

export default CreateProductModal;
