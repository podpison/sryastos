import './App.scss'
import { Header } from './components/ui/header/Header'
import { Routes, Route } from 'react-router-dom'
import { Main } from './components/pages/main/Main'
import { NotFound } from './components/pages/notFound/NotFound'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
