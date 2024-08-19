import Navigation from './components/Navbar'
import {Route,Routes} from 'react-router-dom'
import About from "./components/About"
import Footer from "./components/Footer"
import Home from "./components/Home"
import RestaurantFinder from "./components/RestaurantFinder"
import { LoadScript } from '@react-google-maps/api'

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
    </Routes>
    </LoadScript>
    <Footer/>
    </>
  )
}

export default App
