import { groupByDate } from "../groupByDate";
import { AppointmentModel } from "../../models/AppointmentModel";

describe("groupByDate", () => {
    it("should return an empty object when appointments array is null", () => {
        const result = groupByDate(null);
        expect(result).toEqual(undefined);
    });

    it("should group appointments by date", () => {
        const appointments: AppointmentModel[] = [
            {
              id: "1",
              time: "10:00",
              date: "2022-01-01",
              patientName: "John Doe",
              patientEmail: "johndoe@example.com"
            },
            {
              id: "2",
              time: "11:00",
              date: "2022-01-01",
              patientName: "Jane Smith",
              patientEmail: "janesmith@example.com"
            },
            {
                id: "3",
                time: "12:00",
                date: "2022-01-02",
                patientName: "Alice Johnson",
                patientEmail: "alice@example.com"
              },
          ];

        const result = groupByDate(appointments);

        expect(result).toEqual({
            "2022-01-01": [
                { 
                    id: "1", 
                    date: "2022-01-01", 
                    patientName: "John Doe",
                    patientEmail: "johndoe@example.com",
                    time: "10:00"
                },
                { 
                    id: "2", 
                    date: "2022-01-01", 
                    patientName: "Jane Smith",
                    patientEmail: "janesmith@example.com",
                    time: "11:00"
                },
            ],
            "2022-01-02": [
                { 
                    id: "3", 
                    date: "2022-01-02", 
                    patientName: "Alice Johnson",
                    patientEmail: "alice@example.com",
                    time: "12:00"
                },
            ],
        });
    });

    it("should return an empty object when appointments array is empty", () => {
        const appointments: AppointmentModel[] = [];

        const result = groupByDate(appointments);

        expect(result).toEqual({});
    });
});