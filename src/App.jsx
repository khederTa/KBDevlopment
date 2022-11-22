import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
// import Gallery from './pages/gallery/Gallery'
// import NotFound from './pages/notFound/NotFound'
// import Plans from './pages/plans/Plans'
// import Trainers from './pages/trainers/Trainers'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
        <Route index element={<Home/>} />
          <Route path='about' element={<About/>}></Route>
          <Route path='contact' element={<Contact/>}></Route>
          {/* <Route path='gallery' element={<Gallery/>}></Route>
          <Route path='plans' element={<Plans/>}></Route>
          <Route path='trainers' element={<Trainers/>}></Route>
          <Route path='*' element={<NotFound/>}></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
