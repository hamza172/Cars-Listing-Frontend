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
export async function getAllElectricCars(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/cars/electric?lang='+lang)
      return response.data
  } catch(e){
  console.log(e)  
  }
}

export async function getAllHybridCars(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/cars/hybrid?lang='+lang)
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
export async function getHomeComparisonCar(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/home/compare?lang='+lang)
      return response.data
  } catch(e){
  console.log(e)
  }
}

export async function getComparisonCar(){
  try{
      let lang = localStorage.getItem('language')
      let response = await axios.get(process.env.REACT_APP_API_URL + '/compare?lang='+lang)
      return response.data
  } catch(e){
  console.log(e)
  }
}

export async function removeCompareCar(id:Number){
  try{
    let token = localStorage.getItem('token')
    let response = await axios.delete(process.env.REACT_APP_API_URL + '/compare?id='+id+'&token='+token)
    return true
  } catch(e){
    console.log(e)
  }
}

export async function removeCar(id:Number){
  try{
    let token = localStorage.getItem('token')
    let response = await axios.delete(process.env.REACT_APP_API_URL + '/cars?car_id='+id+'&token='+token)
    return true
  } catch(e){
    console.log(e)
  }
}

export async function addCompare(id1,id2){
  try{
    let token = localStorage.getItem('token')
    console.log(id1)
    console.log(id2)
    console.log(token)
    let response = await axios.post(process.env.REACT_APP_API_URL + '/compare',{token: token, car1: id1,car2:id2})
    return true
  } catch(e){
    console.log(e)
  }
}


export async function getOne(id:Number){
  try{
    let lang = localStorage.getItem('language')
    let response = await axios.get(process.env.REACT_APP_API_URL + '/cars/'+id+'?lang='+lang)
    return response.data[0]
  } catch(e){
    console.log(e)
  }
}

export async function getSearch(key:String){
  try{
    let lang = localStorage.getItem('language')
    let response = await axios.get(process.env.REACT_APP_API_URL + '/cars/key?lang='+lang+'&key='+key)
    return response.data
  } catch(e){
    console.log(e)
  }
}
export async function getModel(key:String){
  try{
    let lang = localStorage.getItem('language')
    let response = await axios.get(process.env.REACT_APP_API_URL + '/brands/model?lang='+lang+'&brand='+key)
    return response.data
  } catch(e){
    console.log(e)
  }
}
export async function getGeneration(brand:String,model:String){
  try{
    let lang = localStorage.getItem('language')
    let response = await axios.get(process.env.REACT_APP_API_URL + '/brands/generation?lang='+lang+'&brand='+brand+'&model='+model)
    return response.data
  } catch(e){
    console.log(e)
  }
}

export async function getGenerationCars(brand:String,model:String,gen:String){
  try{
    let lang = localStorage.getItem('language')
    let response = await axios.get(process.env.REACT_APP_API_URL + '/brands/specific?lang='+lang+'&brand='+brand+'&model='+model+'&generation='+gen)
    return response.data
  } catch(e){
    console.log(e)
  }
}
export async function toHotCar(id:Number){
  try{
    let token = localStorage.getItem('token')
    console.log(token)
    console.log(id)
    let response = await axios.put(process.env.REACT_APP_API_URL + '/hotCars/set?car_id='+id+'&token='+token)
    return true
  } catch(e){
    console.log(e)
  }
}

export async function removeHotCar(id:Number){
  try{
    let token = localStorage.getItem('token')
    let response = await axios.put(process.env.REACT_APP_API_URL + '/hotCars/unset?car_id='+id+'&token='+token)
    return true
  } catch(e){
    console.log(e)
  }
}




export async function scrap(){
  try{
    console.log("asd")
    var time= new Date()
    localStorage.setItem('scrapTime',(time.getTime()).toString())
    let response = await axios.put(process.env.SCRAPPING_APP_API_URL + '/scrapping')
    return true
  } catch(e){
    console.log(e)
  }
}