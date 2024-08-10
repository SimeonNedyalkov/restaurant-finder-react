const googleAPIkey = 'AIzaSyBFjjrOVcDKM0B5OFIWLhtbHc52Ai27pIs'
const BASE_URL = `https://maps.googleapis.com/maps/api/js?key=${googleAPIkey}`

async function getData(){
    const response = await fetch(BASE_URL)
    const result = response.json()
    return result
}


const googleAPI = {
    getData
}

export default googleAPI