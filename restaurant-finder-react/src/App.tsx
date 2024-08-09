import './App.css'
import googleAPI from "../src/services/googleAPI"
const googleAPIkey = 'AIzaSyBFjjrOVcDKM0B5OFIWLhtbHc52Ai27pIs'
const BASE_URL = `https://maps.googleapis.com/maps/api/js?key=${googleAPIkey}`
function App() {
  console.log(googleAPI)
  
  return (
    <>
    <script async
      src={`https://maps.googleapis.com/maps/api/js?key=${BASE_URL}`}>
  </script>
    <h3>Home</h3>
    </>
  )
}

export default App
