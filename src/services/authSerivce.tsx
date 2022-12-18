import axios from 'axios'


export async function login(username, password) {
	logout()
    try{
        const res = await axios.get(process.env.REACT_APP_API_URL + '/login',{ params :{name:username, password:password}})
        localStorage.setItem('token', res.data)
        if (res.status=200)
            return true
    } catch(e) {
        console.log(e)
        return false
    } 
}

export function logout() {
	localStorage.removeItem('token')
	localStorage.removeItem('user')
}