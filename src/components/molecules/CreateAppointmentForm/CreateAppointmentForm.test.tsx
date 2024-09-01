import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateAppointmentForm from "./CreateAppointmentForm";

describe("CreateAppointmentForm", () => {
  const mockHandleChange = jest.fn();
  const mockHandleClick = jest.fn().prototype.requestSubmit = jest.fn();  
  it("should render the form correctly", () => {
    render(
      <CreateAppointmentForm 
        handleChange={mockHandleChange} 
        handleClick={mockHandleClick} 
        disabledSelect={false} 
        errors={{}} 
      />);
    const inputs = screen.queryAllByRole("textbox");
    const select = screen.queryByRole("combobox");
    const button = screen.queryByRole("button");
        
    expect(inputs).toHaveLength(3);
    expect(inputs[0].getAttribute("placeholder")).toBe("Nombre");
    expect(inputs[1].getAttribute("placeholder")).toBe("Correo");
    expect(inputs[2].getAttribute("placeholder")).toBe("Celular");

    expect(select).not.toBe(null);

    expect(button).not.toBe(null);
    expect(button?.textContent).toBe("Agendar");
  });

  it("should call handleChange when any input value changes", async () => {
    render(
      <CreateAppointmentForm 
        handleChange={mockHandleChange} 
        handleClick={mockHandleClick} 
        disabledSelect={false} 
        errors={{}} 
      />);
    const input = screen.queryAllByRole("textbox")[0];
        
    fireEvent.change(input, { target: { value: "New value" } });
        
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
    expect(mockHandleChange).toHaveBeenCalledWith(expect.objectContaining({
      target: expect.objectContaining({
        value: "New value"
      })
    }));
  });

  it("should call handleClick when 'Agendar' button is clicked", () => {
    render(
      <CreateAppointmentForm 
        handleChange={mockHandleChange} 
        handleClick={mockHandleClick} 
        disabledSelect={false} 
        errors={{}} 
      />);
    const button = screen.getByRole("button");

    fireEvent.click(button);

    expect(mockHandleClick).toHaveBeenCalled();
  });

  it("should disable the select when disabledSelect prop is true", () => {
    render(
      <CreateAppointmentForm 
        handleChange={mockHandleChange} 
        handleClick={mockHandleClick} 
        disabledSelect={true} 
        errors={{}} 
      />);
        
    const select = screen.getByRole("combobox");

    expect(select).toBeDisabled();
  });

  it("should display error messages correctly", () => {
    const errors = {
      patientName: "",
      patientEmail: "",
      time: "Time error",
      patientPhone: "Patient phone error"
    };
    render(
      <CreateAppointmentForm 
        handleChange={mockHandleChange} 
        handleClick={mockHandleClick} 
        disabledSelect={true} 
        errors={errors} 
      />);
        
    expect(screen.getByText("Time error")).toBeInTheDocument();
    expect(screen.getByText("Patient phone error")).toBeInTheDocument();
  });
});