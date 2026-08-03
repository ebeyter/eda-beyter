export function SectionGlow({ variant = "a" }: { variant?: "a" | "b" }) {
  const positions =
    variant === "a"
      ? { one: "-top-24 -left-24", two: "-bottom-32 -right-16" }
      : { one: "-top-32 -right-20", two: "-bottom-24 -left-24" };

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className={`absolute ${positions.one} h-80 w-80 rounded-full bg-mauve/20 blur-3xl`}
      />
      <div
        className={`absolute ${positions.two} h-96 w-96 rounded-full bg-blue/15 blur-3xl`}
      />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink/10 blur-3xl" />
    </div>
  );
}
