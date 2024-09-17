/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "../constants/commonConstants";
import { AppointmentModel } from "../models/AppointmentModel";
import { RequestBody, getFetchMethod, postFetchMethod } from "./utils/httpClient";

export const getAllAppointmentsService = async () => {
  try {
    const data = await getFetchMethod(`${API_URL}appointments`);
    const dataResponse: AppointmentModel[] = data.map((appointment: any) => (
      {
        id: appointment.id,
        date: appointment.date,
        time: appointment.time,
        patientName: appointment.patient_name,
        patientEmail: appointment.patient_email
      }
    ));

    return dataResponse;

  } catch (error: any) {
    throw new Error(error);
  }
};


export const createAppointmentService = async (appointment: AppointmentModel) => {
  try {
    const body: RequestBody = {
      date: appointment.date,
      time: appointment.time,
      patient_name: appointment.patientName,
      patient_email: appointment.patientEmail,
      patient_phone: appointment.patientPhone
    };

    await postFetchMethod(`${API_URL}appointments`, body);

  } catch (error: any) {
    throw new Error(error);
  }
};
