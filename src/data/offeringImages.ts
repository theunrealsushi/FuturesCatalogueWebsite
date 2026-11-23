import beanDispensary from "../assets/offerings/regulated/services/bean-dispensary.png"

/**
 * Offering images keyed by content.ts paths (under src/assets/offerings/).
 * Add a static import here when you add a new offering image — avoids
 * import.meta.glob, which breaks some GitHub Pages / CI build steps.
 */
const byContentPath: Record<string, string> = {
  "regulated/services/bean-dispensary.jpg": beanDispensary,
  "regulated/services/bean-dispensary.png": beanDispensary,
}

export function resolveOfferingImagePath(path: string): string | undefined {
  const normalized = path
    .replace(/^\//, "")
    .replace(/^src\/assets\/offerings\//, "")
  return byContentPath[normalized]
}