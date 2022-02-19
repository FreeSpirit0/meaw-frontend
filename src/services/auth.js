import axios from "axios"

export async function login(user) {
    const res = await axios.post('https://ecourse.cpe.ku.ac.th/exceed02/api/token', user)
    return res.data
}