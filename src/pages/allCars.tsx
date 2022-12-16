import { useEffect, useState } from "react"
import { getAllCars } from "../functions/apiCalls"

export default function AllCars() {
    const [data, setData] =  useState<any[]>([])
    useEffect(()=>{ 
        getAllCars().then((x)=>setData(x))
    },[])

    return (<>
    <div className="container">
        <div className="pageCon">
            <div className="page-title">All Cars</div>
            <div className="archive">
                <div className="row">
                    {(data.length>0)&&<>
                        {data.map((x)=><>
                        <div className="col-md-6">
                            <div className="archive-item-cars">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <img src={x.image} alt="car" className='image-card-archive' />    
                                    </div>
                                    <div className="col-md-7">
                                        <h4>{x.brand} {x.generation} {x.startofproduction} </h4>
                                        <span className="grey-text totalcars">Brand : {x.brand}</span><br/>
                                        <span className="grey-text totalcars">Power HP : {x.power}</span>  <br/>
                                        <span className="grey-text totalcars">Acceleration 0 - 100 km/h : {x.acceleration100}</span>  <br/>
                                        <span className="grey-text totalcars">Maximum speed : {x.maximumspeed}</span>  <br/>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </>)}
                    </>}
                </div>
            </div>
        </div>
    </div>

    </>)
}