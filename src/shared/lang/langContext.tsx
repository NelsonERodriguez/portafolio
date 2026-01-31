import { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Lang = 'es' | 'en'

type LangContextType = {
  lang: Lang
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const LangContext = createContext<LangContextType | null>(null)

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('es')

  useEffect(() => {
    const saved = localStorage.getItem('lang') as Lang | null
    if (saved === 'es' || saved === 'en') setLangState(saved)
  }, [])

  const setLang = (next: Lang) => {
    setLangState(next)
    localStorage.setItem('lang', next)
  }

  const toggleLang = () => setLang(lang === 'es' ? 'en' : 'es')

  const value = useMemo(() => ({ lang, setLang, toggleLang }), [lang])

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

export function useLang() {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used inside LangProvider')
  return ctx
}