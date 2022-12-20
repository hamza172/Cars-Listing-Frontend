import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/loading"
import { getModel } from "../functions/apiCalls"
import { useParams } from "react-router-dom"

export default function BrandModels() {
    let { brand } = useParams();
    const [data, setData] =  useState<any[]>([])
    useEffect(()=>{ 
        getModel(brand||'').then((x)=>setData(x))
    },[])
    console.log(data)
    return (<>
    { data.length>0 ?<div className="container">
        <div className="pageCon">
            <div className="page-title" style={{textTransform:"uppercase"}}>{brand}</div>
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
                                        <Link to={'/brands-models-generation/'+brand+'/'+x.model} className='no-underline'>{x.model} </Link><br/>
                                        <span className="grey-text totalcars">Cars Number: {x.cars}</span>  <br/>  
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