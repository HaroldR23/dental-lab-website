import { 
    FacebookFilled, 
    InstagramFilled, 
    MailFilled, 
    PhoneFilled, 
    WhatsAppOutlined, 
    EnvironmentFilled } from "@ant-design/icons";

export const BASE_URL = 'https://i.imgur.com/';

export const FOOTER_ITEMS = [
            {
                title: "Nuestras redes sociales",
                children: [
                    {description: "Pretty Dent", icon: <FacebookFilled />},
                    {description: "pretty_dent", icon: <InstagramFilled />}
                ]
            },
            {
                title: "Contáctanos",
                children: [
                    {description: "pretty_dent@gmail.com", icon: <MailFilled />},
                    {description: "+57 320 3499562", icon: <WhatsAppOutlined />},
                    {description: "320 3499562", icon: <PhoneFilled />}
                ]
            },
            {
                title: "Nuestros horarios",
                children: [
                    {description: "Lunes a viernes: 8:00-12:00 y 14:00-18:00"},
                    {description: "Sabados: 9:00-14:00"},
                    {description: "Descansamos domingos y festivos"}
                ]
            },
            {
                title: "Visítanos",
                children: [
                    {description: "Calle 2a Sur # 30B-118 ", icon: <EnvironmentFilled />},
                    {description: "Mza 1 Casa 11B"},
                    {description: "Bosques de Rosa Blanca"}
                ]
            },
    ];
export const FOOTER_LOGO_URL = `${BASE_URL}4ft4J4j.png`;

export const ANCHOR_ITEMS = [
    { href:"/#footer", id:"1", title:"Contáctanos"},
    { href:"/#content", id:"2", title:"¿Qué te ofrecemos?"},
    { href:"/#labInfo", id:"3", title:"Nosotros"},
    { href:"/#galery", id:"3", title:"Galeria"}
];


export const NAV_BAR_LOGO_URL = `${BASE_URL}XQR9LUp.png`;
export const COPYRIGHT_LOGO_URL = `${BASE_URL}qZAXWKR.png`;
export const COPYRIGHT_TEXT_CONTENT = "Diseñado y creado por Harold Rodriguez Copyright © 2022 || Todos los Derechos Reservados";