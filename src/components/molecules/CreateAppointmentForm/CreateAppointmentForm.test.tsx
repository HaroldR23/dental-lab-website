import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CreateAppointmentForm from "./CreateAppointmentForm";
import { PHOTO_FORM } from "../../../constants/appointmentConstants";
import { useMediaQuery } from "react-responsive";

jest.mock("react-responsive", () => ({
  useMediaQuery: jest.fn(),
}));


describe("CreateAppointmentForm", () => {
  const mockHandleChange = jest.fn();
  const mockHandleClick = jest.fn().prototype.requestSubmit = jest.fn();  
  const mockUseMediaQuery = useMediaQuery as jest.Mock;

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

  it("should call handleChange when any input value changes", () => {
    render(
      <CreateAppointmentForm 
        handleChange={mockHandleChange} 
        handleClick={mockHandleClick} 
        disabledSelect={false} 
        errors={{}} 
      />);
    const inputs = screen.queryAllByRole("textbox");
    fireEvent.change(inputs[0], { target: { value: "Harold Rodriguez" } });
    fireEvent.change(inputs[1], { target: { value: "harold@example.com" } });
    fireEvent.change(inputs[2], { target: { value: "1234567890" } });

    expect(mockHandleChange).toHaveBeenCalledTimes(3);
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

  it("should render error messages when there are errors", () => {
    const errors = {
      patientName: "Name is required",
      patientEmail: "Email is invalid",
      patientPhone: "Phone number is invalid",
      time: "Time is required",
    };
    render(
      <CreateAppointmentForm 
        handleChange={mockHandleChange} 
        handleClick={mockHandleClick} 
        disabledSelect={false} 
        errors={errors} 
      />
    );
    expect(screen.getByText(errors.patientName)).toBeInTheDocument();
    expect(screen.getByText(errors.patientEmail)).toBeInTheDocument();
    expect(screen.getByText(errors.patientPhone)).toBeInTheDocument();
    expect(screen.getByText(errors.time)).toBeInTheDocument();
  });

  it("should render heading and image on large screens", () => {
    mockUseMediaQuery.mockReturnValue(false);
    render(
      <CreateAppointmentForm 
        handleChange={mockHandleChange} 
        handleClick={mockHandleClick} 
        disabledSelect={false} 
        errors={{}} 
      />);
    expect(screen.getByText("Agendar Cita")).toBeInTheDocument();
    expect(screen.getByRole("img")).toHaveAttribute("src", PHOTO_FORM);
  });

  it("should not render heading and image on small screens", () => {
    mockUseMediaQuery.mockReturnValue(true);
    render(
      <CreateAppointmentForm 
        handleChange={mockHandleChange} 
        handleClick={mockHandleClick} 
        disabledSelect={false} 
        errors={{}} 
      />
    );
    expect(screen.queryByText("Agendar Cita")).not.toBeInTheDocument();
    expect(screen.queryByRole("img")).not.toBeInTheDocument();
  });
});