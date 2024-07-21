import { useContext } from "react";
import { AppointmentContext } from "../contexts/AppointmentContext/AppointmentContext";

export const useAppointmentContext = () => {
  const context = useContext(AppointmentContext);
  if (!context) {
    throw new Error("useAppointmentContext must be used within a AppointmentContext");
  }
  return context;
};
