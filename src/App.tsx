import './App.scss'
import { Header } from './components/ui/header/Header'
import { Routes, Route } from 'react-router-dom'
import { Main } from './components/pages/main/Main'
import { NotFound } from './components/pages/notFound/NotFound'
import { Footer } from './components/ui/footer/Footer'
import { Shops } from './components/pages/shops/Shops'

function App() {

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/shops/:shopName' element={<Shops />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
