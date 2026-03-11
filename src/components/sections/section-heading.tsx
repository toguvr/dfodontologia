import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl space-y-4", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--primary)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-4xl leading-tight text-[var(--foreground)] sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
