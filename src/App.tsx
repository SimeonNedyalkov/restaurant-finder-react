import googleAPI from "../src/services/googleAPI"
import Navigation from './components/Navbar'
import GoogleMaps from "./components/GoogleMaps"
const googleAPIkey = 'AIzaSyBFjjrOVcDKM0B5OFIWLhtbHc52Ai27pIs'
const BASE_URL = `https://maps.googleapis.com/maps/api/js?key=${googleAPIkey}`
function App() {
  return (
    <>
    <Navigation/>
    <GoogleMaps apiKey={googleAPIkey}/>
    </>
  )
}

export default App
