import { useEffect, useRef, useState } from 'react'

type Options = {
  from?: number
  to: number
  durationMs?: number
}

export function useCountUpOnView({ from = 0, to, durationMs = 900 }: Options) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [value, setValue] = useState(from)
  const [hasRun, setHasRun] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0]
        if (!entry.isIntersecting || hasRun) return

        setHasRun(true)
        const start = performance.now()

        const tick = (now: number) => {
          const t = Math.min(1, (now - start) / durationMs)
          const next = Math.round(from + (to - from) * t)
          setValue(next)
          if (t < 1) requestAnimationFrame(tick)
        }

        requestAnimationFrame(tick)
      },
      { threshold: 0.35 }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [from, to, durationMs, hasRun])

  return { ref, value }
}