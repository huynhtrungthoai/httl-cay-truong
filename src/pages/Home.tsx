import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import HistoryOverview from '../components/HistoryOverview/HistoryOverview'
import Timeline from '../components/Timeline/Timeline'
import Leaders from '../components/Leaders/Leaders'
import Gallery from '../components/Gallery/Gallery'
import VideoArchive from '../components/VideoArchive/VideoArchive'
import AnniversaryEvent from '../components/AnniversaryEvent/AnniversaryEvent'
import Tribute from '../components/Tribute/Tribute'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <HistoryOverview />
        <Timeline />
        <Leaders />
        <Gallery />
        <VideoArchive />
        <AnniversaryEvent />
        <Tribute />
      </main>
      <Footer />
    </div>
  )
}
