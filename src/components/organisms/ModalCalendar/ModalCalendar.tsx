import { Modal, Calendar } from "antd";
import { ModalPropTypes } from "./ModalCalendarPropTypes";
import { useAppointmentContext } from "../../../hooks/useAppointmentContext";
import { AppointmentModel } from "../../../models/AppointmentModel";
import type { Dayjs } from "dayjs";
import type { CalendarProps } from "antd";
import { groupByDate } from "../../../utils/groupByDate";


const ModalCalendar = ({ isOpen, onClose }: ModalPropTypes) => {
    const { appointments } = useAppointmentContext();
    const groupedDates = groupByDate(appointments);
    
    const cellRender: CalendarProps<Dayjs>["cellRender"] = (current, info) => {
        const currentDate = current.format("DD/MM/YYYY");
        const currentAppointments = groupedDates && groupedDates[currentDate];
        if (info.type === "date") {
            return (
                    <div className="listContainer">
                        {currentAppointments?.map((appointment: AppointmentModel) => (
                            <div key={appointment.id}>
                                {appointment.time}
                            </div>
                        ))}
                    </div>
            )
        } else return info.originNode;
    };

    return (
        <Modal
            data-testid="modal-calendar"
            open={isOpen}
            onCancel={onClose}
            footer={null}
            width="50%"
            centered
        >
            <div data-testid="calendar">
                <Calendar
                    fullscreen={false}
                    cellRender={cellRender}
                    className="calendarContainer"
                    mode="month"
                />
            </div>
        </Modal>
    )
}

export default ModalCalendar;
