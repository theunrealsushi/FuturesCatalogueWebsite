/** Eagerly load all offering images under src/assets/offerings/ */
const modules = import.meta.glob("../assets/offerings/*/.{png,jpg,jpeg,webp,gif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

/**
 * Resolve an offering image path from content.ts.
 * Example: "regulated/services/bean-dispensary.png"
 * → src/assets/offerings/regulated/services/bean-dispensary.png
 */
export function resolveOfferingImage(image?: string): string | undefined {
  if (!image) return undefined;
  const normalized = image.replace(/^\//, "");
  const match = Object.entries(modules).find(([key]) =>
    key.replace(/\\/g, "/").endsWith(`/assets/offerings/${normalized}`),
  );
  return match?.[1];
}