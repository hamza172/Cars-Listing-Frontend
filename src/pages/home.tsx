import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { getHomeElectricCars, getHomeTopCars, getHomeBrands, getHomeHybridCars, getHomeHotCars, getHomeLatestCars } from "../functions/apiCalls"

export default function Home() {
    const [electricCars, setElectricCars] =  useState<any[]>([])
    const [topCars, setTopCars] =  useState<any[]>([])
    const [brands, setBrands] =  useState<any[]>([])
    const [hybrid, setHybrid] =  useState<any[]>([])
    const [hotCars, sethotCars] =  useState<any[]>([])
    const [latestCars, setLatestCars] =  useState<any[]>([])

    useEffect(()=>{ 
        getHomeElectricCars().then((x)=>setElectricCars(x || []))
        getHomeTopCars().then((x)=>setTopCars(x || []))
        getHomeBrands().then(x=>setBrands(x || []))
        getHomeHybridCars().then(x=>setHybrid(x || []))
        getHomeHotCars().then(x=>sethotCars(x || []))
        getHomeLatestCars().then(x=>setLatestCars(x || []))
    },[])    
    return(<>
         <div className='carousel-homepage'>
         <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= "/images/8960.jpeg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className="title-carousel">FIND the latest <span className="yellow-text">carS</span><br/>
                You Can <span className="yellow-text">compare</span> Cars side by side</h1>
                <p>Thinking of buying a car? Research new and Latest cars, compare vehicles , <br/>
                get car buying advice and reviews & more!<br/>
                Passenger cars, vans, light trucks and even margin cars or damaged vehicles,<br/>
                you’re sure to find what you’re looking for</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
         </div>
         <div className="container">
        <div className="pageCon">
            <div className="page-title"><span style={{float:"left"}}>Top Electric Cars</span> <span  style={{float:"right"}}><Link className='no-underline yellow-text' to="#">See More &gt;&gt;</Link></span></div>
            <div className="archive">
                <div className="row">
                    {(electricCars.length>0)&&<>
                        {electricCars.map((x)=><>
                        <div className="archive-item-4 col-md-3">
                                <img src={x.image}  alt="car"/>
                                <div className="archive-item-inner-4">
                                    <Link to={'/get-car/'+x.car_id} className='no-underline'>{x.brand} {x.generation} {x.startofproduction} </Link><br/>
                                    <span className="grey-text totalcars">Power HP : {x.power}</span>  <br/>
                                    <span className="grey-text totalcars">Brand : {x.brand}</span><br/>
                                </div>
                        </div>
                    </>)}
                    </>}
                </div>
            </div>
            {/* ------------------------ */}
            <div className="pageCon">
                <div className="page-title"><span style={{float:"left"}}>Top Cars</span> <span  style={{float:"right"}}><Link className='no-underline yellow-text' to="#">See More &gt;&gt;</Link></span></div>
                <div className="archive">
                    <div className="row">
                        {(topCars.length>0)&&<>
                            {topCars.map((x)=><>
                            <div className="col-md-6">
                                <div className="archive-item-cars">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <img src={x.image} alt="car" className='image-card-archive' />    
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
                    {/* ------------------------ */}
                    <div className="pageCon">
                        <div className="page-title"><span style={{float:"left"}}>Brands</span> <span  style={{float:"right"}}><Link className='no-underline yellow-text' to="#">See More &gt;&gt;</Link></span></div>
                        <div className="archive">
                            <div className="row">
                                {(brands.length>0)&&<>
                                    {brands.map((x)=><>
                                    <div className="archive-item col-md-2">
                                        <center >
                                            <img src={x.logo}  alt="car"/>
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
                    {/* ------------------------ */}
            <div className="pageCon">
                <div className="page-title"><span style={{float:"left"}}>Top Hybrid Cars</span> <span  style={{float:"right"}}><Link className='no-underline yellow-text' to="#">See More &gt;&gt;</Link></span></div>
                <div className="archive">
                    <div className="row">
                        {(hybrid.length>0)&&<>
                            {hybrid.map((x)=><>
                            <div className="col-md-6">
                                <div className="archive-item-cars">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <img src={x.image} alt="car" className='image-card-archive' />    
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
                    {/* ------------------------ */}
            <div className="pageCon">
                <div className="page-title"><span style={{float:"left"}}>Hot Cars</span> <span  style={{float:"right"}}><Link className='no-underline yellow-text' to="#">See More &gt;&gt;</Link></span></div>
                <div className="archive">
                    <div className="row">
                        {(hotCars.length>0)&&<>
                            {hotCars.map((x)=><>
                            <div className="col-md-6">
                                <div className="archive-item-cars">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <img src={x.image} alt="car" className='image-card-archive' />    
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
                    {/* --------------- */}
                    <div className="pageCon">
                <div className="page-title"><span style={{float:"left"}}>Discover Latest Cars</span> <span  style={{float:"right"}}><Link className='no-underline yellow-text' to="#">See More &gt;&gt;</Link></span></div>
                <div className="archive">
                    <div className="row">
                       
                        {(latestCars.length>0)&&<>
                        {latestCars.map((x)=><>
                        <div className="archive-item-4 col-md-3">
                                <img src={x.image}  alt="car"/>
                                <div className="archive-item-inner-4">
                                    <Link to={'/get-car/'+x.car_id} className='no-underline'>{x.brand} {x.generation} {x.startofproduction} </Link><br/>
                                    <span className="grey-text totalcars">Power HP : {x.power}</span>  <br/>
                                    <span className="grey-text totalcars">Brand : {x.brand}</span><br/>
                                </div>
                        </div>
                    </>)}
                    </>}
                        </div>
                    </div>    
                    </div>    

                </div>     
        </div>
    </div>
    </>)
}