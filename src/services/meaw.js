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
    token ? {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    } : {})
    return res.data
}

export async function getSpeedLimit(place) {
    const res = await axios.get(`https://ecourse.cpe.ku.ac.th/exceed02/api/get/speed/${place}`)
    return res.data
}

export async function changeSpeedLimit(place, speed, token) {
    const res = await axios.put('https://ecourse.cpe.ku.ac.th/exceed02/api/speed/change', { place: place, speed_limit: speed},
    token ? {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    } : {})
    return res.data
}

export async function deleteLocation(place, token) {
    const res = await axios.delete('https://ecourse.cpe.ku.ac.th/exceed02/api/device/delete',
    token ? {
        data: place,
        headers: {
            'Authorization':'Bearer ' + token,
            'Content-Type': 'application/json'
        },
    } : {})
    return res.data
}

export async function deleteRecord(record, token) {
    const res = await axios.delete('https://ecourse.cpe.ku.ac.th/exceed02/api/record/delete',
    token ? {
        data: record,
        
        headers: {
            'Authorization':'Bearer ' + token,
            'Content-Type': 'application/json'
        },
    } : {})
    return res.data
}

export async function tickRecord(record, token) {
    const res = await axios.put('https://ecourse.cpe.ku.ac.th/exceed02/api/put/check/record', record,
    token ? {
        headers: {
            'Authorization':'Bearer ' + token,
            'Content-Type': 'application/json'
        },
    } : {})
    return res.data
}