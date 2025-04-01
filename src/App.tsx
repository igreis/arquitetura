import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectDetailPage from "./pages/ProjectDetailPage"
import Header from "./components/Header"
import Footer from "./components/Footer"
import "./global.css"
import { ScrollToTop } from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App

