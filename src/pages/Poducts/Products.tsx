import { useState } from "react";
import Button from "../../components/atoms/Button/Button";
import ProductCardList from "../../components/organisms/ProductCardList/ProductCardList";
import CreateProductModal from "../../components/organisms/CreateProductModal/CreateProductModal";
import PageTemplate from "../../components/templates/PageTemplate";


const Products = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const handleClose = () => setIsOpenModal(false);
    const handleOpen = () => setIsOpenModal(true);
    const ProductsBody = () => {
        return (
            <div className="productsBodyContainer">
                <div className="buttonHeaderContainer">
                    <h1>Products</h1>
                    <Button
                        className="createButton"
                        textContent="Crear producto" 
                        onClick={handleOpen}
                    />
                </div>
                <ProductCardList />
                <CreateProductModal
                    isModalOpen={isOpenModal} 
                    handleClose={handleClose}
                />
            </div>
        );
    };

    return (
        <PageTemplate
            body={<ProductsBody />}
        />
    );
};

export default Products;
