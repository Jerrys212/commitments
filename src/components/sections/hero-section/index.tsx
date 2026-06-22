import { Subheading } from "./subheading";

export default function HeroSection() {
  return (
    <section className="pt-20 pb-16 bg-white dark:bg-[#171F2E]">
      <div className="wrapper">
        <div className="max-w-[760px] mx-auto text-center">
          <Subheading text="Plan de Compromisos" />

          <h1 className="text-gray-900 mx-auto font-extrabold mb-5 text-4xl sm:text-5xl dark:text-white sm:leading-[1.15] max-w-[700px]">
            Mis Compromisos con xdevelop
          </h1>
          <p className="max-w-[560px] mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
            Estos son los compromisos que asumo para este periodo de 30 dias,
            enfocados en mi crecimiento profesional, la colaboración con mi
            equipo y el impacto de mi trabajo en xdevelop.
          </p>
        </div>
      </div>
    </section>
  );
}
