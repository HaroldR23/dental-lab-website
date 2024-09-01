import { MouseEventHandler } from "react";

export interface ButtonPropTypes {
  textContent: string
  onClick:  MouseEventHandler<HTMLButtonElement>
  className?: string
}
