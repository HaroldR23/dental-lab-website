import { AppointmentModel } from "../../../../models/AppointmentModel";

export const handleChange = (e: React.ChangeEvent<HTMLInputElement>, setForm: React.Dispatch<React.SetStateAction<AppointmentModel>>, form: AppointmentModel) => {
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
