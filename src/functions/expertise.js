export const expertise = [
  {
    title: "Economía y Políticas públicas",
    slug: "economia",
    main1: require("../img/finanzas.jpg"),
    main2: require("../img/economia.jpg"),
    services: [
      "PLANES MAESTROS Y DE DESARROLLO",
      "EVALUACIONES SOCIO ECONÓMICAS: ACB Y ACE",
      "ESTUDIOS DE PREFACTIBILIDAD & PREINVERSIÓN",
      "ESTUDIOS DE PRIORIZACIÓN DE INVERSIONES PÚBLICAS ",
      "CADENAS DE VALOR",
      "ESTUDIOS MERCADO & SECTORIALES",
      "ESTUDIOS DE COMPETENCIA & ANÁLISIS REGULATORIOS",
      "ESTUDIOS TARIFARIOS",
      "MODELACIÓN ECONOMÉTRICA"
    ],
    projects: [
      "ESTUDIO PARA EL DESARROLLO DE UN MECANISMO PARA LA PRIORIZACIÓN DE INVERSIONES DE AEROPUERTO Y SERVICIOS AUXILIARES (ASA 2017)",
      "ELABORACIÓN DE ESTUDIOS PARA LA INTEGRACIÓN CARTERA DE INVERSIONES FONREGIÓN Y R23 (SH CHIS 2016/2017)",
      "ESTUDIO DE PREINVERSIÓN PARA LA MODERNIZACIÓN DEL SISTEMA DE MOVILIDAD URBANA EN LA ZONA CONURBADA DEL PUERTO DE VERACRUZ Y BOCA DEL RIO (SIOP 2017)",
      "ESTUDIO DE PREFACTIBILIDAD PARA UN CENTRO DE CARGA AEREA DEL AEROPUERTO INTERNACIONAL ANGEL ALBINO CORZO (SECRETARIA DE ECONOMIA 2017)"
    ]
  },
  {
    title: "Ingeniería + Arquitectura",
    slug: "ingenieria",
    subsections: [
      {
        title: "Puertos & Aeropuertos",
        img: require("../img/expertise_airport.jpg")
      },
      {
        title: "Carreteras",
        img: require("../img/expertise_highways.jpg")
      },
      {
        title: "Hospitales",
        img: require("../img/expertise_hospital.jpg")
      },
      {
        title: "Infraestructura Educativa",
        img: require("../img/expertise_educative.jpg")
      },
      {
        title: "Infraestructura Ferroviaria",
        img: require("../img/expertise_railway.jpg")
      },
      {
        title: "Logística e Industria",
        img: require("../img/expertise_parques.jpg")
      },
      {
        title: "Ordenamiento territorial",
        img: require("../img/expertise_mapas.jpg")
      },
      {
        title: "Recursos hidráulicos",
        img: require("../img/expertise_hidraulicos.jpg")
      },
      {
        title: "Manejo de residuos sólidos",
        img: require("../img/solidmanagemente.jpg")
      }
    ],
    main1: require("../img/highway2.jpg"),
    main2: require("../img/highway.jpg"),
    services: [
      "ANTEPROYECTOS Y PROYECTOS EJECUTIVOS",
      "TOPOGRAFÍA Y GEOTÉCNIA",
      "CALCULO ESTRUCTURAL",
      "PRECIOS UNITARIOS",
      "PROYECTOS ARQUITECTÓNICOS",
      "ADMINISTRACIÓN Y SUPERVISIÓN DE PROYECTOS"
    ],
    projects: [
      "PROYECTO EJECUTIVO PARA LA CONSTRUCCIÓN DE UNA ESCUELA DE MEDICINA (UNACH 2017)",
      "ESTUDIO Y PROYECTO EJECUTIVO PARA LA CONSTRUCCIÓN INTEGRAL DE ABASTECIMIENTO DE AGUA POTABLE (SOPYC 2017)",
      "ANTEPROYECTO PARA LA MODERNIZACIÓN DE 400 KMS DE CARRETERA EN LA SIERRA HUASTECA, VERACRUZ (SIOP 2017)",
      "FACTIBILIDAD TÉCNICA PARA LA MODERNIZACIÓN DEL SISTEMA DE MOVILIDAD URBANA SUSTENTABLE EN LA ZONA CONURBADA DEL PUERTO DE VERACRUZ Y BOCA DEL RIO (SIOP 2017)",
      "PROYECTO EJECUTIVO PARA UNA PLATAFORMA MULTIMODAL Y FERROVIARIA EN CHIAPAS (SE 2017)"
    ]
  },
  {
    title: "Finanzas Públicas",
    slug: "finanzas",
    main1: require("../img/economia.jpg"),
    main2: require("../img/finanzas.jpg"),
    services: [
      "FINANCIAMIENTO DE PROYECTOS DE INFRAESTRUCTURA PÚBLICA",
      "GARANTÍAS, DEUDA SUBORDINADA, DEUDA DIRECTA, CAPITAL DE RIESGO",
      "ASOCIACIÓN PUBLICO PRIVADOS (APP)",
      "PROYECTOS DE PRESTACIÓN DE SERVICIOS (PPS)",
      "FIBRAS NO TRADICIONALES (FIBRA E)"
    ],
    projects: [
      "ASESORÍA Y ESTRUCTURACIÓN FINANCIERA PARA LA AMPLIACIÓN DE LA INFRAESTRUCTURA OPERATIVA DEL AEROPUERTO INTERNACIONAL ANGEL ALBINO CORZO (AIAAC 2017)",
      "ESTRUCTURACIÓN FINANCIERA PARA LA CONSTRUCCIÓN Y OPERACIÓN DEL SISTEMA DE TRANSPORTE TIPO BRT EN LA ZONA CONURBADA DEL PUERTO DE VERACRUZ Y BOCA DEL RIO (SIOP 2017)",
      "ASESORÍA Y ESTRUCTURACIÓN FINANCIERA PARA IMPULSAR UNA FIBRA E PARA LAS ESTACIONES DE ALMACENAMIENTO Y SUMINISTRO DE AAEROPUERTOS Y SERVICIOS AUXIIARES (ASA 2017-2018)"
    ]
  },
  {
    title: "Transparencia + auditoría",
    slug: "transparencia",
    main1: require("../img/transparencia.jpg"),
    main2: require("../img/transparencia_2.jpg"),
    services: [
      "PROCESOS DE ENTREGA-RECEPCIÓN",
      "LIBROS BLANCOS PARA PROYECTOS ESTRATÉGICOS",
      "BLINDAJE ADMINISTRATIVO",
      "CUENTA PÚBLICA",
      "AUDITORÍA"
    ],
    projects: [
      "ASESORÍA PARA EL PROCESO DE RECEPCIÓN ADMINISTRATIVA DE LAS UNIDADES ADMINISTRATIVAS DE LAS PRINCIPALES DEPENDENCIAS DEL ESTADO DE CHIAPAS (SH 2012)",
      "ASESORÍA JURÍDICO ADMINISTRATIVA Y AUDITORIA EXTERNA DE LAS AREAS ADMINISTRATIVAS DE LA FISCALÍA GENERAL DEL ESTADO DE GUERRERO (2015- 2017)"
    ]
  },
  {
    title: "Geodata Science + Gis Planning",
    slug: "data",
    main1: require("../img/economia.jpg"),
    main2: require("../img/data.jpg"),
    services: [
      "DISEÑADA PARA EL GEOPROCESAMIENTO DE ALTOS VOLUMENES DE INFORMACIÓN.",
      "VISUALIZACIÓN ESPACIAL , MAPEO DE DATOS Y ANÁLISIS DE DATOS",
      "MÁS DE 800 VARIABLES PRE CARGADAS DE FUENTES DE DATOS OFICIALES",
      "ANÁLISIS DE VARIABLES HISTÓRICAS",
      "MACHINE LEARNING & DESARROLLO DE MODELOS PREDICTIVOS",
      "MOTOR INFOGRÁFICO PARA ANÁLISIS Y REPORTES EN TIEMPO REAL"
    ],
    projects: [
      "DESARROLLO DE PLATAFORMA PARA LA ATRACCIÓN DE INVERSIONES DEL GOBIERNO DEL ESTADO DE CHIAPAS (SECRETARÍA DE ECONOMIA 2018)"
    ]
  }
];
export function availableExpertise() {
  var r = [];
  expertise.map(function(o) {
    r.push(o.slug);
  });
  return r;
}
export const avexp = availableExpertise();

export function getExpertise(slug) {
  var r = {};
  expertise.map(function(o) {
    if (o.slug == slug) {
      r = o;
    }
  });
  return r;
}
