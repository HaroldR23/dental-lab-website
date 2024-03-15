import { ProductModel } from "../models/ProductModel";

const BASE_URL = 'https://i.imgur.com/';
export const SELECT_OPTIONS = [
    { label: "Superior e inferior", value: "superior_e_inferior" }, 
    { label: "Valor individual", value: "valor_individual" },
    { label: "Cada prótesis", value: "cada_protesis" },
    { label: "De uno a tres dientes", value: "de_uno_a_tres_dientes" },
    { label: "Cada diente", value: "cada_diente" },
];

export const RAPIDAPI_URL = "https://json-store.p.rapidapi.com";
export const API_KEY = import.meta.env.VITE_API_KEY;


export const PRODUCTS: ProductModel[] = [
    {
        name: 'RETENEDORES ESTÉTICOS',
        price: [{description: "superior_e_inferior", price: "220000"}, {description: "valor_individual", price: "130000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'RETENEDORES TIPO CONTINUOS',
        price: [{description: "superior_e_inferior", price: "220000"}, {description: "valor_individual", price: "130000"}],
        imageUrl: `${BASE_URL}x2QAxvE.jpg`
    },
    {
        name: 'RETENEDORES TIPO HAWLEY',
        price: [{description: "superior_e_inferior", price: "220000"}, {description: "valor_individual", price: "130000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'BLANQUEAMIENTO DENTAL EN FUNDAS',
        price: [{description: "valor_individual", price: "250000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'EN ACRÍLICO VR-1 Y DIENTES BIODENT',
        price: [{description: "cada_protesis", price: "450000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'EN ACRÍLICO ALTO IMPACTO Y DIENTES SUPER-C',
        price: [{description: "cada_protesis", price: "550000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'EN ACRÍLICO ALTO IMPACTO Y DIENTES DURATONE',
        price: [{description: "cada_protesis", price: "600000" }],
        imageUrl: `${BASE_URL}np4aZN5.jpg`
    },
    {
        name: 'ACKERS FLEXIBLES',
        price: [{description: "de_uno_a_tres_dientes", price: "600000"}],
        imageUrl:`${BASE_URL}ObTfUeY.jpg`
    },
    {
        name: 'PRÓTESIS FLEXIBLES EN DIENTES SUPER-C',
        price: [{description: "valor_individual", price: "800000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'TEMPORALES EN TERMOCURADO',
        price: [{description: "cada_diente", price: "100000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'CORONAS EN METAL CERÁMICA',
        price: [{description: "valor_individual", price: "500000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'CORONAS EN E-MAX',
        price: [{description: "valor_individual", price: "700000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'CORONAS EN ZIRCONIO',
        price: [{description: "valor_individual", price: "900000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'PRÓTESIS INMEDIATA',
        price: [{description: "valor_individual", price: "180000"}],
        imageUrl: `${BASE_URL}ZgnBcWT.jpg`
    },
    {
        name: 'PLACA NEUROMIORELAJANTE  O BRUXISMO',
        price: [{description: "valor_individual", price: "150000"}],
        imageUrl: `${BASE_URL}u2Aooh5.jpg`
    }
]