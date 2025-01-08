import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.scss'
import Layout from './Components/Layout'
import Inschrijven from './Components/Inschrijven'
import Homepagina from './Pages/Homepagina'
import Diensten from './Pages/Diensten';
import OverOns from './Pages/OverOns';
import Contact from './Pages/Contact';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path='/' element={<Homepagina></Homepagina>}></Route>
        <Route path='/diensten' element={<Diensten></Diensten>}></Route>
        <Route path='/Inschrijven' element={<Inschrijven></Inschrijven>}></Route>
        <Route path='/OverOns' element={<OverOns></OverOns>}></Route>
        <Route path='/Contact' element={<Contact></Contact>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
