import { useEffect } from 'react'

export default function useRevealOnScroll(selector = '.neon-animate') {
  useEffect(() => {
    const sections = document.querySelectorAll(selector)
    if (!sections.length) return undefined

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('neon-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    )

    sections.forEach((section) => observer.observe(section))
    document.querySelector('.hero-section.neon-animate')?.classList.add('neon-visible')

    return () => observer.disconnect()
  }, [selector])
}
