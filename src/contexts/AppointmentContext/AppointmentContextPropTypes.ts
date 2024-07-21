import { AppointmentModel } from "../../models/AppointmentModel";

export interface AppointmentContextType {
    appointments: AppointmentModel[] | null;
    createAppointment: (appointment: AppointmentModel) => void;
    setAppointments: (appointments: AppointmentModel[]) => void;
    error: string | null | unknown;
    loading: boolean;
}

export interface AppointmentProviderType {
    children: React.ReactNode
}
