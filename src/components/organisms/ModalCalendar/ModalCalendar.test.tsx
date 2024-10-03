import { render, screen } from "@testing-library/react";
import ModalCalendar from "./ModalCalendar";
import { userEvent } from "@testing-library/user-event";
import { useMediaQuery } from "react-responsive";
// import { CreateAppointmentFormPropTypes } from "../../molecules/CreateAppointmentForm/CreateAppointmentFormPropTypes";
import { AppointmentContext } from "../../../contexts/AppointmentContext/AppointmentContext";
import { mockValueAppointmentContext } from "../../../constants/mockValueContext";
import { CreateAppointmentFormPropTypes } from "../../molecules/CreateAppointmentForm/CreateAppointmentFormPropTypes";

jest.mock("react-responsive", () => ({
  useMediaQuery: jest.fn(),
}));

jest.mock("./utils/validate", () => ({
  validate: jest.fn().mockReturnValue({}),
}));

jest.mock("../../molecules/CreateAppointmentForm/CreateAppointmentForm", () => (
  { disabledSelect, 
    errors, 
    handleChange, 
    handleClick 
  }: CreateAppointmentFormPropTypes) => {
  console.log("disabledSelect", disabledSelect);
  return <div>
    <input type="text" name="patientName" onChange={handleChange}/>
    <span>{errors.patientName}</span>
    <button onClick={handleClick}>Click</button>
  </div>
});
  
describe("ModalCalendar", () => {
  const user = userEvent.setup();
  const onCloseMock = jest.fn();
  const mockUseMediaQuery = useMediaQuery as jest.Mock;


  it("should render without error", () => {

    render(<ModalCalendar isOpen={true} onClose={onCloseMock} />);
    const modal = screen.getByTestId("modal-calendar");
    const calendar = screen.getByTestId("calendar");

    expect(modal).toBeDefined();
    expect(calendar).toBeDefined();
  });

  it("should call onClose when close button is clicked", async () => {

    render(<ModalCalendar isOpen={true} onClose={onCloseMock} />);

    const xButton = screen.getByRole("button", { name: "Close" });
    await user.click(xButton);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it("should not render anything when isOpen is false", () => {

    render(<ModalCalendar isOpen={false} onClose={onCloseMock} />);
    const modal = screen.queryByTestId("modal-calendar");

    const calendar = screen.queryByTestId("calendar");

    expect(modal).toBeNull();
    expect(calendar).toBeNull();
  });

  it("should close the modal when the Escape key is pressed", async () => {
    render(<ModalCalendar isOpen={true} onClose={onCloseMock} />);

    await user.keyboard("{Escape}");
  
    expect(onCloseMock).toHaveBeenCalled();
  });

  it("should render the 'Agendar Cita' heading", () => {
    mockUseMediaQuery.mockReturnValue(true);
    render(<ModalCalendar isOpen={true} onClose={onCloseMock} />);
  
    const heading = screen.getByRole("heading", { name: "Agendar Cita" });

    expect(heading).toBeDefined();
  });

  it("should call handleClick when the button is clicked", async () => {
    render(
      <AppointmentContext.Provider value={mockValueAppointmentContext}>
        <ModalCalendar isOpen={true} onClose={onCloseMock} />
      </AppointmentContext.Provider>
    );
    const button = screen.getByRole("button", { name: "Click" });
    console.log(button);
    await user.click(button);

    expect(onCloseMock).toHaveBeenCalled();
    expect(mockValueAppointmentContext.createAppointment).toHaveBeenCalled();
  });

  it("should call handleChange when the input is changed", async () => {
    jest.clearAllMocks();
    render(
      <AppointmentContext.Provider value={mockValueAppointmentContext}>
        <ModalCalendar isOpen={true} onClose={onCloseMock} />
      </AppointmentContext.Provider>
    );

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: "Click" });

    await user.type(input, "test");
    await user.click(button);

    expect(mockValueAppointmentContext.createAppointment).toHaveBeenCalledWith(
      {
        patientName: "test",
        date: "",
        patientEmail: "",
        patientPhone: "",
        time: "",
      });
  });

});