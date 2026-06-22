import { COMMITMENTS } from './data';
import { COMMITMENT_ICONS } from './icons';

export default function Commitments() {
  return (
    <section className="py-20 px-5" id="compromisos">
      <div className="max-w-3xl mx-auto space-y-6">
        {COMMITMENTS.map((commitment) => {
          const Icon = COMMITMENT_ICONS[commitment.icon];

          return (
            <div
              key={commitment.number}
              className="bg-white p-6 sm:p-8 border border-gray-200 dark:bg-white/5 dark:border-white/10 rounded-2xl flex flex-col sm:flex-row gap-6"
            >
              <div className="core-feature-icon shrink-0 !w-16 !h-16">
                <Icon />
              </div>

              <div>
                <span className="block mb-1 text-sm font-semibold text-primary-500">
                  Compromiso {commitment.number}
                </span>

                <h2 className="mb-3 text-gray-900 dark:text-white font-bold text-xl">
                  {commitment.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {commitment.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
