import { Modal, Calendar, ConfigProvider } from "antd";
import { ModalPropTypes } from "./ModalCalendarPropTypes";
import { useAppointmentContext } from "../../../hooks/useAppointmentContext";
import { AppointmentModel } from "../../../models/AppointmentModel";
import type { Dayjs } from "dayjs";
// import type { CalendarProps } from "antd";
import { groupByDate } from "../../../utils/groupByDate";
import CreateAppointmentForm from "../../molecules/CreateAppointmentForm/CreateAppointmentForm";
import { useEffect, useState } from "react";
// import { EMAIL_INPUT_ERROR_MESSAGE, EMAIL_VALIDATION_ERROR_MESSAGE, NAME_INPUT_ERROR_MESSAGE, TIME_INPUT_ERROR_MESSAGE } from "../../../constants/appointmentConstants";
import { useMediaQuery } from "react-responsive";
import { cellRender } from "./utils/cellRender";
import { validate } from "./utils/validate";


const ModalCalendar = ({ isOpen, onClose }: ModalPropTypes) => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 600px)" });
  const { appointments, createAppointment } = useAppointmentContext();
  const initialForm: AppointmentModel = {
    patientName: "",
    patientEmail: "",
    time: "",
    date: "",
    patientPhone: ""
  };

  const [form, setForm] = useState<AppointmentModel>(initialForm);
  const [disabledSelect, setDisabledSelect] = useState<boolean>(true);
  const groupedDates = groupByDate(appointments);

  const [errors, setErrors] = useState({
    patientName: "",
    patientEmail: "",
    time: "",
    patientPhone: ""
  });

  useEffect(() => {
    if (form.date !== "") {
      setDisabledSelect(false);
    }
  }, [form.date]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof e === "string") {
      setForm({
        ...form,
        time: e
      });
      return;
    }
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
    
  }

  const handleSelect = (date: Dayjs) => {
    setForm({
      ...form,
      date: date.format("DD/MM/YYYY")
    });
  }

  const handleClick = () => {
    if (validate(form, setErrors)) {
      createAppointment(form);
      onClose();
    }
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Modal: {
            contentBg: "#b2dafa",
          }
        }
      }}
    >
      <Modal
        data-testid="modal-calendar"
        open={isOpen}
        onCancel={onClose}
        footer={null}
        width={isSmallScreen ? "90%" : "70%"}
        centered
      >
        <CreateAppointmentForm 
          handleClick={handleClick}
          handleChange={handleChange} 
          disabledSelect={disabledSelect}
          errors={errors}
        />
        <div 
          data-testid="calendar"
          className="calendarContainer"
        >
          <Calendar
            fullscreen={false}
            cellRender={isSmallScreen ? undefined : (current, info) => cellRender(current, info, groupedDates)}
            mode="month"
            onSelect={handleSelect}    
          />
        </div>
        {isSmallScreen && <h2>Agendar Cita</h2>}
      </Modal>
    </ConfigProvider>
  )
}

export default ModalCalendar;
