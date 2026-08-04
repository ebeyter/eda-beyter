export function PandaIcon({ size = 24, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden
    >
      <circle cx="10" cy="10" r="7" fill="#1e1e2e" />
      <circle cx="38" cy="10" r="7" fill="#1e1e2e" />
      <circle cx="10" cy="10" r="3.2" fill="#f5f5f7" />
      <circle cx="38" cy="10" r="3.2" fill="#f5f5f7" />
      <ellipse cx="24" cy="26" rx="19" ry="17" fill="#f5f5f7" />
      <ellipse cx="12.5" cy="24" rx="6" ry="7.5" transform="rotate(-18 12.5 24)" fill="#1e1e2e" />
      <ellipse cx="35.5" cy="24" rx="6" ry="7.5" transform="rotate(18 35.5 24)" fill="#1e1e2e" />
      <circle cx="13" cy="25.5" r="2.1" fill="#f5f5f7" />
      <circle cx="35" cy="25.5" r="2.1" fill="#f5f5f7" />
      <ellipse cx="24" cy="30.5" rx="3.4" ry="2.7" fill="#1e1e2e" />
      <ellipse cx="7.5" cy="32" rx="2.6" ry="1.7" fill="#f5c2e7" opacity="0.65" />
      <ellipse cx="40.5" cy="32" rx="2.6" ry="1.7" fill="#f5c2e7" opacity="0.65" />
    </svg>
  );
}
