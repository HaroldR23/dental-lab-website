import { createContext } from "react";
import { AppointmentContextType } from "./AppointmentContextPropTypes";

export const AppointmentContext = createContext<AppointmentContextType>({
    appointments: [],
    createAppointment: () => {},
    setAppointments: () => {},
    error: null,
    loading: true
});
