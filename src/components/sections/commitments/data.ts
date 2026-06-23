export const COMMITMENTS = [
  {
    number: "01",
    title: "Desarrollo profesional",
    description:
      "Profundizar en metodologías y herramientas de QA tomando un curso de testing automatizado y otro de fundamentos de QA y diseño de casos de prueba, dedicando mis tiempos libres al estudio. La meta es construir las bases para no solo ejecutar pruebas manuales, sino aportar automatización y una mirada crítica de calidad que cubra front, back y mobile cuando el equipo lo necesite.",
    icon: "growth",
  },
  {
    number: "02",
    title: "Colaboración (integrarme temprano al ciclo)",
    description:
      "Agendar una sesión semanal de sincronización con mi equipo para revisar los features en curso desde la etapa de definición, aclarar criterios de aceptación y planear la estrategia de pruebas antes de que el desarrollo termine. El objetivo es detectar errores y riesgos a tiempo, evitando que comprometan las fechas de entrega.",
    icon: "collaboration",
  },
  {
    number: "03",
    title: "Impacto en la empresa",
    description:
      "Elevar la calidad y confiabilidad del producto reforzando mi proceso de testing. Mi compromiso es documentar casos de prueba claros y reproducibles, reportar bugs con la información suficiente para agilizar su corrección, y construir una cobertura de pruebas que reduzca de forma medible los defectos que llegan a producción. Aprovecharé mi experiencia previa como desarrollador para anticipar dónde suelen aparecer los errores y prevenirlos antes de que escalen.",
    icon: "impact",
  },
] satisfies Array<{
  number: string;
  title: string;
  description: string;
  icon: "growth" | "collaboration" | "impact";
}>;
