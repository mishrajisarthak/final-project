import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Layout from './components/Layout/Layout.jsx'
import LoadingFullScreen from './components/UI/LoadingFullScreen.jsx'

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home.jsx'))
const Generator = lazy(() => import('./pages/Generator.jsx'))
const History = lazy(() => import('./pages/History.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const NotFound = lazy(() => import('./pages/NotFound.jsx'))

function App() {
  return (
    <Suspense fallback={<LoadingFullScreen />}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="generator" element={<Generator />} />
          <Route path="history" element={<History />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App