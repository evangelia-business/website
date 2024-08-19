declare module 'next-intl' {
  export type IntlLocales = Record<string, string>
  export function useTranslations(
    namespace?: string
  ): (key: string, params?: Record<string, any>) => string
  export const NextIntlClientProvider: React.ComponentType<any>
}
