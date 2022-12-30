import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne, getHomeBrands, getHomeHotCars,getHomeTopCars } from "../functions/apiCalls";
import { Link } from "react-router-dom";
import Loader from "../components/loading";
import ModelGallery from "../components/modal";
import { translation } from "../translation";
import { AiOutlineDoubleRight } from "react-icons/ai";

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
                        <div className="archive-item-cars-single">
                            <div className="row align-items-center p-1">
                                <h2><b>{data.brand} {data.generation} {data.startofproduction} {data.power}</b></h2>
                                <div className="col-md-4">
                                    <img src={data.images[0]?data.images[0].image : "https://qesot.com/images/placeholder-img.png"} alt="car" className='single-image-card-archive' />    
                                </div>
                                {(data.fuelType==="Petrol (Gasoline)"||data.fuelType==="Diesel") && <div className="col-md-8 p-4 single-page-carD">
                                    {data.brand && <><span className="blue-text">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className="grey-text totalcars"><Link className="no-underline" to={'/brands-models/'+data.brand}>{data.brand}</Link></span><br/></>}
                                    {data.model && <><span className="blue-text">{translation.Model[localStorage.getItem("language") || 'Model']} : </span><span className="grey-text totalcars"><Link className="no-underline" to={'/brands-models-generation/'+data.brand+'/'+data.model} >{data.model}</Link></span>  <br/></>}
                                    {data.power && <><span className="blue-text">{translation.Systempower[localStorage.getItem("language") || 'System Power']} : </span><span className="grey-text totalcars">{data.power}</span>  <br/></>}
                                    {data.fuelType && <><span className="blue-text">{translation.FuelType[localStorage.getItem("language") || 'Engine Type']} : </span><span className="grey-text totalcars">{data.fuelType}</span>  <br/></>}
                                    {data.generation && <><span className="blue-text">{translation.Generation[localStorage.getItem("language") || 'Generation']} : </span><span className="grey-text totalcars"><Link to={'/brands-models-generation-cars/'+data.brand+'/'+data.model+'/'+data.generation} className='no-underline'>{data.generation}</Link></span>  <br/></>}
                                    {data.batterycapacity && <><span className="blue-text">{translation.Batterycapacity[localStorage.getItem("language") || 'Battery Capacity']} : </span><span className="grey-text totalcars">{data.batterycapacity}</span>  <br/></>}
                                    {data.maximumspeed && <><span className="blue-text">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']} : </span><span className="grey-text totalcars">{data.maximumspeed}</span>  <br/></>}
                                    {data.startofproduction && <><span className="blue-text">{translation.Startofproduction[localStorage.getItem("language") || 'Production Year']} : </span><span className="grey-text totalcars">{data.startofproduction}</span>  <br/></>}  
                                    {data.bodytype && <><span className="blue-text">{translation.Bodytype[localStorage.getItem("language") || 'Body Type']} : </span><span className="grey-text totalcars">{data.bodytype}</span>  <br/></>}  
                                </div>}
                                {(data.fuelType==="petrol / electricity") && <div className="col-md-8 p-4 single-page-carD">
                                    {data.brand && <><span className="blue-text">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className="grey-text totalcars"><Link to={'/brands-models/'+data.brand}>{data.brand}</Link></span><br/></>}
                                    {data.model && <><span className="blue-text">{translation.Model[localStorage.getItem("language") || 'Model']} : </span><span className="grey-text totalcars"><Link className="no-underline" to={'/brands-models-generation/'+data.brand+'/'+data.model} >{data.model}</Link></span>  <br/></>}
                                    {data.power && <><span className="blue-text">{translation.Systempower[localStorage.getItem("language") || 'System Power']} : </span><span className="grey-text totalcars">{data.power}</span>  <br/></>}
                                    {data.fuelType && <><span className="blue-text">{translation.FuelType[localStorage.getItem("language") || 'Engine Type']} : </span><span className="grey-text totalcars">{data.fuelType}</span>  <br/></>}
                                    {data.generation && <><span className="blue-text">{translation.Generation[localStorage.getItem("language") || 'Generation']} : </span><span className="grey-text totalcars"><Link to={'/brands-models-generation-cars/'+data.brand+'/'+data.model+'/'+data.generation} className='no-underline'>{data.generation}</Link></span>  <br/></>}
                                    {data.batterycapacity && <><span className="blue-text">{translation.Batterycapacity[localStorage.getItem("language") || 'Battery Capacity']} : </span><span className="grey-text totalcars">{data.batterycapacity}</span>  <br/></>}
                                    {data.maximumspeed && <><span className="blue-text">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']} : </span><span className="grey-text totalcars">{data.maximumspeed}</span>  <br/></>}
                                    {data.startofproduction && <><span className="blue-text">{translation.Startofproduction[localStorage.getItem("language") || 'Production Year']} : </span><span className="grey-text totalcars">{data.startofproduction}</span>  <br/></>}  
                                    {data.modification && <><span className="blue-text">{translation.engineType[localStorage.getItem("language") || 'Engine Type']} : </span><span className="grey-text totalcars">{data.modification}</span>  <br/></>}  
                                </div>}
                                {(data.fuelType==="Electricity") && <div className="col-md-8 p-4 single-page-carD">
                                    {data.brand && <><span className="blue-text">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className="grey-text totalcars"><Link className="no-underline" to={'/brands-models/'+data.brand}>{data.brand}</Link></span><br/></>}
                                    {data.model && <><span className="blue-text">{translation.Model[localStorage.getItem("language") || 'Model']} : </span><span className="grey-text totalcars"><Link className="no-underline" to={'/brands-models-generation/'+data.brand+'/'+data.model} >{data.model}</Link></span>  <br/></>}
                                    {data.fuelType && <><span className="blue-text">{translation.engineType[localStorage.getItem("language") || 'Engine Type']} : </span><span className="grey-text totalcars">{data.fuelType}</span>  <br/></>}  
                                    {data.maximumspeed && <><span className="blue-text">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']} : </span><span className="grey-text totalcars">{data.maximumspeed}</span>  <br/></>}
                                    {data.generation && <><span className="blue-text">{translation.Generation[localStorage.getItem("language") || 'Generation']} : </span><span className="grey-text totalcars"><Link to={'/brands-models-generation-cars/'+data.brand+'/'+data.model+'/'+data.generation} className='no-underline'>{data.generation}</Link></span>  <br/></>}
                                    {data.batterycapacity && <><span className="blue-text">{translation.Batterycapacity[localStorage.getItem("language") || 'Battery Capacity']} : </span><span className="grey-text totalcars">{data.batterycapacity}</span>  <br/></>}
                                    {data.startofproduction && <><span className="blue-text">{translation.Startofproduction[localStorage.getItem("language") || 'Production Year']} : </span><span className="grey-text totalcars">{data.startofproduction}</span>  <br/></>}  
                                    {data.electricrange && <><span className="blue-text">{translation.AllelectricrangeWLTP[localStorage.getItem("language") || 'Engine Range']} : </span><span className="grey-text totalcars">{data.electricrange}</span>  <br/></>}  
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                {data.images.length>0&&<div className="pageCon">
                    <div className="p-3">
                        <h3>Photos for Cars</h3>
                        <div className="image-holder-single">
                            <ModelGallery images={data.images} />
                        </div>                    
                    </div>
                </div>}

                <div className="pageCon ">
                    <div className="page-title"><span style={{float:"left"}}>{translation.technicalSheet[localStorage.getItem("language") || 'Technical Sheet']}: {data.brand} {data.generation} {data.startofproduction}</span></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-6 p-1">
                            {data.acceleration100 && <div className="row row-techsheet">
                                    <div className="col-6 blue-text">{translation.Accelerationkmh[localStorage.getItem("language") || 'Acceleration 0 - 100 km/h']}</div>
                                    <div className="col-6">{data.acceleration100}</div>
                            </div>}
                            {data.electricrange && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.AllelectricrangeWLTP[localStorage.getItem("language") || 'All-electric Range (WLTP)']}</div>
                                <div className="col-6">{data.electricrange}</div>
                            </div>}
                            {data.batterycapacity && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.Batterycapacity[localStorage.getItem("language") || 'Battery Capacity']}</div>
                                <div className="col-6">{data.batterycapacity}</div>
                            </div>}
                            {data.doors && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.Doors[localStorage.getItem("language") || 'Doors']}</div>
                                <div className="col-6">{data.doors}</div>
                            </div>}
                            {data.fuelType && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.FuelType[localStorage.getItem("language") || 'Fuel Type']}</div>
                                <div className="col-6">{data.fuelType}</div>
                            </div>}
                            {data.kerbWeight && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.KerbWeight[localStorage.getItem("language") || 'Kerb Weight']}</div>
                                <div className="col-6">{data.kerbWeight}</div>
                            </div>}
                            {data.modification && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.ModificationEngine[localStorage.getItem("language") || 'Modification (Engine)']}</div>
                                <div className="col-6">{data.modification}</div>
                            </div>}
                            {data.seats && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.Seats[localStorage.getItem("language") || 'Seats']}</div>
                                <div className="col-6">{data.seats}</div>
                            </div>}
                            {data.systempower && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.Systempower[localStorage.getItem("language") || 'System Power']}</div>
                                <div className="col-6">{data.systempower}</div>
                            </div>}
                        </div>
                        <div className="col-md-6 p-1">
                            {data.acceleration62 && <div className="row row-techsheet">
                                    <div className="col-6 blue-text">{translation.Accelerationmph62[localStorage.getItem("language") || 'Acceleration 0 - 62 Mph']}</div>
                                    <div className="col-6">{data.acceleration62}</div>
                                </div>}
                           {data.averageenergyconsumptionwltp && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.AverageEnergyconsumptionWLTP[localStorage.getItem("language") || 'Average Energy Consumption (WLTP)']}</div>
                                <div className="col-6">{data.averageenergyconsumptionwltp}</div>
                            </div>}
                            {data.bodytype && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.Bodytype[localStorage.getItem("language") || 'Body Type']}</div>
                                <div className="col-6">{data.bodytype}</div>
                            </div>}
                            {data.drivewheel && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.Drivewheel[localStorage.getItem("language") || 'Drive Wheel']}</div>
                                <div className="col-6">{data.drivewheel}</div>
                            </div>}
                            {data.generation && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.Generation[localStorage.getItem("language") || 'Generation']}</div>
                                <div className="col-6">{data.generation}</div>
                            </div>}
                            {data.maximumspeed && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']}</div>
                                <div className="col-6">{data.maximumspeed}</div>
                            </div>}
                            {data.powertrainArchitecture && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.PowertrainArchitecture[localStorage.getItem("language") || 'Powertrain Architecture']}</div>
                                <div className="col-6">{data.powertrainArchitecture}</div>
                            </div>}
                            {data.startofproduction && <div className="row row-techsheet">
                                <div className="col-6 blue-text">{translation.Startofproduction[localStorage.getItem("language") || 'Start Of Production']}</div>
                                <div className="col-6">{data.startofproduction}</div>
                            </div>}
                        </div>
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <div className="pageCon ">
                            <div className="page-title blue-bg"><span style={{float:"left"}}>{translation.General[localStorage.getItem("language") || 'General']}</span> </div>
                            <div className="">
                                <div className="p-1">
                                    {data.bodytype && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Bodytype[localStorage.getItem("language") || 'Body type']}</div>
                                        <div className="col-6">{data.bodytype}</div>
                                    </div>}
                                    {data.brand && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Brand[localStorage.getItem("language") || 'Brand']}</div>
                                        <div className="col-6">{data.brand}</div>
                                    </div>}
                                    {data.doors && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Doors[localStorage.getItem("language") || 'Doors']}</div>
                                        <div className="col-6">{data.doors}</div>
                                    </div>}
                                    {data.generation && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Generation[localStorage.getItem("language") || 'Generation']}</div>
                                        <div className="col-6">{data.generation}</div>
                                    </div>}
                                    {data.model && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Model[localStorage.getItem("language") || 'Model']}</div>
                                        <div className="col-6">{data.model}</div>
                                    </div>}
                                    {data.modification && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.ModificationEngine[localStorage.getItem("language") || 'Modification (Engine)']}</div>
                                        <div className="col-6">{data.modification}</div>
                                    </div>}
                                    {data.powertrainArchitecture && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.PowertrainArchitecture[localStorage.getItem("language") || 'Powertrain Architecture']}</div>
                                        <div className="col-6">{data.powertrainArchitecture}</div>
                                    </div>}
                                    {data.seats && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Seats[localStorage.getItem("language") || 'Seats']}</div>
                                        <div className="col-6">{data.seats}</div>
                                    </div>}
                                    {data.startofproduction && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Startofproduction[localStorage.getItem("language") || 'Start of production']}</div>
                                        <div className="col-6">{data.startofproduction}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>

                        <div className="pageCon ">
                            <div className="page-title blue-bg"><span style={{float:"left"}}>{translation.Performance[localStorage.getItem("language") || 'Performance']}</span> </div>
                            <div className="">
                                <div className="p-1">
                                    {data.acceleration100 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Accelerationkmh[localStorage.getItem("language") || 'Acceleration 0 - 100 km/h']}</div>
                                        <div className="col-6">{data.acceleration100}</div>
                                    </div>}
                                    {data.acceleration60 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Accelerationmph[localStorage.getItem("language") || 'Acceleration 0 - 60 mph']}</div>
                                        <div className="col-6">{data.acceleration60}</div>
                                    </div>}
                                    {data.acceleration60 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Accelerationmph62[localStorage.getItem("language") || 'Acceleration 0 - 62 mph']}</div>
                                        <div className="col-6">{data.acceleration62}</div>
                                    </div>}
                                    {data.fuelType && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.FuelType[localStorage.getItem("language") || 'Fuel Type']}</div>
                                        <div className="col-6">{data.fuelType}</div>
                                    </div>}
                                    {data.fuelconsumptionCombined && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fuelconsumptioneconomycombined[localStorage.getItem("language") || 'Fuel consumption (economy) - combined (NEDC)']}</div>
                                        <div className="col-6">{data.fuelconsumptionCombined}</div>
                                    </div>}
                                    {data.fuelconsumptionExtraurban && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fuelconsumptioneconomyextraurban[localStorage.getItem("language") || 'Fuel consumption (economy) - extra urban (NEDC)']}</div>
                                        <div className="col-6">{data.fuelconsumptionExtraurban}</div>
                                    </div>}
                                    {data.fuelconsumptionUrban && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fuelconsumptioneconomyurban[localStorage.getItem("language") || 'Fuel consumption (economy) - urban (NEDC)']}</div>
                                        <div className="col-6">{data.fuelconsumptionUrban}</div>
                                    </div>}
                                    {data.maximumspeed && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']}</div>
                                        <div className="col-6">{data.maximumspeed}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.Dimensions[localStorage.getItem("language") || 'Dimensions']}</span> </div>
                            <div className="">
                                <div className="p-1">
                                    {data.dragcoefficient && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.DragcoefficientCd[localStorage.getItem("language") || 'Drag coefficient (Cd)']}</div>
                                        <div className="col-6">{data.dragcoefficient}</div>
                                    </div>}
                                    {data.fronttrack && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fronttrack[localStorage.getItem("language") || 'Front track']}	</div>
                                        <div className="col-6">{data.fronttrack}</div>
                                    </div>}
                                    {data.height && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Height[localStorage.getItem("language") || 'Height']}</div>
                                        <div className="col-6">{data.height}</div>
                                    </div>}
                                    {data.length && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Length[localStorage.getItem("language") || 'Length']}</div>
                                        <div className="col-6">{data.length}</div>
                                    </div>}
                                    {data.minimumturningcircle && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Minimumturningcircleturningdiameter[localStorage.getItem("language") || 'Minimum turning circle']}</div>
                                        <div className="col-6">{data.minimumturningcircle}</div>
                                    </div>}
                                    {data.rearTrack && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.RearBacktrack[localStorage.getItem("language") || 'Rear (Back) track']}</div>
                                        <div className="col-6">{data.rearTrack}</div>
                                    </div>}
                                    {data.wheelbase && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Wheelbase[localStorage.getItem("language") || 'Wheelbase']}</div>
                                        <div className="col-6">{data.wheelbase}</div>
                                    </div>}
                                    {data.width && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Width[localStorage.getItem("language") || 'Width']}</div>
                                        <div className="col-6">{data.width}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        {data.fuelType === "Petrol (Gasoline)" && <div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.Engine[localStorage.getItem("language") || 'Engine']}</span> </div>
                            <div className="">
                                <div className="p-1">
                                    {data.compressionratio && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Compressionratio[localStorage.getItem("language") || 'Compression ratio']}</div>
                                        <div className="col-6">{data.compressionratio}</div>
                                    </div>}
                                    {data.cylinderBore && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.CylinderBore[localStorage.getItem("language") || 'Cylinder Bore']}</div>
                                        <div className="col-6">{data.cylinderBore}</div>
                                    </div>}
                                    {data.engineaspiration && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Engineaspiration[localStorage.getItem("language") || 'Engine aspiration']}</div>
                                        <div className="col-6">{data.engineaspiration}</div>
                                    </div>}
                                    {data.enginedisplacement && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Enginedisplacement[localStorage.getItem("language") || 'Engine displacement']}</div>
                                        <div className="col-6">{data.enginedisplacement}</div>
                                    </div>}
                                    {data.engineoilcapacity && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Engineoilcapacity[localStorage.getItem("language") || 'Engine oil capacity']}	</div>
                                        <div className="col-6">{data.engineoilcapacity}</div>
                                    </div>}
                                    {data.fuelSystem && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.FuelSystem[localStorage.getItem("language") || 'Fuel System']}</div>
                                        <div className="col-6">{data.fuelSystem}</div>
                                    </div>}
                                    {data.modelEngine && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.ModelEngine[localStorage.getItem("language") || 'Model Engine']}</div>
                                        <div className="col-6">{data.modelEngine}</div>
                                    </div>}
                                    {data.numberofcylinders && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Numberofcylinders[localStorage.getItem("language") || 'Number of cylinders']}</div>
                                        <div className="col-6">{data.numberofcylinders}</div>
                                    </div>}
                                    {data.numberofvalvespercylinder && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Numberofvalvespercylinder[localStorage.getItem("language") || 'Number of valves per cylinder']}</div>
                                        <div className="col-6">{data.numberofvalvespercylinder}</div>
                                    </div>}
                                    {data.positionofcylinders && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Positionofcylinders[localStorage.getItem("language") || 'Position of cylinders']}</div>
                                        <div className="col-6">{data.positionofcylinders}</div>
                                    </div>}
                                    {data.power && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Power[localStorage.getItem("language") || 'Power']}</div>
                                        <div className="col-6">{data.power}</div>
                                    </div>}
                                    {data.torque && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Torque[localStorage.getItem("language") || 'Torque']}</div>
                                        <div className="col-6">{data.torque}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>}
                        {data.fuelType === "Electricity" && <div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.Electric[localStorage.getItem("language") || 'Electric']}</span> </div>
                            <div className="">
                                <div className="p-1">
                                    {data.batterycapacity && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Batterycapacity[localStorage.getItem("language") || 'Battery capacity']}</div>
                                        <div className="col-6">{data.batterycapacity}</div>
                                    </div>}
                                    {data.averageenergyconsumptionwltp && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.AverageEnergyconsumptionWLTP[localStorage.getItem("language") || 'Average Energy consumption (WLTP)']}</div>
                                        <div className="col-6">{data.averageenergyconsumptionwltp}</div>
                                    </div>}
                                    {data.enginelocationnumber1 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Enginelocationnumber1[localStorage.getItem("language") || 'Engine location number 1']}</div>
                                        <div className="col-6">{data.enginelocationnumber1}</div>
                                    </div>}
                                    {data.enginelocationnumber2 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Enginelocationnumber2[localStorage.getItem("language") || 'Engine location number 2']}	</div>
                                        <div className="col-6">{data.enginelocationnumber2}</div>
                                    </div>}
                                    {data.systempower && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Systempower[localStorage.getItem("language") || 'System power']}	</div>
                                        <div className="col-6">{data.systempower}</div>
                                    </div>}
                                    {data.systemtorque && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Systemtorque[localStorage.getItem("language") || 'System torque']}</div>
                                        <div className="col-6">{data.systemtorque}</div>
                                    </div>}
                                    {data.averageenergyconsumption && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.AverageEnergyconsumptionWLTP[localStorage.getItem("language") || 'Average Energy consumption']}</div>
                                        <div className="col-6">{data.averageenergyconsumption}</div>
                                    </div>}
                                    {data.electricmotorpowernumber1 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Electricmotorpowernumber[localStorage.getItem("language") || 'Electric motor power number 1']}</div>
                                        <div className="col-6">{data.electricmotorpowernumber1}</div>
                                    </div>}
                                    {data.electricmotorpowernumber2 && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Electricmotorpowernumber2[localStorage.getItem("language") || 'Electric motor power number 2']}	</div>
                                        <div className="col-6">{data.electricmotorpowernumber2}</div>
                                    </div>}
                                    {data.electricrange && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.AllelectricrangeWLTP[localStorage.getItem("language") || 'Electric Range']}	</div>
                                        <div className="col-6">{data.electricrange}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>}
                        <div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.Drivetrain[localStorage.getItem("language") || 'Drivetrain']}</span> </div>
                            <div className="">
                                <div className="p-1">
                                    {data.drivewheel &&<div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Drivewheel[localStorage.getItem("language") || 'Drive wheel']}</div>
                                        <div className="col-6">{data.drivewheel}</div>
                                    </div>}
                                    {data.frontbrakes && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Frontbrakes[localStorage.getItem("language") || 'Front brakes']}</div>
                                        <div className="col-6">{data.frontbrakes}</div>
                                    </div>}
                                    {data.frontsuspension && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Frontsuspension[localStorage.getItem("language") || 'Front suspension']}</div>
                                        <div className="col-6">{data.frontsuspension}</div>
                                    </div>}
                                    {data.numberofGears && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Numberofgearsandtypeofgearbox[localStorage.getItem("language") || 'Number of Gears (automatic transmission)']}</div>
                                        <div className="col-6">{data.numberofGears}</div>
                                    </div>}
                                    {data.powersteering && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Powersteering[localStorage.getItem("language") || 'Power steering']}</div>
                                        <div className="col-6">{data.powersteering}</div>
                                    </div>}
                                    {data.rearbrakes && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Rearbrakes[localStorage.getItem("language") || 'Rear brakes']}</div>
                                        <div className="col-6">{data.rearbrakes}</div>
                                    </div>}
                                    {data.rearsuspension && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Rearsuspension[localStorage.getItem("language") || 'Rear suspension']}</div>
                                        <div className="col-6">{data.rearsuspension}</div>
                                    </div>}
                                    {data.steeringtype && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Steeringtype[localStorage.getItem("language") || 'Steering type']}</div>
                                        <div className="col-6">{data.steeringtype}</div>
                                    </div>}
                                    {data.tiressize && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Tiressize[localStorage.getItem("language") || 'Tires size']}	</div>
                                        <div className="col-6">{data.tiressize}</div>
                                    </div>}
                                    {data.wheelrimssize && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Wheelrimssize[localStorage.getItem("language") || 'Wheel rims size']}</div>
                                        <div className="col-6">{data.wheelrimssize}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title blue-bg"><span style={{float:"left"}}>{translation.Wheelrimssize[localStorage.getItem("language") || 'Space']}</span> </div>
                            <div className="">
                                <div className="p-1">
                                    {data.fueltankcapacity && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fueltankcapacity[localStorage.getItem("language") || 'Fuel tank capacity']}	</div>
                                        <div className="col-6">{data.fueltankcapacity}</div>
                                    </div>}
                                    {data.kerbWeight && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.KerbWeight[localStorage.getItem("language") || 'Kerb Weight']}</div>
                                        <div className="col-6">{data.kerbWeight}</div>
                                    </div>}
                                    {data.maxload && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Maxload[localStorage.getItem("language") || 'Max load']}</div>
                                        <div className="col-6">{data.maxload}</div>
                                    </div>}
                                    {data.maxweight && <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Maxweight[localStorage.getItem("language") || 'Max weight']}</div>
                                        <div className="col-6">{data.maxweight}</div>
                                    </div>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                    <div className="pageCon ">
                    <div className="page-title"><span style={{float:"left"}}>{translation.moreCars[localStorage.getItem("language") || 'More Cars']}</span> </div>
                    <div className="p-3">
                        {(topCars.length>0)&&<>
                            {topCars.map((x)=><>
                                <div className="archive-item-cars">
                                <Link to={'/get-car/'+x.car_id+'/'+x.brand.replace(/\s/g, '')+'-'+x.generation.replace(/\s/g, '')+'-'+x.startofproduction.replace(/\s/g, '')} className='no-underline'>
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-5">
                                            <img src={x.image || "https://qesot.com/images/placeholder-img.png"} alt="car" className='image-card-archive' />    
                                        </div>
                                        <div className="col-md-7 col-7 fontsizesmall">
                                            {x.brand} {x.generation} {x.startofproduction} <br/>
                                            <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} :</span><span className='lightgrey-text'> {x.brand}</span><br/>
                                            <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.power ? x.power : x.systempower}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Accelerationkmh[localStorage.getItem("language") || 'Acceleration 0 - 100 km/h']} : </span><span className='lightgrey-text'>{x.acceleration100}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']} : </span><span className='lightgrey-text'>{x.maximumspeed}</span>  <br/>  
                                        </div>
                                    </div>
                                    </Link>
                                </div>
                            
                        </>)}
                        </>}
                    </div>
                    </div>
                    </div>
                </div>



                {/* ------------------------ */}
                <div className="pageCon">
                <div className="page-title"><span style={{float:"left"}}>{translation.hotCars[localStorage.getItem("language") || 'Hot Cars']}</span> <span  style={{float:"right"}}><Link className='no-underline yellow-text' to="#">{translation.seeMore[localStorage.getItem("language") || 'See More']} <AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
                <div className="archive">
                    <div className="row">
                        {(hotCars.length>0)&&<>
                            {hotCars.map((x)=><>
                            <div className="col-md-6">
                                <div className="archive-item-cars">
                                <Link to={'/get-car/'+x.car_id+'/'+x.brand.replace(/\s/g, '')+'-'+x.generation.replace(/\s/g, '')+'-'+x.startofproduction.replace(/\s/g, '')} className='no-underline'>
                                    <div className="row align-items-center">
                                        <div className="col-md-5 col-5">
                                            <img src={x.image || "https://qesot.com/images/placeholder-img.png"} alt="car" className='image-card-archive' />    
                                        </div>
                                        <div className="col-md-7 col-7">
                                            {x.brand} {x.generation} {x.startofproduction} <br/>
                                            <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} :</span><span className='lightgrey-text'> {x.brand}</span><br/>
                                            <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.power ? x.power : x.systempower}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Accelerationkmh[localStorage.getItem("language") || 'Acceleration 0 - 100 km/h']} : </span><span className='lightgrey-text'>{x.acceleration100}</span>  <br/>
                                            <span className="grey-text totalcars">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']} : </span><span className='lightgrey-text'>{x.maximumspeed}</span>  <br/>  
                                        </div>
                                    </div>
                                </Link>
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
                        <div className="page-title"><span style={{float:"left"}}>{translation.carBrands[localStorage.getItem("language") || 'Brands']}</span> <span  style={{float:"right"}}><Link className='no-underline yellow-text' to="#">{translation.seeMore[localStorage.getItem("language") || 'See More']} <AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
                        <div className="archive">
                            <div className="row">
                                {(brands.length>0)&&<>
                                    {brands.map((x)=><>
                                    <div className="archive-item col-lg-2 col-sm-4 col-xs-4 col-4">
                                        <center >
                                            <img src={x.logo || "https://qesot.com/images/placeholder-img.png"}  alt="car"/>
                                            <div className="archive-item-inner">
                                                <Link to={'/brands-models/'+x.name} className="no-underline white-text">{x.name}</Link><br/>
                                                <span className="yellow-text totalcars">{translation.totalCars[localStorage.getItem("language") || 'Total Cars']} : {x.cars}</span>    
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