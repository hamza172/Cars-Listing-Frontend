import axios from 'axios'

export async function getAllBrands(){
  try{
      let response = await axios.get(process.env.REACT_APP_API_URL + '/brands')
      return response.data
  } catch(e){
  console.log(e)
  }
}
export async function getAllHotCars(){
    try{
        let lang = localStorage.getItem('language')
        let response = await axios.get(process.env.REACT_APP_API_URL + '/hotCars?lang='+lang)
        return response.data
    } catch(e){
		console.log(e)
    }
}
export async function getAllCars(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/cars?lang='+lang)
      return response.data
  } catch(e){
  console.log(e)  
  }
}
export async function getHomeElectricCars(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/home/electric?lang='+lang)
      return response.data
  } catch(e){
  console.log(e)
  }
}
export async function getHomeTopCars(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/home/cars?lang='+lang)
      return response.data
  } catch(e){
  console.log(e)
  }
}
export async function getHomeBrands(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/home/brands?lang='+lang)
      return response.data
  } catch(e){
  console.log(e)
  }
}
export async function getHomeHybridCars(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/home/hybrid?lang='+lang)
      return response.data
  } catch(e){
  console.log(e)
  }
}
export async function getHomeHotCars(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/home/hotcars?lang='+lang)
      return response.data
  } catch(e){
  console.log(e)
  }
}
export async function getHomeLatestCars(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/home/latest?lang='+lang)
      return response.data
  } catch(e){
  console.log(e)
  }
}
