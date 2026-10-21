import { useEffect, useState } from 'react'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'

const RELEASE_AT = new Date('2026-11-16T00:00:00+07:00').getTime()

function App() {
  const [now, setNow] = useState(() => Date.now())
  const [demoHome, setDemoHome] = useState(false)
  const previewHome =
    import.meta.env.DEV && new URLSearchParams(window.location.search).get('preview') === 'home'
  const showComingSoon = !previewHome && !demoHome && now < RELEASE_AT

  useEffect(() => {
    if (!showComingSoon) return
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [showComingSoon])

  if (showComingSoon) {
    return (
      <>
        <ComingSoon remainingMs={RELEASE_AT - now} />
        <button
          type="button"
          aria-label="Xem trang chủ bản demo"
          onClick={() => setDemoHome(true)}
          className="fixed right-0 top-0 z-50 h-[40px] w-[40px] cursor-default border-0 bg-transparent p-0 opacity-0 focus-visible:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold-light"
        />
      </>
    )
  }

  return <Home />
}

export default App
