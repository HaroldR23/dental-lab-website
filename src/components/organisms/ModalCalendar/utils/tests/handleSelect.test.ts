import { AppointmentModel } from "../../../../../models/AppointmentModel";
import { handleSelect } from "../handleSelect";
import type { Dayjs } from "dayjs";

describe("handleSelect", () => {
  let setFormMock: jest.Mock;
  let formState: AppointmentModel;
  let mockDate: Dayjs;

  beforeEach(() => {
    setFormMock = jest.fn();
    formState = {
      patientName: "John Doe",
      patientEmail: "john.doe@example.com",
      patientPhone: "1234567890",
      time: "10:00 AM",
      date: "",
    };
    mockDate = {
      format: jest.fn().mockReturnValue("01/01/2023"),
    } as unknown as Dayjs;
  });

  it("should update the date field with the formatted date", () => {
    handleSelect(mockDate, setFormMock, formState);

    expect(setFormMock).toHaveBeenCalledWith({
      ...formState,
      date: "01/01/2023",
    });
    expect(mockDate.format).toHaveBeenCalledWith("DD/MM/YYYY");
  });
});