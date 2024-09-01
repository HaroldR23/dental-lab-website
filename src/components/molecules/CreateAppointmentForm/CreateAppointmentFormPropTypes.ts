import { MouseEventHandler } from "react";

export interface CreateAppointmentFormPropTypes {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClick:  MouseEventHandler<HTMLButtonElement>;
  disabledSelect: boolean;
  errors: {[key: string]: string};
}
