import { ProductFilled, ScheduleFilled } from "@ant-design/icons";
export const BASE_URL = 'https://i.imgur.com/';
export const IMAGES_SRC = [
    `${BASE_URL}oflkwza.png`, 
    `${BASE_URL}LUt2uEP.png`, 
    `${BASE_URL}BBJVCPI.png`
];
export const CAROUSEL_IMAGES = IMAGES_SRC.map((src, index) => 
    <img key={index} width="100%" height="40%" src={src} alt={`carousel_image_${index}`}/>);
export const BUTTON_LINKS = [
    {
        text: "Productos",
        icon: <ProductFilled width="100px" height="100px" />
    },
    {
        text: "Agendar cita",
        icon: <ScheduleFilled width="100px" height="100px" />
    }
];
export const GALLERY_IMAGES_SRC = [
    `${BASE_URL}pQwNEe3.jpg`, 
    `${BASE_URL}cq0AJ4F.jpg`, 
    `${BASE_URL}rL8DzXZ.jpg`,
    `${BASE_URL}u2Aooh5.jpg`, 
    `${BASE_URL}ZgnBcWT.jpg`, 
    `${BASE_URL}x2QAxvE.jpg`,
    `${BASE_URL}ObTfUeY.jpg`, 
    `${BASE_URL}zisqobK.jpg`, 
    `${BASE_URL}np4aZN5.jpg`
];
export const LAB_INFORMATION_ITEMS = [
    {
        title: "¿Quiénes somos?",
        description: 
        `Somos un laboratorio dental que se caracteriza por la calidad de servicio que ofrecemos con más de 8 años de experiencia.`
    },
    {
        title: "Visión",
        description: 
        `Ser una empresa comprometida en el sector en el sector de la industria a nivel nacional, con capacidad de competir exitosamente en 
        el mercado intertacional, con un equipo comprometido, generando productos y servicios innovadores que satisfagan las necesidades de 
        los odontólogos y pacientes, con altos estándares de calidad en materiales, procesos de producción, cumplimiento, diseño y 
        conciencia del servicio al cliente que garantice solidez y reconocimiento de la empresa.`
    },
    {
        title: "¿Por qué elegirnos?",
        description: 
        `Satisfacer las necesidades de nuestros clientes, odontólogos y pacientes, en el área de la prótesis y rehabilitación dental, 
        excediendo sus espectativas proporcionándoles diseños biocompatibles y biomecánicos, utilizando tecnología de punta, 
        materiales contemporáneos y procesos de fabricación innovadores, para que el usuario obtenga el mejor provecho de su inversión. 
        Por medio de un equipo de trabajo de gran experiencia y versatilidad destacándose por sus cualidades como servicio, calidad,
        puntualidad, responsabilidad, honestidad y amor`  
    }
]
