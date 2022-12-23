import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne, getHomeBrands, getHomeHotCars,getHomeTopCars } from "../functions/apiCalls";
import { Link } from "react-router-dom";
import Loader from "../components/loading";
import ModelGallery from "../components/modal";

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
    },[id])
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
                                    {data.brand && <><span className="blue-text">Brand : </span><span className="grey-text totalcars">{data.brand}</span><br/></>}
                                    {data.model && <><span className="blue-text">Model: </span><span className="grey-text totalcars">{data.model}</span>  <br/></>}
                                    {data.fuelType && <><span className="blue-text">Engine Type : </span><span className="grey-text totalcars">{data.fuelType}</span>  <br/></>}
                                    {data.maximumspeed && <><span className="blue-text">Maximum speed : </span><span className="grey-text totalcars">{data.maximumspeed}</span>  <br/></>} 
                                    {data.bodytype && <><span className="blue-text">Body Type : </span><span className="grey-text totalcars">{data.bodytype}</span>  <br/></>} 
                                    {data.startofproduction && <><span className="blue-text">Production Year : </span><span className="grey-text totalcars">{data.startofproduction}</span>  <br/></>}  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pageCon">
                    <div className="image-holder-single">
                        <ModelGallery images={data.images} />
                        
                    </div>
                </div>

                <div className="pageCon ">
                    <div className="page-title"><span style={{float:"left"}}>Technical Sheet: {data.brand} {data.generation} {data.startofproduction}</span></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-4">
                            {data.acceleration100 && <div className="row row-techsheet">
                                    <div className="col-6 blue-text">Acceleration 0 - 100 Km/h</div>
                                    <div className="col-6">{data.acceleration100}</div>
                            </div>}
                            {data.electricrange && <div className="row row-techsheet">
                                <div className="col-6 blue-text">All-electric Range (WLTP)</div>
                                <div className="col-6">{data.electricrange}</div>
                            </div>}
                            {data.batterycapacity && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Battery Capacity</div>
                                <div className="col-6">{data.batterycapacity}</div>
                            </div>}
                            {data.doors && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Doors</div>
                                <div className="col-6">{data.doors}</div>
                            </div>}
                            {data.fuelType && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Fuel Type</div>
                                <div className="col-6">{data.fuelType}</div>
                            </div>}
                            {data.kerbWeight && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Kerb Weight</div>
                                <div className="col-6">{data.kerbWeight}</div>
                            </div>}
                            {data.modification && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Modification (Engine)</div>
                                <div className="col-6">{data.modification}</div>
                            </div>}
                            {data.seats && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Seats</div>
                                <div className="col-6">{data.seats}</div>
                            </div>}
                            {data.systempower && <div className="row row-techsheet">
                                <div className="col-6 blue-text">System Power</div>
                                <div className="col-6">{data.systempower}</div>
                            </div>}
                        </div>
                        <div className="col-md-6 p-4">
                            {data.acceleration62 && <div className="row row-techsheet">
                                    <div className="col-6 blue-text">Acceleration 0 - 62 Mph</div>
                                    <div className="col-6">{data.acceleration62}</div>
                                </div>}
                           {data.averageenergyconsumptionwltp && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Average Energy Consumption (WLTP)</div>
                                <div className="col-6">{data.averageenergyconsumptionwltp}</div>
                            </div>}
                            {data.bodytype && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Body Type</div>
                                <div className="col-6">{data.bodytype}</div>
                            </div>}
                            {data.drivewheel && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Drive Wheel</div>
                                <div className="col-6">{data.drivewheel}</div>
                            </div>}
                            {data.generation && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Generation</div>
                                <div className="col-6">{data.generation}</div>
                            </div>}
                            {data.maximumspeed && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Maximum Speed</div>
                                <div className="col-6">{data.maximumspeed}</div>
                            </div>}
                            {data.powertrainArchitecture && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Powertrain Architecture</div>
                                <div className="col-6">{data.powertrainArchitecture}</div>
                            </div>}
                            {data.startofproduction && <div className="row row-techsheet">
                                <div className="col-6 blue-text">Start Of Production</div>
                                <div className="col-6">{data.startofproduction}</div>
                            </div>}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="pageCon ">
                            <div className="page-title blue-bg"><span style={{float:"left"}}>General</span> </div>
                            <div className="">
                                <div className="p-4">
                                    {data.bodytype && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Body type</div>
                                        <div className="col-6">{data.bodytype}</div>
                                    </div>}
                                    {data.brand && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Brand</div>
                                        <div className="col-6">{data.brand}</div>
                                    </div>}
                                    {data.doors && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Doors</div>
                                        <div className="col-6">{data.doors}</div>
                                    </div>}
                                    {data.generation && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Generation</div>
                                        <div className="col-6">{data.generation}</div>
                                    </div>}
                                    {data.model && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Model</div>
                                        <div className="col-6">{data.model}</div>
                                    </div>}
                                    {data.modification && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Modification (Engine)</div>
                                        <div className="col-6">{data.modification}</div>
                                    </div>}
                                    {data.powertrainArchitecture && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Powertrain Architecture</div>
                                        <div className="col-6">{data.powertrainArchitecture}</div>
                                    </div>}
                                    {data.seats && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Seats</div>
                                        <div className="col-6">{data.seats}</div>
                                    </div>}
                                    {data.startofproduction && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Start of production</div>
                                        <div className="col-6">{data.startofproduction}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className="pageCon ">
                            <div className="page-title blue-bg"><span style={{float:"left"}}>Performance</span> </div>
                            <div className="">
                                <div className="p-4">
                                    {data.acceleration100 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Acceleration 0 - 100 km/h</div>
                                        <div className="col-6">{data.acceleration100}</div>
                                    </div>}
                                    {data.acceleration60 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Acceleration 0 - 60 mph</div>
                                        <div className="col-6">{data.acceleration60}</div>
                                    </div>}
                                    {data.acceleration60 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Acceleration 0 - 62 mph</div>
                                        <div className="col-6">{data.acceleration60}</div>
                                    </div>}
                                    {data.fuelType && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel Type</div>
                                        <div className="col-6">{data.fuelType}</div>
                                    </div>}
                                    {data.fuelconsumptionCombined && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel consumption (economy) - combined (NEDC)</div>
                                        <div className="col-6">{data.fuelconsumptionCombined}</div>
                                    </div>}
                                    {data.fuelconsumptionExtraurban && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel consumption (economy) - extra urban (NEDC)</div>
                                        <div className="col-6">{data.fuelconsumptionExtraurban}</div>
                                    </div>}
                                    {data.fuelconsumptionUrban && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel consumption (economy) - urban (NEDC)</div>
                                        <div className="col-6">{data.fuelconsumptionUrban}</div>
                                    </div>}
                                    {data.maximumspeed && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Maximum Speed</div>
                                        <div className="col-6">{data.maximumspeed}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>Dimensions</span> </div>
                            <div className="">
                                <div className="p-4">
                                    {data.dragcoefficient && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Drag coefficient (Cd)</div>
                                        <div className="col-6">{data.dragcoefficient}</div>
                                    </div>}
                                    {data.fronttrack && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Front track	</div>
                                        <div className="col-6">{data.fronttrack}</div>
                                    </div>}
                                    {data.height && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Height</div>
                                        <div className="col-6">{data.height}</div>
                                    </div>}
                                    {data.length && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Length</div>
                                        <div className="col-6">{data.length}</div>
                                    </div>}
                                    {data.minimumturningcircle && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Minimum turning circle</div>
                                        <div className="col-6">{data.minimumturningcircle}</div>
                                    </div>}
                                    {data.rearTrack && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Rear (Back) track</div>
                                        <div className="col-6">{data.rearTrack}</div>
                                    </div>}
                                    {data.wheelbase && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Wheelbase</div>
                                        <div className="col-6">{data.wheelbase}</div>
                                    </div>}
                                    {data.width && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Width</div>
                                        <div className="col-6">{data.width}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        {data.fuelType === "Petrol (Gasoline)" && <div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>Engine</span> </div>
                            <div className="">
                                <div className="p-4">
                                    {data.compressionratio && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Compression ratio	</div>
                                        <div className="col-6">{data.compressionratio}</div>
                                    </div>}
                                    {data.cylinderBore && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Cylinder Bore</div>
                                        <div className="col-6">{data.cylinderBore}</div>
                                    </div>}
                                    {data.engineaspiration && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine aspiration</div>
                                        <div className="col-6">{data.engineaspiration}</div>
                                    </div>}
                                    {data.enginedisplacement && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine displacement</div>
                                        <div className="col-6">{data.enginedisplacement}</div>
                                    </div>}
                                    {data.engineoilcapacity && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine oil capacity	</div>
                                        <div className="col-6">{data.engineoilcapacity}</div>
                                    </div>}
                                    {data.fuelSystem && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel System</div>
                                        <div className="col-6">{data.fuelSystem}</div>
                                    </div>}
                                    {data.modelEngine && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Model Engine</div>
                                        <div className="col-6">{data.modelEngine}</div>
                                    </div>}
                                    {data.numberofcylinders && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Number of cylinders</div>
                                        <div className="col-6">{data.numberofcylinders}</div>
                                    </div>}
                                    {data.numberofvalvespercylinder && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Number of valves per cylinder</div>
                                        <div className="col-6">{data.numberofvalvespercylinder}</div>
                                    </div>}
                                    {data.positionofcylinders && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Position of cylinders</div>
                                        <div className="col-6">{data.positionofcylinders}</div>
                                    </div>}
                                    {data.power && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Power</div>
                                        <div className="col-6">{data.power}</div>
                                    </div>}
                                    {data.torque && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Torque</div>
                                        <div className="col-6">{data.torque}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>}
                        {data.fuelType === "Electricity" && <div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>Electric</span> </div>
                            <div className="">
                                <div className="p-4">
                                    {data.batterycapacity && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Battery capacity</div>
                                        <div className="col-6">{data.batterycapacity}</div>
                                    </div>}
                                    {data.averageenergyconsumptionwltp && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Average Energy consumption (WLTP)</div>
                                        <div className="col-6">{data.averageenergyconsumptionwltp}</div>
                                    </div>}
                                    {data.enginelocationnumber1 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine location number 1</div>
                                        <div className="col-6">{data.enginelocationnumber1}</div>
                                    </div>}
                                    {data.enginelocationnumber2 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine location number 2	</div>
                                        <div className="col-6">{data.enginelocationnumber2}</div>
                                    </div>}
                                    {data.systempower && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">System power</div>
                                        <div className="col-6">{data.systempower}</div>
                                    </div>}
                                    {data.systemtorque && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">System torque</div>
                                        <div className="col-6">{data.systemtorque}</div>
                                    </div>}
                                    {data.averageenergyconsumption && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Average Energy consumption</div>
                                        <div className="col-6">{data.averageenergyconsumption}</div>
                                    </div>}
                                    {data.electricmotorpowernumber1 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Electric motor power number 1</div>
                                        <div className="col-6">{data.electricmotorpowernumber1}</div>
                                    </div>}
                                    {data.electricmotorpowernumber2 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Electric motor power number 2	</div>
                                        <div className="col-6">{data.electricmotorpowernumber2}</div>
                                    </div>}
                                    {data.electricrange && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Electric Range	</div>
                                        <div className="col-6">{data.electricrange}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>}
                        <div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>Drivetrain</span> </div>
                            <div className="">
                                <div className="p-4">
                                    {data.drivewheel &&<div className="row row-techsheet">
                                        <div className="col-6 blue-text">Drive wheel</div>
                                        <div className="col-6">{data.drivewheel}</div>
                                    </div>}
                                    {data.frontbrakes && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Front brakes</div>
                                        <div className="col-6">{data.frontbrakes}</div>
                                    </div>}
                                    {data.frontsuspension && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Front suspension</div>
                                        <div className="col-6">{data.frontsuspension}</div>
                                    </div>}
                                    {data.numberofGears && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Number of Gears (automatic transmission)</div>
                                        <div className="col-6">{data.numberofGears}</div>
                                    </div>}
                                    {data.powersteering && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Power steering</div>
                                        <div className="col-6">{data.powersteering}</div>
                                    </div>}
                                    {data.rearbrakes && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Rear brakes</div>
                                        <div className="col-6">{data.rearbrakes}</div>
                                    </div>}
                                    {data.rearsuspension && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Rear suspension</div>
                                        <div className="col-6">{data.rearsuspension}</div>
                                    </div>}
                                    {data.steeringtype && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Steering type</div>
                                        <div className="col-6">{data.steeringtype}</div>
                                    </div>}
                                    {data.tiressize && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Tires size	</div>
                                        <div className="col-6">{data.tiressize}</div>
                                    </div>}
                                    {data.wheelrimssize && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Wheel rims size</div>
                                        <div className="col-6">{data.wheelrimssize}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title blue-bg"><span style={{float:"left"}}>Space</span> </div>
                            <div className="">
                                <div className="p-4">
                                    {data.fueltankcapacity && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel tank capacity	</div>
                                        <div className="col-6">{data.fueltankcapacity}</div>
                                    </div>}
                                    {data.kerbWeight && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Kerb Weight</div>
                                        <div className="col-6">{data.kerbWeight}</div>
                                    </div>}
                                    {data.maxload && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Max load</div>
                                        <div className="col-6">{data.maxload}</div>
                                    </div>}
                                    {data.maxweight && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Max weight</div>
                                        <div className="col-6">{data.maxweight}</div>
                                    </div>}
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
                                        <div className="col-md-5 col-5">
                                            <img src={x.image} alt="car" className='image-card-archive' />    
                                        </div>
                                        <div className="col-md-7 col-7 fontsizesmall">
                                            <Link to={'/get-car/'+x.car_id+'/'+x.brand+'-'+x.generation+'-'+x.startofproduction} className='no-underline'>{x.brand} {x.generation} {x.startofproduction} </Link><br/>
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
                                        <div className="col-md-5 col-5">
                                            <img src={x.image} alt="car" className='image-card-archive' />    
                                        </div>
                                        <div className="col-md-7 col-7">
                                            <Link to={'/get-car/'+x.car_id+'/'+x.brand+'-'+x.generation+'-'+x.startofproduction} className='no-underline'>{x.brand} {x.generation} {x.startofproduction} </Link><br/>
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
                                    <div className="archive-item col-lg-2 col-sm-4 col-xs-4 col-4">
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