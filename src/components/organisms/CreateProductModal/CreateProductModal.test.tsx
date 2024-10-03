import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { mockValueProductContext } from "../../../constants/mockValueContext";
import { ProductContext } from "../../../contexts/ProductContext/ProductContext";
import CreateProductModal from "./CreateProductModal";
import { ConfigProvider } from "antd";
import userEvent from "@testing-library/user-event"; 

const mockHandleClose = jest.fn();
describe("CreateProductModal", () => {
  const user = userEvent.setup();
  beforeEach(() => {
    render(
      <ProductContext.Provider value={mockValueProductContext}>
        <ConfigProvider>
          <CreateProductModal handleClose={mockHandleClose} isModalOpen={true}/>
        </ConfigProvider>
      </ProductContext.Provider>
    );
  });
  it("should render the modal and its buttons without error", () => {
    const modal = screen.getByTestId("modal")
    const createButton = screen.getByText("Guardar")
    const cancelButton = screen.getByText("Cancelar")

    expect(modal).toBeInTheDocument();
    expect(createButton).toBeInTheDocument();
    expect(cancelButton).toBeInTheDocument();
  });

  it("should render the CreateProductForm", () => {
    const createProductForm = screen.getByTestId("createProductForm")

    expect(createProductForm).toBeInTheDocument();
  });

  it("should call handleClose when the cancel button is clicked", async () => {
    const cancelButton = screen.getByText("Cancelar");
    await user.click(cancelButton);

    expect(mockHandleClose).toHaveBeenCalled();
  });

  it("should call createProduct and close modal on valid form submission", async () => {
    const nameProductInput = screen.getByPlaceholderText("Nombre del producto");
    const priceInput = screen.getByPlaceholderText("Precio");
      

    await user.type(nameProductInput, "Product A");
    await user.type(priceInput, "100");
    const saveButton = screen.getByText("Guardar");
    await user.click(saveButton);
  
    expect(mockValueProductContext.createProduct).toHaveBeenCalledWith({
      name: "Product A",
      price: [{ description: "cada_diente", price: "100" }]
    });
  
    expect(mockHandleClose).toHaveBeenCalled();
  });
});

describe("CreateProductModal", () => {

  it("should not render the CreateProductForm", () => {
    render(
      <ProductContext.Provider value={mockValueProductContext}>
        <ConfigProvider>
          <CreateProductModal handleClose={mockHandleClose} isModalOpen={false}/>
        </ConfigProvider>
      </ProductContext.Provider>
    );
    const createProductForm = screen.queryByTestId("createProductForm")

    expect(createProductForm).not.toBeInTheDocument();
  });
});
