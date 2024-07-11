/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_URL } from "../constants/productConstants";
import { AppointmentModel } from "../models/AppointmentModel";

export const getAllAppointmentsService = async () => {
    try {
        const response = await fetch(`${API_URL}appointments`, {method: "GET"});
        const data = await response.json();

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
}


export const createAppointmentService = async (appointment: AppointmentModel) => {
    try {
        await fetch(`${API_URL}appointments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                date: appointment.date,
                time: appointment.time,
                patient_name: appointment.patientName,
                patient_email: appointment.patientEmail
            }),
        });
    } catch (error: any) {
        throw new Error(error);
    }
}
