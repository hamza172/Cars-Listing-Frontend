import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/loading"
import { getModel } from "../functions/apiCalls"
import { useParams } from "react-router-dom"
import { AiOutlineDoubleRight } from "react-icons/ai"
import { translation } from "../translation"

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
            <div className="page-title" style={{textTransform:"uppercase"}}>{brand} <span  style={{float:"right"}}><Link to="/all-brands" className='no-underline yellow-text'>{translation.allBrands[localStorage.getItem("language") || 'All Brands']}<AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
            <div className="archive">
                <div className="row">
                    {(data.length>0)&&<>
                        {data.map((x)=><>
                        <div className="col-md-6">
                        <Link to={'/brands-models-generation/'+brand+'/'+x.model} className='no-underline'>
                            <div className="archive-item-cars">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <img src={x.image || "https://qesot.com/images/placeholder-img.png"} alt="car" className='image-card-archive' />    
                                    </div>
                                    <div className="col-md-7">
                                        <h4 className='blue-text'>{x.model} </h4>
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