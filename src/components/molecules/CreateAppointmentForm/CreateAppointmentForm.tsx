import { Input, Select } from "antd";
import { CreateAppointmentFormPropTypes } from "./CreateAppointmentFormPropTypes";
import { PHOTO_FORM, SELECT_TIME_OPTIONS } from "../../../constants/appointmentConstants";
import Button from "../../atoms/Button/Button";

const CreateAppointmentForm = ({ 
  handleChange, 
  handleClick, 
  disabledSelect, 
  errors
}: CreateAppointmentFormPropTypes) => {
  return (
    <div className="createAppointmentForm">
      <h2>Agendar Cita</h2>
      <div className="inputsContainer">
        <div>
          <Input
            status={errors.patientName ? "error" : undefined}
            placeholder="Nombre"
            type="text"
            name="patientName"
            onChange={handleChange}
          />
          {errors.patientName && <span className="error">{errors.patientName}</span>}
        </div>
        <div>
          <Input
            status={errors.patientEmail ? "error" : undefined}
            placeholder="Correo"
            type="text"
            name="patientEmail"
            onChange={handleChange}
          />
          {errors.patientEmail && <span className="error">{errors.patientEmail}</span>}
        </div>
        <div>
          <Input
            status={errors.patientPhone ? "error" : undefined}
            placeholder="Celular"
            type="text"
            name="patientPhone"
            onChange={handleChange}
          />
          {errors.patientPhone && <span className="error">{errors.patientPhone}</span>}
        </div>
        <div>
          <Select
            status={errors.time ? "error" : undefined}
            placeholder="Hora"
            disabled={disabledSelect}
            className="select"
            onChange={handleChange}
            options={SELECT_TIME_OPTIONS}
          />
          {errors.time && <span className="error">{errors.time}</span>}
        </div>
        <Button  onClick={handleClick} textContent="Agendar" className="scheduleButton"/>
      </div>
      <img src={PHOTO_FORM} width="250px"/>
    </div>
  );
}

export default CreateAppointmentForm;
