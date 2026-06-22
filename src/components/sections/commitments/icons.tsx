export function GrowthIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 17l5-5 4 4 8-8M14 7h6v6"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CollaborationIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="9" r="3" stroke="white" strokeWidth="1.8" />
      <circle cx="17" cy="9" r="2.5" stroke="white" strokeWidth="1.8" />
      <path
        d="M2.5 19c0-2.76 2.46-5 5.5-5s5.5 2.24 5.5 5M14 14.2c2.5.16 4.5 2.1 4.5 4.5"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ImpactIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2l2.4 5.6L20 8l-4.5 4 1.3 6-4.8-3.2L7.2 18l1.3-6L4 8l5.6-.4L12 2z"
        stroke="white"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const COMMITMENT_ICONS = {
  growth: GrowthIcon,
  collaboration: CollaborationIcon,
  impact: ImpactIcon,
};
