import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/loading"
import { getComparisonCar } from "../functions/apiCalls"
import { translation } from "../translation"

export default function AllCompares() {
    const [data, setData] =  useState<any[]>([])
    useEffect(()=>{ 
        getComparisonCar().then((x)=>setData(x))
    },[])

    return (<>
    { data.length>0 ?<div className="container">
        <div className="pageCon">
            <div className="page-title">All Compares</div>
            <div className="archive">
                <div className="row">
                        {(data.length>0)&&<>
                            {data.map((x)=><>
                                <div className="archive-item-4 col-md-6">
                            <Link to={'/compare-two-cars/'+x.car1[0].car_id+'/'+x.car2[0].car_id} className='no-underline'>    
                                   <div className='compare_images'>
                                            <img src={x.car1[0].image || "https://qesot.com/images/placeholder-img.png"} className="compare-1st-image"  alt="car"/>
                                            <img src={x.car2[0].image || "https://qesot.com/images/placeholder-img.png"} className="compare-2nd-image" alt="car"/>
                                    </div>
                                    <div className="archive-item-inner-4">
                                     <center>
                                        <img className='vs-image' src="/images/vs.png" alt="vs"/>
                                        </center> <h4 className='blue-text'>{x.car1[0].brand} {x.models} {x.car1[0].generation} {x.car1[0].startofproduction} VS {x.car2[0].brand} {x.models} {x.car2[0].generation} {x.car2[0].startofproduction}</h4>
                                    
                                        <div className='row'>
                                            <div className='col-6' >
                                                <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.car1[0].power}</span>  <br/>
                                                <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className='lightgrey-text'>{x.car1[0].brand}</span><br/>
                                            </div>
                                            <div className='col-6'>
                                                <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.car2[0].power}</span>  <br/>
                                                <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className='lightgrey-text'>{x.car2[0].brand}</span><br/>
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
    </div>:
            <Loader/>}

    </>)
}