import { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import { AiOutlineDoubleLeft,AiOutlineDoubleRight } from 'react-icons/ai';
import { FaFacebookF,FaTwitter,FaYoutube,FaInstagram } from 'react-icons/fa';
import { translation } from '../translation';
import { getHomeElectricCars, getHomeTopCars, getHomeBrands, getHomeComparisonCar, getHomeHybridCars, getHomeHotCars, getHomeLatestCars } from "../functions/apiCalls"

export default function Home() {
    const [electricCars, setElectricCars] =  useState<any[]>([])
    const [topCars, setTopCars] =  useState<any[]>([])
    const [brands, setBrands] =  useState<any[]>([])
    const [hybrid, setHybrid] =  useState<any[]>([])
    const [hotCars, sethotCars] =  useState<any[]>([])
    const [latestCars, setLatestCars] =  useState<any[]>([])
    const [compareCars, setCompareCars] =  useState<any[]>([])

    useEffect(()=>{ 
        getHomeElectricCars().then((x)=>setElectricCars(x || []))
        getHomeTopCars().then((x)=>setTopCars(x || []))
        getHomeBrands().then(x=>setBrands(x || []))
        getHomeHybridCars().then(x=>setHybrid(x || []))
        getHomeHotCars().then(x=>sethotCars(x || []))
        getHomeComparisonCar().then(x=>setCompareCars(x || []))
        getHomeLatestCars().then(x=>setLatestCars(x || []))
    },[])    
    return(<>
         <div className='carousel-homepage'>
         <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100 sliderImage"
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
            <div className='social-icons-home'>
                <a href='https://www.facebook.com'><FaFacebookF/></a>
                <a href='https://www.twitter.com'><FaTwitter/></a>
                <a href='https://www.youtube.com'><FaYoutube/></a>
                <a href='https://www.instagram.com'><FaInstagram/></a>
            </div>
         </div>
         <div className="container">
        <div className="pageCon" style={{marginBottom:"0px"}}>
            <div className="page-title"><span style={{float:"left"}}>{translation.topElectricCars[localStorage.getItem("language") || 'Top Electric Cars']} </span> <span  style={{float:"right"}}><Link to="/all-electric-cars" className='no-underline yellow-text'>{translation.seeMore[localStorage.getItem("language") || 'See More']} <AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
            <div className="archive">
                <div className="row">
                    {(electricCars.length>0)&&<>
                        {electricCars.map((x)=><>
                        <div className="archive-item-4 col-md-3 col-6">
                            <Link to={'/get-car/'+x.car_id+'/'+x.brand.replace(/\s/g, '')+'-'+x.generation.replace(/\s/g, '')+'-'+x.startofproduction.replace(/\s/g, '')} className='no-underline grey-text'>
                                <img src={x.image || "https://qesot.com/images/placeholder-img.png"}  alt="car"/>
                                <div className="archive-item-inner-4">
                                    <h4 className='blue-text'>{x.brand} {x.models} {x.generation} {x.startofproduction} </h4>    
                                    <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.power ? x.power : x.systempower}</span>  <br/>
                                    <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} :</span><span className='lightgrey-text'>{x.brand}</span><br/>
                                </div>    
                            </Link>
                        </div>
                    </>)}
                    </>}
                </div>
            </div>
            <div className="page-title"><span style={{float:"left"}}>{translation.compareCars[localStorage.getItem("language") || 'Popular Compare Cars']}</span> <span  style={{float:"right"}}><Link to="/all-compare-cars"  className='no-underline yellow-text'>{translation.seeMore[localStorage.getItem("language") || 'See More']} <AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
                <div className="archive">
                    <div className="row">
                        {(compareCars.length>0)&&<>
                            {compareCars.map((x)=><>
                            <div className="archive-item-4 col-md-6">
                            <Link to={'/compare-two-cars/'+x.car1[0].car_id+'/'+x.car2[0].car_id} className='no-underline'>
                                    <div className='compare_images'>
                                            <img src={x.car1[0].image || "https://qesot.com/images/placeholder-img.png"} className="compare-1st-image"  alt="car"/>
                                            <img src={x.car2[0].image || "https://qesot.com/images/placeholder-img.png"} className="compare-2nd-image" alt="car"/>
                                    </div>
                                    <div className="archive-item-inner-4">
                                     <center>
                                        <img  className='vs-image' src="/images/vs.png" alt="vs"/>
                                        </center> <h4 className='blue-text'>{x.car1[0].brand} {x.models} {x.car1[0].generation} {x.car1[0].startofproduction} VS {x.car2[0].brand} {x.models} {x.car2[0].generation} {x.car2[0].startofproduction}</h4>
                                    
                                        <div className='row'>
                                            <div className='col-6' >
                                                <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} :</span><span className='lightgrey-text'> {x.car1[0].power}</span>  <br/>
                                                <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className='lightgrey-text'>{x.car1[0].brand}</span><br/>
                                            </div>
                                            <div className='col-6'>
                                                <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.car2[0].power}</span>  <br/>
                                                <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className='lightgrey-text'>{x.car2[0].brand}</span><br/>
                                            </div>
                                        </div>
                                    </div>
                                    </Link>
                            </div>
                        </>)}
                        </>}
                        </div>
                    </div>    
                    <center><Link to='/compare-cars/' className='no-underline'><Button><AiOutlineDoubleRight style={{marginRight:"10px"}}/>{translation.chooseCarsToCompare[localStorage.getItem("language") || 'Choose Cars to Compare']}<AiOutlineDoubleLeft style={{marginLeft:"10px"}}/></Button></Link></center> 
            {/* ------------------------ */}
            <div className="pageCon" style={{marginBottom:"0px"}}>
                <div className="page-title"><span style={{float:"left"}}>{translation.topCars[localStorage.getItem("language") || 'Top Cars']}</span> <span  style={{float:"right"}}><Link to="/all-cars" className='no-underline yellow-text'>{translation.seeMore[localStorage.getItem("language") || 'See More']} <AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
                <div className="archive">
                    <div className="row">
                        {(topCars.length>0)&&<>
                            {topCars.map((x)=><>
                            <div className="col-md-6">
                            <Link to={'/get-car/'+x.car_id+'/'+x.brand.replace(/\s/g, '')+'-'+x.generation.replace(/\s/g, '')+'-'+x.startofproduction.replace(/\s/g, '')} className='no-underline'>
                                <div className="archive-item-cars">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-5">
                                            <img src={x.image || "https://qesot.com/images/placeholder-img.png"} alt="car" className='image-card-archive' />    
                                        </div>
                                        <div className="col-md-7 col-7">
                                            <h4 className='blue-text'>{x.brand} {x.models} {x.generation} {x.startofproduction} </h4>
                                            <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className='lightgrey-text'>{x.brand}</span><br/>
                                            <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.power}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Accelerationkmh[localStorage.getItem("language") || 'Acceleration 0 - 100 km/h']} : </span><span className='lightgrey-text'>{x.acceleration100}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']} : </span><span className='lightgrey-text'>{x.maximumspeed}</span>  <br/>  
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            
                        </>)}
                        </>}
                        </div>
                    </div>    

                    {/* ------------------------ */}
                    <div className="pageCon" style={{marginBottom:"0px",marginTop:"0px"}}>
                        <div className="page-title"><span style={{float:"left"}}>{translation.carBrands[localStorage.getItem("language") || 'Brands']}</span> <span  style={{float:"right"}}><Link to="/all-brands" className='no-underline yellow-text'>{translation.seeMore[localStorage.getItem("language") || 'See More']}<AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
                        <div className="archive">
                            <div className="row">
                                {(brands.length>0)&&<>
                                    {brands.map((x)=><>
                                    <div className="archive-item col-lg-2 col-sm-4 col-xs-4 col-4">
                                    <Link to={'/brands-models/'+x.name} className="no-underline white-text">
                                        <center >
                                            <img src={x.logo}  alt="car"/>
                                            <div className="archive-item-inner">
                                                <h4>{x.name}</h4>
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
                    {/* ------------------------ */}
            <div className="pageCon" style={{marginBottom:"0px",marginTop:"0px"}}>
                <div className="page-title"><span style={{float:"left"}}>{translation.topHybridCars[localStorage.getItem("language") || 'Top Hybrid Cars']}</span> <span  style={{float:"right"}}><Link className='no-underline yellow-text' to="/all-hybrid-cars">{translation.seeMore[localStorage.getItem("language") || 'See More']} <AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
                <div className="archive">
                    <div className="row">
                        {(hybrid.length>0)&&<>
                            {hybrid.map((x)=><>
                                <div className="col-md-6">
                            <Link to={'/get-car/'+x.car_id+'/'+x.brand.replace(/\s/g, '')+'-'+x.generation.replace(/\s/g, '')+'-'+x.startofproduction.replace(/\s/g, '')} className='no-underline'>
                                <div className="archive-item-cars">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-5">
                                            <img src={x.image|| "https://qesot.com/images/placeholder-img.png"} alt="car" className='image-card-archive' />    
                                        </div>
                                        <div className="col-md-7 col-7">
                                            <h4 className='blue-text'>{x.brand} {x.models} {x.generation} {x.startofproduction} </h4>
                                            <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className='lightgrey-text'>{x.brand}</span><br/>
                                            <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.power}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Accelerationkmh[localStorage.getItem("language") || 'Acceleration 0 - 100 km/h']} : </span><span className='lightgrey-text'>{x.acceleration100}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']} : </span><span className='lightgrey-text'>{x.maximumspeed}</span>  <br/>  
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
                    {/* ------------------------ */}
            <div className="pageCon" style={{marginBottom:"0px",marginTop:"0px"}}>
                <div className="page-title"><span style={{float:"left"}}>{translation.hotCars[localStorage.getItem("language") || 'Hot Cars']}</span> <span  style={{float:"right"}}><Link className='no-underline yellow-text' to="/hot-cars">{translation.seeMore[localStorage.getItem("language") || 'See More']} <AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
                <div className="archive">
                    <div className="row">
                        {(hotCars.length>0)&&<>
                            {hotCars.map((x)=><>
                                <div className="col-md-6">
                            <Link to={'/get-car/'+x.car_id+'/'+x.brand.replace(/\s/g, '')+'-'+x.generation.replace(/\s/g, '')+'-'+x.startofproduction.replace(/\s/g, '')} className='no-underline'>
                                <div className="archive-item-cars">
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-5">
                                            <img src={x.image|| "https://qesot.com/images/placeholder-img.png"} alt="car" className='image-card-archive' />    
                                        </div>
                                        <div className="col-md-7 col-7">
                                            <h4 className='blue-text'>{x.brand} {x.models} {x.generation} {x.startofproduction} </h4>
                                            <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className='lightgrey-text'>{x.brand}</span><br/>
                                            <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.power}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Accelerationkmh[localStorage.getItem("language") || 'Acceleration 0 - 100 km/h']} : </span><span className='lightgrey-text'>{x.acceleration100}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']} :</span><span className='lightgrey-text'> {x.maximumspeed}</span>  <br/>  
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
                    {/* --------------- */}
                    <div className="pageCon" style={{marginBottom:"0px",marginTop:"0px"}}>
                <div className="page-title"><span style={{float:"left"}}>{translation.discoverLatestCars[localStorage.getItem("language") || 'Discover Latest Cars']}</span> <span  style={{float:"right"}}><Link to="/all-cars" className='no-underline yellow-text'>{translation.seeMore[localStorage.getItem("language") || 'See More']} <AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
                <div className="archive">
                    <div className="row">
                       
                        {(latestCars.length>0)&&<>
                        {latestCars.map((x)=><>
                        <div className="archive-item-4 col-md-3 col-6">
                            <Link to={'/get-car/'+x.car_id+'/'+x.brand.replace(/\s/g, '')+'-'+x.generation.replace(/\s/g, '')+'-'+x.startofproduction.replace(/\s/g, '')} className='no-underline grey-text'>
                                <img src={x.image || "https://qesot.com/images/placeholder-img.png"}  alt="car"/>
                                <div className="archive-item-inner-4">
                                    <h4 className='blue-text'>{x.brand} {x.models} {x.generation} {x.startofproduction} </h4>    
                                    <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.power}</span>  <br/>
                                    <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className='lightgrey-text'>{x.brand}</span><br/>
                                </div>    
                            </Link>
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