import { useEffect, useState } from "react"
import { getAllBrands } from "../functions/apiCalls"

export default function AllBrands() {
    const [data, setData] =  useState<any[]>([])
    useEffect(()=>{ 
        getAllBrands().then((x)=>setData(x))
    })

    return (<>
    <div className="container">
        <div className="pageCon">
            <div className="page-title">All Brands</div>
            <div className="archive">
                <div className="row">
                    {(data.length>0)&&<>
                        {data.map((x)=><>
                        <div className="archive-item col-md-2">
                            <center >
                                <img src={x.logo} />
                                <div className="archive-item-inner">
                                    <h4>{x.name}</h4>
                                    <span className="yellow-text totalcars">Total Cars: {x.cars}</span>    
                                </div>
                                </center>
                        </div>
                    </>)}
                    </>}
                </div>
            </div>
        </div>
    </div>

    </>)
}