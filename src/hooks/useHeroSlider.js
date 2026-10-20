import { useEffect } from 'react'

export default function useHeroSlider(intervalMs = 2000) {
  useEffect(() => {
    const slides = document.querySelectorAll('.hero-bg-gallery img')
    if (!slides.length) return undefined

    let current = 0
    slides[0].classList.add('active')

    const timer = setInterval(() => {
      slides[current].classList.remove('active')
      current = (current + 1) % slides.length
      slides[current].classList.add('active')
    }, intervalMs)

    return () => clearInterval(timer)
  }, [intervalMs])
}
