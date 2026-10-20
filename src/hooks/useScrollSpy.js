import { useCallback, useEffect, useRef, useState } from 'react'
import { EXPLORE_SECTIONS, SECTION_LABELS, SECTION_THEMES } from '../constants/landing'

export default function useScrollSpy(sectionIds) {
  const [activeSection, setActiveSection] = useState('home')
  const [scrollProgress, setScrollProgress] = useState(0)
  const [navScrolled, setNavScrolled] = useState(false)
  const navbarRef = useRef(null)
  const ticking = useRef(false)

  const getHeaderOffset = useCallback(() => {
    const navH = navbarRef.current?.offsetHeight ?? 68
    return navH + 10
  }, [])

  const scrollToSection = useCallback((targetId) => {
    const id = targetId.startsWith('#') ? targetId.slice(1) : targetId
    const target = document.getElementById(id)
    if (!target) return

    const offset = getHeaderOffset()
    const top = target.getBoundingClientRect().top + window.pageYOffset - offset
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  }, [getHeaderOffset])

  const getCurrentSection = useCallback(() => {
    if (window.scrollY < 60) return 'home'

    const offset = getHeaderOffset() + 24
    const scrollPos = window.scrollY + offset
    let active = 'home'

    for (const id of sectionIds) {
      const section = document.getElementById(id)
      if (section && section.offsetTop <= scrollPos) {
        active = id
      }
    }
    return active
  }, [getHeaderOffset, sectionIds])

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return
      ticking.current = true
      requestAnimationFrame(() => {
        setNavScrolled(window.pageYOffset > 40)
        const docHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0
        setScrollProgress(Math.min(100, Math.max(0, progress)))
        setActiveSection(getCurrentSection())
        ticking.current = false
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [getCurrentSection])

  useEffect(() => {
    const updateNavbarHeight = () => {
      if (!navbarRef.current) return
      const height = navbarRef.current.offsetHeight
      document.documentElement.style.setProperty('--navbar-height', `${height}px`)
      document.documentElement.style.scrollPaddingTop = `${height + 12}px`
    }

    updateNavbarHeight()

    const node = navbarRef.current
    if (!node) return undefined

    const observer = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(updateNavbarHeight)
      : null

    observer?.observe(node)
    window.addEventListener('resize', updateNavbarHeight)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', updateNavbarHeight)
    }
  }, [])

  const liveLabel = SECTION_LABELS[activeSection] || 'Home'
  const liveTheme = SECTION_THEMES[activeSection] || 'orange'
  const exploreLabel = EXPLORE_SECTIONS.has(activeSection) ? liveLabel : ''

  return {
    navbarRef,
    activeSection,
    scrollProgress,
    navScrolled,
    liveLabel,
    liveTheme,
    exploreLabel,
    scrollToSection,
    isExploreActive: EXPLORE_SECTIONS.has(activeSection),
  }
}
