import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/loading"
import { getGeneration } from "../functions/apiCalls"
import { useParams } from "react-router-dom"
import { AiOutlineDoubleRight } from "react-icons/ai"
import { translation } from "../translation"

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
            <div className="page-title" style={{textTransform:"uppercase"}}>{brand} {model}<span  style={{float:"right"}}><Link to={"/brands-models/"+brand} className='no-underline yellow-text'>{brand}<AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
            <div className="archive">
                <div className="row">
                    {(data.length>0)&&<>
                        {data.map((x)=><>
                        <div className="col-md-6">
                        <Link to={'/brands-models-generation-cars/'+brand+'/'+model+'/'+x.generation} className='no-underline'>
                            <div className="archive-item-cars">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <img src={x.image || "https://qesot.com/images/placeholder-img.png"} alt="car" className='image-card-archive' />    
                                    </div>
                                    <div className="col-md-7">
                                        <h4 className='blue-text'>{x.generation} </h4>
                                        <span className="grey-text totalcars">Cars Number:</span><span className='lightgrey-text'> {x.cars}</span>  <br/>  
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