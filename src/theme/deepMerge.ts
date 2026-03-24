export function deepMerge<T extends Record<string, unknown>>(
  target: T,
  source: Partial<T>
): T {
  const result = { ...target };

  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      const targetVal = target[key];
      const sourceVal = source[key];

      if (
        targetVal &&
        sourceVal &&
        typeof targetVal === "object" &&
        typeof sourceVal === "object" &&
        !Array.isArray(targetVal) &&
        !Array.isArray(sourceVal)
      ) {
        (result as Record<string, unknown>)[key] = deepMerge(
          targetVal as Record<string, unknown>,
          sourceVal as Record<string, unknown>
        );
      } else {
        (result as Record<string, unknown>)[key] = sourceVal;
      }
    }
  }

  return result;
}
