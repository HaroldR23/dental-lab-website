import { createAppointmentService, getAllAppointmentsService } from "./appointmentServices";

jest.mock("../constants/commonConstants", () => ({
  API_URL: "http://localhost:3000/"
}));

describe("getAllAppointmentsService", () => {
  it("should return a list of appointments", async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve([
          {
            id: "1",
            date: "2022-01-01",
            time: "10:00",
            patient_name: "Harold Rodriguez",
            patient_email: "harol@email.com"
          },
          {
            id: "2",
            date: "2022-01-02",
            time: "11:00",
            patient_name: "Nicolas Martinez",
            patient_email: "nicolas@email.com"
          }]),
      })) as jest.Mock;

    const response = await getAllAppointmentsService();
    expect(response).toEqual([
      {
        id: "1",
        date: "2022-01-01",
        time: "10:00",
        patientName: "Harold Rodriguez",
        patientEmail: "harol@email.com"
      },
      {
        id: "2",
        date: "2022-01-02",
        time: "11:00",
        patientName: "Nicolas Martinez",
        patientEmail: "nicolas@email.com"
      },
    ]);
  });

  it("should throw an error", async () => {
    global.fetch = jest.fn(() => Promise.reject("Error")) as jest.Mock;
    try {
      await getAllAppointmentsService();
    } catch (error) {
      expect(error).toEqual("Error");
    }
  });
});

describe("createAppointmentService", () => {
  it("should create an appointment and return undefined", async () => {
    global.fetch = jest.fn(() => Promise.resolve()) as jest.Mock;
    const appointment = {
      date: "2022-01-01",
      time: "10:00",
      patientName: "Harold Rodriguez",
      patientEmail: "harol@email.com",
      patientPhone: "123123123"
    };
    const response = await createAppointmentService(appointment);
    expect(response).toBeUndefined();
  });
  it("should throw an error", async () => {
    global.fetch = jest.fn(() => Promise.reject("Error")) as jest.Mock;
    const appointment = {
      date: "2022-01-01",
      time: "10:00",
      patientName: "Harold Rodriguez",
      patientEmail: "harol@email.com",
      patientPhone: "123123123"
    };
    try {
      await createAppointmentService(appointment);
    } catch (error) {
      expect(error).toEqual("Error");
    }
  });
});
