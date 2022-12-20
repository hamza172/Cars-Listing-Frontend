import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/loading"
import { getGeneration } from "../functions/apiCalls"
import { useParams } from "react-router-dom"

export default function GenerationModel() {
    let { model,brand } = useParams();
    const [data, setData] =  useState<any[]>([])
    useEffect(()=>{ 
        getGeneration(brand||'',model||'').then((x)=>setData(x))
    },[])
    console.log(data)
    return (<>
    { data.length>0 ?<div className="container">
        <div className="pageCon">
            <div className="page-title" style={{textTransform:"uppercase"}}>{model}</div>
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
                                        <Link to={'/brands-models-generation-cars/'+brand+'/'+model+'/'+x.generation} className='no-underline'>{x.generation} </Link><br/>
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