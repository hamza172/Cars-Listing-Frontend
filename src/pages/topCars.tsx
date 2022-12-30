import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/loading"
import { getAllCars } from "../functions/apiCalls"
import { translation } from "../translation"

export default function AllTopCars() {
    const [data, setData] =  useState<any[]>([])
    useEffect(()=>{ 
        getAllCars().then((x)=>setData(x))
    },[])

    return (<>
   {data.length>0? <div className="container">
        <div className="pageCon">
            <div className="page-title">Top Cars</div>
            <div className="archive">
                <div className="row">
                    {(data.length>0)&&<>
                        {data.map((x)=><>
                            <div className="col-md-6">
                            <Link to={'/get-car/'+x.car_id+'/'+x.brand.replace(/\s/g, '')+'-'+x.generation.replace(/\s/g, '')+'-'+x.startofproduction.replace(/\s/g, '')} className='no-underline'>
                                <div className="archive-item-cars">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-5">
                                            <img src={x.image || "https://qesot.com/images/placeholder-img.png"} alt="car" className='image-card-archive' />    
                                        </div>
                                        <div className="col-md-7 col-7">
                                            <h4 className='blue-text'>{x.brand} {x.generation} {x.startofproduction} </h4>
                                            <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className='lightgrey-text'>{x.brand}</span><br/>
                                            <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.power ? x.power : x.systempower}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Accelerationkmh[localStorage.getItem("language") || 'Acceleration 0 - 100 km/h']} : </span><span className='lightgrey-text'>{x.acceleration100}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']} : </span><span className='lightgrey-text'>{x.maximumspeed}</span>  <br/>  
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        
                    </>)}
                    </>}
                </div>
            </div>
        </div>
    </div>
        :
        <Loader/>}
    </>)
}