import { useState,useEffect } from 'react';
import { getSearch } from '../functions/apiCalls';
import { Link } from 'react-router-dom';
import Loader from '../components/loading';
import { useParams } from 'react-router-dom';

export default function Search(){
    let { key } = useParams();
    const [search,setSearch] = useState(key||'')
    const [data,setData] = useState<any[]>([])

    useEffect(()=>{ 
        getSearch(search).then((x)=>setData(x))
    },[])

    return (<>
        {data.length>0?<div className="container">
            <div className="pageCon">
                <div className="page-title">Search Results: {key}</div>
                <div className="archive">
                    <div className="row">
                        {(data.length>0)&&<>
                            {data.map((x)=><>
                            <div className="col-md-6">
                                <div className="archive-item-cars">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <img src={x.image}  alt="car" className='image-card-archive' />    
                                        </div>
                                        <div className="col-md-7">
                                            <Link to={'/get-car/'+x.car_id} className='no-underline'>{x.brand} {x.generation} {x.startofproduction} </Link><br/>
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
        </div>:
                <Loader/>}
    
        </>)
}