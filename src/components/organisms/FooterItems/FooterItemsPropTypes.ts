import { ReactElement } from "react";

export interface FooterChildType {
    icon: ReactElement
    description: string
}

export interface FooterItemType {
    children: FooterChildType[]
    title: string
}

export interface FooterItemsPropTypes {
    items: FooterItemType[]
}
