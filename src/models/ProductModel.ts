export type descriptionType = 
    "superior_e_inferior" | 
    "valor_individual" | 
    "cada_protesis" | 
    "de_uno_a_tres_dientes" |
    "cada_diente"; 

export interface PriceType {
    price: string
    description: descriptionType
}

export interface ProductModel {
    id?: string
    name: string
    price: PriceType[]
    imageUrl?: string
}
