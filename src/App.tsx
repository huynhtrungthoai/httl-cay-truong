import { useEffect, useState } from 'react'
import Home from './pages/Home'
import ComingSoon from './pages/ComingSoon'

const RELEASE_AT = new Date('2026-11-16T00:00:00+07:00').getTime()

function App() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const timer = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(timer)
  }, [])

  if (now < RELEASE_AT) {
    return <ComingSoon remainingMs={RELEASE_AT - now} />
  }

  return <Home />
}

export default App