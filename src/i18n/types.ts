export type Locale = 'pt-BR' | 'en';

/** Require every supported locale so a page cannot silently fall back to another language. */
export type LocalizedContent<T> = Record<Locale, T>;

export const defaultLocale: Locale = 'pt-BR';

export function getLocalizedContent<T>(
  content: LocalizedContent<T>,
  locale: Locale = defaultLocale,
): T {
  return content[locale];
}
