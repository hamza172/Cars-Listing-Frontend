import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/loading"
import { getComparisonCar } from "../functions/apiCalls"

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
                                    <div className='row'>
                                        <div className='col-6' >
                                            <img src={x.car1[0].image}  alt="car"/>
                                        </div>
                                        <div className='col-6'>
                                            <img src={x.car2[0].image}  alt="car"/>
                                        </div>
                                    </div>
                                    <div className="archive-item-inner-4">
                                     <center>
                                        <img className='vs-image' src="/images/vs.png" alt="vs"/>
                                        </center>
                                        <div className='row'>
                                            <div className='col-6' >
                                            <Link to={'/compare-two-cars/'+x.car1[0].car_id+'/'+x.car2[0].car_id} className='no-underline'>{x.car1[0].brand} {x.car1[0].generation} {x.car1[0].startofproduction} </Link>
                                                <span className="grey-text totalcars">Power HP : {x.car1[0].power}</span>  <br/>
                                                <span className="grey-text totalcars">Brand : {x.car1[0].brand}</span><br/>
                                            </div>
                                            <div className='col-6'>
                                            <Link to={'/compare-two-cars/'+x.car1[0].car_id+'/'+x.car2[0].car_id} className='no-underline'>{x.car2[0].brand} {x.car2[0].generation} {x.car2[0].startofproduction} </Link>
                                                <span className="grey-text totalcars">Power HP : {x.car2[0].power}</span>  <br/>
                                                <span className="grey-text totalcars">Brand : {x.car2[0].brand}</span><br/>
                                            </div>
                                        </div>
                                    </div>
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