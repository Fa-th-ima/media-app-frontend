
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './Pages/LandingPage'
import Home from './Pages/Home'
import WatchHistory from './Pages/WatchHistory'
import PageNotFound from './Pages/PageNotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {

  return (
    <>

  {/* header nd footer to be displayed in all pages */}
    <Header/>
      <Routes>

        {/* Landing page path:  http://localhost:5173/ */}  - main page of the app
        <Route path='/' element={<LandingPage/>} />

        {/* Home page path:  http://localhost:5173/home */}
        <Route path='/home' element={<Home/>} />

        {/* Home page path:  http://localhost:5173/WatchHistory */}
        <Route path='/watch-history' element={<WatchHistory/>} />

        {/* any other page path:  http://localhost:5173/couldbeanything */}
        <Route path='*' element={<PageNotFound/>} />

      </Routes> 
    <Footer/>
    </>
  )
}

export default App
