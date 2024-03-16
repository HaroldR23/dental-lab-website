import { FooterItemType } from "../FooterItems/FooterItemsPropTypes";

export interface FooterPropTypes {
    items: FooterItemType[]
    logoFooterUrl?: string
    logoCopyrightUrl?: string
    copyrightTextContent?: string
}
