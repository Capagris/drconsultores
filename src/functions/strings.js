import LocalizedStrings from "react-localization";

const Strings = new LocalizedStrings({
  es: {
    pageTitle: "Desarrollo Regional Consultores",
    homeTitle: "Inicio",
    aboutTitle: "Nosotros",
    aboutContent: {
      cta: "Ver nuestro expertise",
      title: "soluciones para los tres\nniveles del sector\ngubernamental",
      descriptionLink1: "DESARROLLO REGIONAL CONSULTORES",
      description:
        "Con años de experiencia y por medio de un trabajo ético, profesional y especializado del más alto nivel, el equipo de {0} ofrecemos el conocimiento y la experiencia para elaborar estudios de gran calidad técnica."
    },
    expertiseTitle: "Expertise",
    expertise: {
      sections: {
        ingenieria: "Ingeniería + Arquitectura",
        economia: "Economía + Políticas públicas",
        finanzas: "Finanzas Públicas",
        transparencia: "Transparencia + Auditoría",
        data: "Geodata Science + Gis Planning"
      },
      title: "un equipo y expertise multidisciplinario",
      highlight: "Ingenieros, Economistas, Financieros, Abogados y Tecnólogos",
      description:
        "Contamos con un equipo multidisciplinario de {0} que permiten que nuestro despacho cuente con un alto nivel de conocimiento y excelencia profesional."
    },
    sectorsTitle: "Sectores",
    sectors: {
      infraestructura: {
        title: "Infraestructura"
      },
      movilidad: {
        title: "Movilidad urbana sustentable"
      },
      energia: {
        title: "Energía"
      },
      agua: {
        title: "AGUA +RESIDUOS SÓLIDOS + MEDIO AMBIENTE"
      }
    },
    contactTitle: "Contacto"
  }
});
export default Strings;
