import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/loading"
import { getAllBrands } from "../functions/apiCalls"
import { translation } from "../translation"

export default function AllBrands() {
    const [data, setData] =  useState<any[]>([])
    useEffect(()=>{ 
        getAllBrands().then((x)=>setData(x))
    },[])

    return (<>
    {data.length>0 ? <div className="container">
        <div className="pageCon">
            <div className="page-title">{translation.allBrands[localStorage.getItem("language") || 'All Brands']}</div>
            <div className="archive">
                <div className="row">
                    {(data.length>0)&&<>
                        {data.map((x)=><>
                        <div className="archive-item col-lg-2 col-sm-4 col-xs-4 col-4">
                            <Link to={'/brands-models/'+x.name} className="no-underline white-text">
                                <center >
                                    <img src={x.logo}  alt="car"/>
                                    <div className="archive-item-inner">
                                        <h4 className="white-text">{x.name}</h4>
                                        <span className="yellow-text totalcars">{translation.totalCars[localStorage.getItem("language") || 'Total Cars']} : {x.cars}</span>    
                                    </div>
                                </center>
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