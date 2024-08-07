declare module 'next-intl' {
  export type IntlMessages = Record<string, string>
  export function useTranslations(
    namespace?: string
  ): (key: string, params?: Record<string, any>) => string
  export const NextIntlClientProvider: React.ComponentType<any>
}
