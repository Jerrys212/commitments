export const COMMITMENTS = [
  {
    number: "01",
    title: "Desarrollo profesional",
    description:
      "Ampliar mi stack más allá del frontend tomando un curso de NestJS y uno de desarrollo móvil con Expo, dedicando mis tiempos libres al estudio. La meta es construir las bases para poder levantar la mano y tomar tareas de backend o mobile cuando el equipo lo necesite, dejando de ser dependencia única para temas de front.",
    icon: "growth",
  },
  {
    number: "02",
    title: "Colaboración (evitar ser cuello de botella)",
    description:
      "Agendar una sesión semanal de sincronización con mi equipo enfocada en ordenar el feature en curso y correr pruebas de integración entre las distintas partes. El objetivo es detectar desfases entre front, back y mobile a tiempo y evitar que se acumulen detalles que comprometan las fechas de entrega.",
    icon: "collaboration",
  },
  {
    number: "03",
    title: "Impacto en la empresa",
    description:
      "Elevar la calidad y la confiabilidad de mis entregas, mi mayor área de oportunidad ha sido el volumen de devoluciones de QA y el prometer tiempos que luego no alcanzo por priorizar la velocidad sobre la calidad. Mi compromiso es invertir ese patrón: reforzar mi propio proceso de revisión antes de entregar para reducir mis devoluciones de QA a mas de la mitad, y estimar mis tiempos con un margen realista para cumplir lo que prometo.",
    icon: "impact",
  },
] satisfies Array<{
  number: string;
  title: string;
  description: string;
  icon: "growth" | "collaboration" | "impact";
}>;
