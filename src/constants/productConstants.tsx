export const SELECT_OPTIONS = [
  { label: "Superior e inferior", value: "superior_e_inferior" }, 
  { label: "Valor individual", value: "valor_individual" },
  { label: "Cada prótesis", value: "cada_protesis" },
  { label: "De uno a tres dientes", value: "de_uno_a_tres_dientes" },
  { label: "Cada diente", value: "cada_diente" },
];
export const NAME_PRODUCT_INPUT_ERROR_MESSAGE = "Ingrese el nombre del producto";
export const PRICE_INPUT_ERROR_MESSAGE = "Ingrese el precio del producto";

export const API_URL = import.meta.env.VITE_API_URL;

console.log(API_URL, "API_URL ---<<<");
