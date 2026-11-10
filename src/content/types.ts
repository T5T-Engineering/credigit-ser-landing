import type { LucideIcon } from "lucide-react";

/** Shapes shared by the content files. They mirror the @credigit/web-ui component props. */
export type RadarAxis = { key: string; label: string };
export type RadarSeries = { name: string; values: Record<string, number>; tone?: "accent" | "primary" | "neutral" };

export type IconItem = { icon: LucideIcon; title: string; description: string };

export type StepItem = { title: string; description?: string; meta?: string };
