import axios from "axios"

export async function getDeviceRecords(place) {
    const res = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed02/api/record/street/${place}`)
    return res.data
}

export async function getLocations() {
    const res = await axios.get('https://ecourse.cpe.ku.ac.th/exceed02/api/record/all_street')
    return res.data
}

export async function addLocation() {
    
}