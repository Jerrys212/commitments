export const COMMITMENTS = [
  {
    number: "01",
    title: "Desarrollo profesional",
    description:
      "Profundizar en metodologías y herramientas de QA tomando un curso de testing automatizado y otro de fundamentos de QA y diseño de casos de prueba, dedicando mis tiempos libres al estudio. La meta es aplicar estos conocimientos en un proyecto real de la empresa, armando un conjunto de pruebas automatizadas que sirva como demostración práctica para todo el equipo: un caso concreto donde se vea al detalle cómo la automatización ayuda a garantizar un producto de calidad. Así no solo fortalezco mis bases para ejecutar pruebas manuales, sino que aporto automatización y una mirada crítica de calidad que pueda cubrir front, back y mobile cuando el equipo lo necesite. ",
    icon: "growth",
  },
  {
    number: "02",
    title: "Colaboración (integrarme temprano al ciclo)",
    description:
      "Armar una matriz de pruebas que funcione como plantilla para el equipo, aprovechando que prácticamente todos nuestros proyectos cubren lo mismo. La idea es que en cada proyecto sirva para ver de un vistazo qué aplica y qué no, y así medir si se están cumpliendo los requerimientos antes de mandar el trabajo a QA. Con esto buscamos integrar la mirada de calidad desde el inicio y evitar devoluciones que nos hagan retroceder y comprometan las fechas de entrega.",
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
