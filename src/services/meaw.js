import axios from "axios"

export async function getDeviceRecords(place) {
    const res = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed02/api/record/street/${place}`)
    return res.data
}

export async function getLocations() {
    const res = await axios.get('https://ecourse.cpe.ku.ac.th/exceed02/api/record/all_street')
    return res.data
}

export async function addLocation(location, token) {
    const res = await axios.post('https://ecourse.cpe.ku.ac.th/exceed02/api/device/register', location, 
    {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    })
    return res.data
}