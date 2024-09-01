import { AppointmentModel } from "../models/AppointmentModel";

export const groupByDate = (appointments: AppointmentModel[] | null) => {    
  const groupedDates = appointments?.reduce((acc: Record<string, AppointmentModel[]>, appointment: AppointmentModel) => {
    const date = appointment.date;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(appointment);
    return acc;
  }, {});

  return groupedDates;
};
