export function Rope() {
  return (
    <div
      aria-hidden
      className="h-6.5 bg-repeat-x opacity-80"
      style={{
        backgroundImage: `radial-gradient(circle at 10px 13px, var(--surface2) 4px, transparent 4.5px),
          linear-gradient(to right, var(--surface2) 1px, transparent 1px)`,
        backgroundSize: "44px 26px, 44px 2px",
        backgroundPosition: "0 0, 0 12px",
      }}
    />
  );
}
