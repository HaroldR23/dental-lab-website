import { AppointmentModel } from "../../../../../models/AppointmentModel";
import { handleChange } from "..//handleChange";

describe("handleChange", () => {
  let setFormMock: jest.Mock;
  let formState: AppointmentModel;

  beforeEach(() => {
    setFormMock = jest.fn();
    formState = {
      patientName: "John Doe",
      patientEmail: "john.doe@example.com",
      patientPhone: "1234567890",
      time: "10:00 AM",
      date: "2021-01-01",
    };
  });

  it("should update the form field based on the event target name and value", () => {
    const event = {
      target: {
        name: "patientName",
        value: "Jane Doe",
      },
    } as React.ChangeEvent<HTMLInputElement>;

    handleChange(event, setFormMock, formState);

    expect(setFormMock).toHaveBeenCalledWith({
      ...formState,
      patientName: "Jane Doe",
    });
  });

  it("should update the time field when a string is passed", () => {
    const timeString = "11:00 AM";

    handleChange(timeString as unknown as React.ChangeEvent<HTMLInputElement>, setFormMock, formState);

    expect(setFormMock).toHaveBeenCalledWith({
      ...formState,
      time: timeString,
    });
  });
});