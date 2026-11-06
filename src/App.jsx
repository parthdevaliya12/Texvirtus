import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import WhatsAppButton from './components/WhatsAppButton'
import BackToTop from './components/BackToTop'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppButton />
      <BackToTop />
    </>
  )
}

export default App
