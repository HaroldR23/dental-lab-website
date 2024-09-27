import { ReactElement } from "react"

export interface ButtonLinkPropTypes {
  text: string
  icon: ReactElement
  ref_path?: string
  onClick?: () => void
}
