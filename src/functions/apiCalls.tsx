import axios from 'axios'

export async function getAllBrands(){
    try{
        let response = await axios.get(process.env.REACT_APP_API_URL + '/brands')
        return response.data
    } catch(e){
		console.log(e)
    }
}