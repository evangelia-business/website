import { useTranslations } from 'next-intl'

import HomePage from '../../components/HomePage/HomePage'
export default function Home() {
  const t = useTranslations('HomePage')
  return (
    <main>
      <HomePage />
    </main>
  )
}
