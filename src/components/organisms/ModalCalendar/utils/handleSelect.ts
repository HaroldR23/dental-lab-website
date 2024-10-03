import { AppointmentModel } from "../../../../models/AppointmentModel";
import type { Dayjs } from "dayjs";

export const handleSelect = (date: Dayjs, setForm: React.Dispatch<React.SetStateAction<AppointmentModel>>, form: AppointmentModel) => {
  setForm({
    ...form,
    date: date.format("DD/MM/YYYY")
  });
}