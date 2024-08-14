import googleAPI from "../src/services/googleAPI"
import Navigation from './components/Navbar'
import GoogleMaps from "./components/GoogleMaps"
const googleAPIkey = 'AIzaSyBFjjrOVcDKM0B5OFIWLhtbHc52Ai27pIs'
const BASE_URL = `https://maps.googleapis.com/maps/api/js?key=${googleAPIkey}`
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import About from "./components/About"
function App() {
  return (
    <>
    <Navigation/>
    <Routes>
      <Route path="/about" element={<About/>}/>
      <Route path="/restaurant-finder" element={<GoogleMaps apiKey={googleAPIkey}/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
