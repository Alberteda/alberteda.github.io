import './App.css'
import { LandingPage } from './components/pages/landing-page/LandingPage'
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>
  )
}

export default App
