import { EMAIL_INPUT_ERROR_MESSAGE, EMAIL_VALIDATION_ERROR_MESSAGE, NAME_INPUT_ERROR_MESSAGE, TIME_INPUT_ERROR_MESSAGE } from "../../../../../constants/appointmentConstants";
import { AppointmentModel } from "../../../../../models/AppointmentModel";
import { validate } from "../validate";

describe("validate", () => {
  const setErrorsMock = jest.fn();

  const form: AppointmentModel = {
    patientName: "John Doe",
    patientEmail: "john.doe@example.com",
    time: "10:00 AM",
    patientPhone: "1234567890",
    date: "2021-10-10"
  };

  it("should return true and set no errors for valid form data", () => {
    const result = validate(form, setErrorsMock);

    expect(result).toBe(true);
    expect(setErrorsMock).toHaveBeenCalledWith({
      patientName: "",
      patientEmail: "",
      time: "",
      patientPhone: ""
    });
  });

  it("should set error for missing patient name", () => {
    const result = validate({...form, patientName: ""}, setErrorsMock);

    expect(result).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith({
      patientName: NAME_INPUT_ERROR_MESSAGE,
      patientEmail: "",
      time: "",
      patientPhone: ""
    });
  });

  it("should set error for invalid email format", () => {
    const result = validate({...form, patientEmail: "invalida_mail"}, setErrorsMock);

    expect(result).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith({
      patientName: "",
      patientEmail: EMAIL_VALIDATION_ERROR_MESSAGE,
      time: "",
      patientPhone: ""
    });
  });

  it("should set error for missing email", () => {
    const result = validate({...form, patientEmail: ""}, setErrorsMock);

    expect(result).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith({
      patientName: "",
      patientEmail: EMAIL_INPUT_ERROR_MESSAGE,
      time: "",
      patientPhone: ""
    });
  });

  it("should set error for missing time", () => {
    const result = validate({...form, time: ""}, setErrorsMock);

    expect(result).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith({
      patientName: "",
      patientEmail: "",
      time: TIME_INPUT_ERROR_MESSAGE,
      patientPhone: ""
    });
  });

  it("should set error for missing phone number", () => {
    const result = validate({...form, patientPhone: ""}, setErrorsMock);

    expect(result).toBe(false);
    expect(setErrorsMock).toHaveBeenCalledWith({
      patientName: "",
      patientEmail: "",
      time: "",
      patientPhone: "Phone number is required"
    });
  });
});