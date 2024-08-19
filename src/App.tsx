import {Route,Routes} from 'react-router-dom'
import { LoadScript } from '@react-google-maps/api'

import Navigation from './components/Navbar'
import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import RestaurantFinder from "./components/RestaurantFinder"
import Details from './components/Details'

const googleAPIkey = 'AIzaSyBFjjrOVcDKM0B5OFIWLhtbHc52Ai27pIs'

function App() {
  
  return (
    <>
    <Navigation/>
    <LoadScript googleMapsApiKey={googleAPIkey} libraries={['places']}>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/restaurant-finder" element={<RestaurantFinder/>}></Route>
      <Route path="/restaurant-finder/details/:id" element={<Details/>}></Route>
    </Routes>
    </LoadScript>
    <Footer/>
    </>
  )
}

export default App
