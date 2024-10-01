/* eslint-disable @typescript-eslint/no-explicit-any */
import {  } from "antd";
import type { Dayjs } from "dayjs";
import { AppointmentModel } from "../../../../models/AppointmentModel";


export const cellRender = (current: Dayjs, info: any, groupedDates?: Record<string, AppointmentModel[]>) => {
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
