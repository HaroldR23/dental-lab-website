import { ReactElement } from "react"

export interface ButtonLinkPropTypes {
    text: string
    icon: ReactElement
    disabled?: boolean
    ref_path?: string
    onClick?: () => void
}
