import { AppointmentContext } from "./AppointmentContext";
import { useEffect, useState } from "react";
import { createAppointmentService, getAllAppointmentsService } from "../../services/appointmentServices";
import { AppointmentProviderType } from "./AppointmentContextPropTypes";
import { AppointmentModel } from "../../models/AppointmentModel";

const AppointmentProvider = ({ children }: AppointmentProviderType) => {
  const [appointments, setAppointments] = useState<AppointmentModel[] |  null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | unknown>(null);
  
  const resetState = () => {
    setError(null);
    setLoading(true);
  }
  
  const createAppointment = async (appointment: AppointmentModel) => {
    await createAppointmentService(appointment);
    setAppointments([...appointments || [], appointment]);
  };

  useEffect(() => {
    const getAllAppointments = async () => {
      resetState();
    
      try {
        const appointments = await getAllAppointmentsService();
        setAppointments(appointments || []);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    
    };
    getAllAppointments()
  }, []);

  return (
    <AppointmentContext.Provider value={{ appointments, createAppointment, setAppointments, error, loading }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export default AppointmentProvider;
