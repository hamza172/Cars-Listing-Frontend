import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne, getHomeBrands, getHomeHotCars,getHomeTopCars } from "../functions/apiCalls";
import { Link } from "react-router-dom";
import Loader from "../components/loading";

export default function SingleCar(){
    let { id } = useParams();
    const [data, setData] =  useState<{[key: string]: any}>({});
    const [topCars, setTopCars] =  useState<any[]>([])
    const [brands, setBrands] =  useState<any[]>([])
    const [hotCars, sethotCars] =  useState<any[]>([])
    useEffect(()=>{ 
        getOne(parseInt(id||'')).then((x)=>setData(x))
        getHomeBrands().then(x=>setBrands(x || []))
        getHomeTopCars().then((x)=>setTopCars(x || []))
        getHomeHotCars().then(x=>sethotCars(x || []))
    },[data,id])
    console.log(data)
    return(<>
        {data.brand ?
            <div className="container">
                <div className="pageCon">
                     
                    <div className="col-md-12">
                        <div className="archive-item-cars">
                            <div className="row align-items-center p-3">
                                <h2><b>{data.brand} {data.generation} {data.startofproduction} </b></h2>
                                <div className="col-md-4">
                                    <img src={data.images[0].image} alt="car" className='single-image-card-archive' />    
                                </div>
                                <div className="col-md-8 p-4 single-page-carD">
                                    <span className="blue-text">Brand : </span><span className="grey-text totalcars">{data.brand}</span><br/>
                                    <span className="blue-text">Model: </span><span className="grey-text totalcars">{data.model}</span>  <br/>
                                    <span className="blue-text">Engine Type : </span><span className="grey-text totalcars">{data.fuelType}</span>  <br/>
                                    <span className="blue-text">Maximum speed : </span><span className="grey-text totalcars">{data.maximumspeed}</span>  <br/> 
                                    <span className="blue-text">Body Type : </span><span className="grey-text totalcars">{data.bodytype}</span>  <br/> 
                                    <span className="blue-text">Production Year : </span><span className="grey-text totalcars">{data.startofproduction}</span>  <br/>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pageCon">
                    <div className="image-holder-single">
                        {(data.images).map((item) => <><img src={item.image} alt="car-img"  /></>)}
                        
                    </div>
                </div>

                <div className="pageCon ">
                    <div className="page-title"><span style={{float:"left"}}>Technical Sheet: {data.brand} {data.generation} {data.startofproduction}</span></div>
                    <div className="container row p-4">
                        <div className="col-md-6 p-4">
                            <div className="row row-techsheet">
                                    <div className="col-6 blue-text">Acceleration 0 - 100 Km/h</div>
                                    <div className="col-6">{data.acceleration100}</div>
                                </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">All-electric Range (WLTP)</div>
                                <div className="col-6">-</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Battery Capacity</div>
                                <div className="col-6">-</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Doors</div>
                                <div className="col-6">{data.doors}</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Fuel Type</div>
                                <div className="col-6">{data.fuelType}</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Kerb Weight</div>
                                <div className="col-6">{data.kerbWeight}</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Modification (Engine)</div>
                                <div className="col-6">{data.modification}</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Seats</div>
                                <div className="col-6">{data.seats}</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">System Power</div>
                                <div className="col-6">-</div>
                            </div>
                        </div>
                        <div className="col-md-6 p-4">
                            <div className="row row-techsheet">
                                    <div className="col-6 blue-text">Acceleration 0 - 62 Mph</div>
                                    <div className="col-6">{data.acceleration62}</div>
                                </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Average Energy Consumption (WLTP)</div>
                                <div className="col-6">-</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Body Type</div>
                                <div className="col-6">{data.bodytype}</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Drive Wheel</div>
                                <div className="col-6">{data.drivewheel}</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Generation</div>
                                <div className="col-6">{data.generation}</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Maximum Speed</div>
                                <div className="col-6">{data.maximumspeed}</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Powertrain Architecture</div>
                                <div className="col-6">{data.powertrainArchitecture}</div>
                            </div>
                            <div className="row row-techsheet">
                                <div className="col-6 blue-text">Start Of Production</div>
                                <div className="col-6">{data.startofproduction}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>General</span> </div>
                            <div className="p-3">
                                <div className="p-4">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Body type</div>
                                        <div className="col-6">{data.bodytype}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Brand</div>
                                        <div className="col-6">{data.brand}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Doors</div>
                                        <div className="col-6">{data.doors}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Generation</div>
                                        <div className="col-6">{data.generation}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Model</div>
                                        <div className="col-6">{data.model}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Modification (Engine)</div>
                                        <div className="col-6">{data.modification}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Powertrain Architecture</div>
                                        <div className="col-6">{data.powertrainArchitecture}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Seats</div>
                                        <div className="col-6">{data.seats}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Start of production</div>
                                        <div className="col-6">{data.startofproduction}</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Performance</span> </div>
                            <div className="p-3">
                                <div className="p-4">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Acceleration 0 - 100 km/h</div>
                                        <div className="col-6">{data.acceleration100}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Acceleration 0 - 60 mph</div>
                                        <div className="col-6">{data.acceleration60}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Acceleration 0 - 62 mph</div>
                                        <div className="col-6">{data.acceleration60}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel Type</div>
                                        <div className="col-6">{data.fuelType}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel consumption (economy) - combined (NEDC)</div>
                                        <div className="col-6">{data.fuelconsumptionCombined}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel consumption (economy) - extra urban (NEDC)</div>
                                        <div className="col-6">{data.fuelconsumptionExtraurban}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel consumption (economy) - urban (NEDC)</div>
                                        <div className="col-6">{data.fuelconsumptionUrban}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Maximum Speed</div>
                                        <div className="col-6">{data.maximumspeed}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Dimensions</span> </div>
                            <div className="p-3">
                                <div className="p-4">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Drag coefficient (Cd)</div>
                                        <div className="col-6">{data.dragcoefficient}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Front track	</div>
                                        <div className="col-6">{data.fronttrack}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Height</div>
                                        <div className="col-6">{data.height}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Length</div>
                                        <div className="col-6">{data.length}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Minimum turning circle</div>
                                        <div className="col-6">{data.minimumturningcircle}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Rear (Back) track</div>
                                        <div className="col-6">{data.rearTrack}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Wheelbase</div>
                                        <div className="col-6">{data.wheelbase}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Width</div>
                                        <div className="col-6">{data.width}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Engine</span> </div>
                            <div className="p-3">
                                <div className="p-4">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Compression ratio	</div>
                                        <div className="col-6">{data.compressionratio}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Cylinder Bore</div>
                                        <div className="col-6">{data.cylinderBore}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine aspiration</div>
                                        <div className="col-6">{data.engineaspiration}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine displacement</div>
                                        <div className="col-6">{data.enginedisplacement}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine oil capacity	</div>
                                        <div className="col-6">{data.engineoilcapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel System</div>
                                        <div className="col-6">{data.fuelSystem}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Model Engine</div>
                                        <div className="col-6">{data.modelEngine}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Number of cylinders</div>
                                        <div className="col-6">{data.numberofcylinders}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Number of valves per cylinder</div>
                                        <div className="col-6">{data.numberofvalvespercylinder}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Position of cylinders</div>
                                        <div className="col-6">{data.positionofcylinders}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Power</div>
                                        <div className="col-6">{data.power}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Torque</div>
                                        <div className="col-6">{data.torque}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Electric</span> </div>
                            <div className="p-3">
                                <div className="p-4">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Battery capacity</div>
                                        <div className="col-6">{data.batterycapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Average Energy consumption (WLTP)</div>
                                        <div className="col-6">{data.averageenergyconsumptionwltp}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine location number 1</div>
                                        <div className="col-6">{data.enginelocationnumber1}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine location number 2	</div>
                                        <div className="col-6">{data.enginelocationnumber2}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">System power</div>
                                        <div className="col-6">{data.systempower}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">System torque</div>
                                        <div className="col-6">{data.systemtorque}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Average Energy consumption</div>
                                        <div className="col-6">{data.averageenergyconsumption}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Electric motor power number 1</div>
                                        <div className="col-6">{data.electricmotorpowernumber1}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Electric motor power number 2	</div>
                                        <div className="col-6">{data.electricmotorpowernumber2}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Electric Range	</div>
                                        <div className="col-6">{data.electricrange}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Drivetrain</span> </div>
                            <div className="p-3">
                                <div className="p-4">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Drive wheel</div>
                                        <div className="col-6">{data.drivewheel}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Front brakes</div>
                                        <div className="col-6">{data.frontbrakes}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Front suspension</div>
                                        <div className="col-6">{data.frontsuspension}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Number of Gears (automatic transmission)</div>
                                        <div className="col-6">{data.numberofGears}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Power steering</div>
                                        <div className="col-6">{data.powersteering}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Rear brakes</div>
                                        <div className="col-6">{data.rearbrakes}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Rear suspension</div>
                                        <div className="col-6">{data.rearsuspension}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Steering type</div>
                                        <div className="col-6">{data.steeringtype}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Tires size	</div>
                                        <div className="col-6">{data.tiressize}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Wheel rims size</div>
                                        <div className="col-6">{data.wheelrimssize}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Space</span> </div>
                            <div className="p-3">
                                <div className="p-4">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel tank capacity	</div>
                                        <div className="col-6">{data.fueltankcapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Kerb Weight</div>
                                        <div className="col-6">{data.kerbWeight}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Max load</div>
                                        <div className="col-6">{data.maxload}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Max weight</div>
                                        <div className="col-6">{data.maxweight}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <div className="pageCon ">
                    <div className="page-title"><span style={{float:"left"}}>More Cars</span> </div>
                    <div className="p-3">
                        {(topCars.length>0)&&<>
                            {topCars.map((x)=><>
                                <div className="archive-item-cars">
                                    <div className="row align-items-center">
                                        <div className="col-md-5">
                                            <img src={x.image} alt="car" className='image-card-archive' />    
                                        </div>
                                        <div className="col-md-7 fontsizesmall">
                                            <Link to={'/get-car/'+x.car_id} className='no-underline'>{x.brand} {x.generation} {x.startofproduction} </Link><br/>
                                            <span className="grey-text totalcars">Brand : {x.brand}</span><br/>
                                            <span className="grey-text totalcars">Power HP : {x.power}</span>  <br/>
                                            <span className="grey-text totalcars">Acceleration 0 - 100 km/h : {x.acceleration100}</span>  <br/>
                                            <span className="grey-text totalcars">Maximum speed : {x.maximumspeed}</span>  <br/>  
                                        </div>
                                    </div>
                                </div>
                            
                        </>)}
                        </>}
                    </div>
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
                                                <Link to={'/brands-models/'+x.name} className="no-underline white-text">{x.name}</Link><br/>
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
            </div>:
            <Loader/>}
    </>)
}