import { EMAIL_INPUT_ERROR_MESSAGE, EMAIL_VALIDATION_ERROR_MESSAGE, NAME_INPUT_ERROR_MESSAGE, TIME_INPUT_ERROR_MESSAGE } from "../../../../constants/appointmentConstants";
import { AppointmentModel } from "../../../../models/AppointmentModel";

interface ErrorProps {
  patientName: string,
  patientEmail: string,
  time: string,
  patientPhone: string
}

export const validate = (form: AppointmentModel, setErrors: React.Dispatch<React.SetStateAction<ErrorProps>>) => {
  const newErrors = {
    patientName: form.patientName ? "" : NAME_INPUT_ERROR_MESSAGE,
    patientEmail: form.patientEmail ? (/\S+@\S+\.\S+/.test(form.patientEmail) ? "" : EMAIL_VALIDATION_ERROR_MESSAGE) : EMAIL_INPUT_ERROR_MESSAGE,
    time: form.time ? "" : TIME_INPUT_ERROR_MESSAGE,
    patientPhone: form.patientPhone ? "" : "Phone number is required"
  };
  setErrors(newErrors);
  return Object.values(newErrors).every(error => error === "");
};
