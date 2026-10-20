import { useEffect } from 'react'

export default function useLandingTheme() {
  useEffect(() => {
    document.body.classList.add('landing-theme')
    document.documentElement.classList.add('landing-theme')

    return () => {
      document.body.classList.remove('landing-theme')
      document.documentElement.classList.remove('landing-theme')
    }
  }, [])
}
