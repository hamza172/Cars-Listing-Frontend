import { useState,useEffect } from 'react';
import { getOne} from '../functions/apiCalls';
import Loader from '../components/loading';
import { Link, useParams } from 'react-router-dom';
import { translation } from "../translation";
import { getHomeComparisonCar } from '../functions/apiCalls';
import { AiOutlineDoubleRight } from 'react-icons/ai';
import { vsImage } from './images';

export default function CompareTwoCars (){
    let { id1,id2 } = useParams();
    const [data, setData] =  useState<{[key: string]: any}>({});
    const [data1, setData1] =  useState<{[key: string]: any}>({});
    const [compareCars, setCompareCars] =  useState<any[]>([])

    useEffect(()=>{ 
        getOne(parseInt(id1||'')).then((x)=>setData(x))
        getOne(parseInt(id2||'')).then((x)=>setData1(x))
        getHomeComparisonCar().then(x=>setCompareCars(x || []))
    },[id1,id2]) 
    return (<>
        <div className="container">
            {(data.brand && data1.brand)?<div className="pageCon">
                
                <center><div className="page-title">Compare Cars Side by Side</div></center>
                <div className='row'>
                    <div className='col-md-6 p-4'>
                        <center>{data.brand && <>
                        <div className="container">
                            <div className="pageCon">
                                <h5><b>{data.brand} {data.generation} {data.startofproduction} </b></h5>    
                                <img src={data.images[0].image || "https://qesot.com/images/placeholder-img.png"} alt="car" style={{minHeight:"300px"}} className='single-image-card-archive' />         
                            </div>
                            <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.General[localStorage.getItem("language") || 'General']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Bodytype[localStorage.getItem("language") || 'Body Type']}</div>
                                        <div className="col-6">{data.bodytype}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Brand</div>
                                        <div className="col-6">{data.brand}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Doors[localStorage.getItem("language") || 'Doors']}</div>
                                        <div className="col-6">{data.doors}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Generation[localStorage.getItem("language") || 'Generation']}</div>
                                        <div className="col-6">{data.generation}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Model[localStorage.getItem("language") || 'Model']}</div>
                                        <div className="col-6">{data.model}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.ModificationEngine[localStorage.getItem("language") || 'Modification (Engine)']}</div>
                                        <div className="col-6">{data.modification}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.PowertrainArchitecture[localStorage.getItem("language") || 'Powertrain Architecture']}</div>
                                        <div className="col-6">{data.powertrainArchitecture}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Seats[localStorage.getItem("language") || 'Seats']}</div>
                                        <div className="col-6">{data.seats}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Startofproduction[localStorage.getItem("language") || 'Start Of Production']}</div>
                                        <div className="col-6">{data.startofproduction}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Performance[localStorage.getItem("language") || 'Performance']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Accelerationkmh[localStorage.getItem("language") || 'Acceleration 0 - 100 km/h']}</div>
                                        <div className="col-6">{data.acceleration100}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Accelerationmph[localStorage.getItem("language") || 'Acceleration 0 - 60 mph']}</div>
                                        <div className="col-6">{data.acceleration60}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Accelerationmph62[localStorage.getItem("language") || 'Acceleration 0 - 62 Mph']}</div>
                                        <div className="col-6">{data.acceleration62}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.FuelType[localStorage.getItem("language") || 'Fuel Type']}</div>
                                        <div className="col-6">{data.fuelType}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fuelconsumptioneconomycombined[localStorage.getItem("language") || 'Fuel consumption (economy) - combined (NEDC)']}</div>
                                        <div className="col-6">{data.fuelconsumptionCombined}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fuelconsumptioneconomyextraurban[localStorage.getItem("language") || 'Fuel consumption (economy) - extra urban (NEDC)']}</div>
                                        <div className="col-6">{data.fuelconsumptionExtraurban}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fuelconsumptioneconomyurban[localStorage.getItem("language") || 'Fuel consumption (economy) - urban (NEDC)']}</div>
                                        <div className="col-6">{data.fuelconsumptionUrban}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']}</div>
                                        <div className="col-6">{data.maximumspeed}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Dimensions[localStorage.getItem("language") || 'Dimensions']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.DragcoefficientCd[localStorage.getItem("language") || 'Drag coefficient (Cd)']}</div>
                                        <div className="col-6">{data.dragcoefficient}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fronttrack[localStorage.getItem("language") || 'Front track']}</div>
                                        <div className="col-6">{data.fronttrack}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Height[localStorage.getItem("language") || 'Height']}</div>
                                        <div className="col-6">{data.height}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Length[localStorage.getItem("language") || 'Length']}</div>
                                        <div className="col-6">{data.length}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Minimumturningcircleturningdiameter[localStorage.getItem("language") || 'Minimum turning circle']}</div>
                                        <div className="col-6">{data.minimumturningcircle}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.RearBacktrack[localStorage.getItem("language") || 'Rear (Back) track']}</div>
                                        <div className="col-6">{data.rearTrack}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Wheelbase[localStorage.getItem("language") || 'Wheelbase']}</div>
                                        <div className="col-6">{data.wheelbase}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Width[localStorage.getItem("language") || 'Width']}</div>
                                        <div className="col-6">{data.width}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {(data1.fuelType === "Petrol (Gasoline)" || (data1.fuelType === "Diesel") || (data1.fuelType === "Petrol / LPG")) &&<div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Engine[localStorage.getItem("language") || 'Engine']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Compressionratio[localStorage.getItem("language") || 'Compression ratio']}</div>
                                        <div className="col-6">{data.compressionratio}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.CylinderBore[localStorage.getItem("language") || 'Cylinder Bore']}</div>
                                        <div className="col-6">{data.cylinderBore}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Engineaspiration[localStorage.getItem("language") || 'Engine aspiration']}</div>
                                        <div className="col-6">{data.engineaspiration}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Enginedisplacement[localStorage.getItem("language") || 'Engine displacement']}</div>
                                        <div className="col-6">{data.enginedisplacement}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Engineoilcapacity[localStorage.getItem("language") || 'Engine oil capacity']}	</div>
                                        <div className="col-6">{data.engineoilcapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.FuelSystem[localStorage.getItem("language") || 'Fuel System']}</div>
                                        <div className="col-6">{data.fuelSystem}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.ModelEngine[localStorage.getItem("language") || 'Model Engine']}</div>
                                        <div className="col-6">{data.modelEngine}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Numberofcylinders[localStorage.getItem("language") || 'Number of cylinders']}</div>
                                        <div className="col-6">{data.numberofcylinders}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Numberofvalvespercylinder[localStorage.getItem("language") || 'Number of valves per cylinder']}</div>
                                        <div className="col-6">{data.numberofvalvespercylinder}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Positionofcylinders[localStorage.getItem("language") || 'Position of cylinders']}</div>
                                        <div className="col-6">{data.positionofcylinders}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Power[localStorage.getItem("language") || 'Power']}</div>
                                        <div className="col-6">{data.power}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Torque[localStorage.getItem("language") || 'Torque']}</div>
                                        <div className="col-6">{data.torque}</div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        {(data.fuelType === "Electricity")&&<div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Electric[localStorage.getItem("language") || 'Electric']}</span> </div>
                            <div className="p-3">
                                <div className="p-4">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Batterycapacity[localStorage.getItem("language") || 'Battery Capacity']}</div>
                                        <div className="col-6">{data.batterycapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.AverageEnergyconsumptionWLTP[localStorage.getItem("language") || 'Average Energy Consumption (WLTP)']}</div>
                                        <div className="col-6">{data.averageenergyconsumptionwltp}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Enginelocationnumber1[localStorage.getItem("language") || 'Engine location number 1']}</div>
                                        <div className="col-6">{data.enginelocationnumber1}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Enginelocationnumber2[localStorage.getItem("language") || 'Engine location number 2']}</div>
                                        <div className="col-6">{data.enginelocationnumber2}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Systempower[localStorage.getItem("language") || 'System Power']}</div>
                                        <div className="col-6">{data.systempower}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Systemtorque[localStorage.getItem("language") || 'System torque']}</div>
                                        <div className="col-6">{data.systemtorque}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.AverageEnergyconsumptionWLTP[localStorage.getItem("language") || 'Average Energy consumption']}</div>
                                        <div className="col-6">{data.averageenergyconsumption}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Electricmotorpowernumber[localStorage.getItem("language") || 'Electric motor power number 1']}</div>
                                        <div className="col-6">{data.electricmotorpowernumber1}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Electricmotorpowernumber2[localStorage.getItem("language") || 'Electric motor power number 2']}</div>
                                        <div className="col-6">{data.electricmotorpowernumber2}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.AllelectricrangeWLTP[localStorage.getItem("language") || 'Electric Range']}</div>
                                        <div className="col-6">{data.electricrange}</div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Drivetrain[localStorage.getItem("language") || 'Drivetrain']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Drivewheel[localStorage.getItem("language") || 'Drive Wheel']}</div>
                                        <div className="col-6">{data.drivewheel}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Frontbrakes[localStorage.getItem("language") || 'Front brakes']}</div>
                                        <div className="col-6">{data.frontbrakes}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Frontsuspension[localStorage.getItem("language") || 'Front suspension']}</div>
                                        <div className="col-6">{data.frontsuspension}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Numberofgearsandtypeofgearbox[localStorage.getItem("language") || 'Number of Gears (automatic transmission)']}</div>
                                        <div className="col-6">{data.numberofGears}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Powersteering[localStorage.getItem("language") || 'Power steering']}</div>
                                        <div className="col-6">{data.powersteering}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Rearbrakes[localStorage.getItem("language") || 'Rear brakes']}</div>
                                        <div className="col-6">{data.rearbrakes}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Rearsuspension[localStorage.getItem("language") || 'Rear suspension']}</div>
                                        <div className="col-6">{data.rearsuspension}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Steeringtype[localStorage.getItem("language") || 'Steering type']}</div>
                                        <div className="col-6">{data.steeringtype}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Tiressize[localStorage.getItem("language") || 'Tires size']}	</div>
                                        <div className="col-6">{data.tiressize}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Wheelrimssize[localStorage.getItem("language") || 'Wheel rims size']}</div>
                                        <div className="col-6">{data.wheelrimssize}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Wheelrimssize[localStorage.getItem("language") || 'Space']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fueltankcapacity[localStorage.getItem("language") || 'Fuel tank capacity']}</div>
                                        <div className="col-6">{data.fueltankcapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.KerbWeight[localStorage.getItem("language") || 'Kerb Weight']}</div>
                                        <div className="col-6">{data.kerbWeight}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Maxload[localStorage.getItem("language") || 'Max load']}</div>
                                        <div className="col-6">{data.maxload}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Maxweight[localStorage.getItem("language") || 'Max weight']}</div>
                                        <div className="col-6">{data.maxweight}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </>}</center>
                    </div>
                    <div className='col-md-6 p-4'>
                        <center>
                        {data1.brand && <>
                        <div className="container">
                            <div className="pageCon">
                                <h5><b>{data1.brand} {data1.generation} {data1.startofproduction} </b></h5>    
                                <img src={data1.images[0].image || "https://qesot.com/images/placeholder-img.png"} alt="car" style={{minHeight:"300px"}} className='single-image-card-archive' />         
                            </div>
                            <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.General[localStorage.getItem("language") || 'General']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Bodytype[localStorage.getItem("language") || 'Body Type']}</div>
                                        <div className="col-6">{data1.bodytype}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Brand</div>
                                        <div className="col-6">{data1.brand}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Doors[localStorage.getItem("language") || 'Doors']}</div>
                                        <div className="col-6">{data1.doors}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Generation[localStorage.getItem("language") || 'Generation']}</div>
                                        <div className="col-6">{data1.generation}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Model[localStorage.getItem("language") || 'Model']}</div>
                                        <div className="col-6">{data1.model}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.ModificationEngine[localStorage.getItem("language") || 'Modification (Engine)']}</div>
                                        <div className="col-6">{data1.modification}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.PowertrainArchitecture[localStorage.getItem("language") || 'Powertrain Architecture']}</div>
                                        <div className="col-6">{data1.powertrainArchitecture}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Seats[localStorage.getItem("language") || 'Seats']}</div>
                                        <div className="col-6">{data1.seats}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Startofproduction[localStorage.getItem("language") || 'Start Of Production']}</div>
                                        <div className="col-6">{data1.startofproduction}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Performance[localStorage.getItem("language") || 'Performance']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Accelerationkmh[localStorage.getItem("language") || 'Acceleration 0 - 100 km/h']}</div>
                                        <div className="col-6">{data1.acceleration100}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Accelerationmph[localStorage.getItem("language") || 'Acceleration 0 - 60 mph']}</div>
                                        <div className="col-6">{data1.acceleration60}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Accelerationmph62[localStorage.getItem("language") || 'Acceleration 0 - 62 Mph']}</div>
                                        <div className="col-6">{data1.acceleration62}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.FuelType[localStorage.getItem("language") || 'Fuel Type']}</div>
                                        <div className="col-6">{data1.fuelType}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fuelconsumptioneconomycombined[localStorage.getItem("language") || 'Fuel consumption (economy) - combined (NEDC)']}</div>
                                        <div className="col-6">{data1.fuelconsumptionCombined}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fuelconsumptioneconomyextraurban[localStorage.getItem("language") || 'Fuel consumption (economy) - extra urban (NEDC)']}</div>
                                        <div className="col-6">{data1.fuelconsumptionExtraurban}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fuelconsumptioneconomyurban[localStorage.getItem("language") || 'Fuel consumption (economy) - urban (NEDC)']}</div>
                                        <div className="col-6">{data1.fuelconsumptionUrban}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Maximumspeed[localStorage.getItem("language") || 'Maximum speed']}</div>
                                        <div className="col-6">{data1.maximumspeed}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Dimensions[localStorage.getItem("language") || 'Dimensions']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.DragcoefficientCd[localStorage.getItem("language") || 'Drag coefficient (Cd)']}</div>
                                        <div className="col-6">{data1.dragcoefficient}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fronttrack[localStorage.getItem("language") || 'Front track']}</div>
                                        <div className="col-6">{data1.fronttrack}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Height[localStorage.getItem("language") || 'Height']}</div>
                                        <div className="col-6">{data1.height}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Length[localStorage.getItem("language") || 'Length']}</div>
                                        <div className="col-6">{data1.length}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Minimumturningcircleturningdiameter[localStorage.getItem("language") || 'Minimum turning circle']}</div>
                                        <div className="col-6">{data1.minimumturningcircle}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.RearBacktrack[localStorage.getItem("language") || 'Rear (Back) track']}</div>
                                        <div className="col-6">{data1.rearTrack}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Wheelbase[localStorage.getItem("language") || 'Wheelbase']}</div>
                                        <div className="col-6">{data1.wheelbase}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Width[localStorage.getItem("language") || 'Width']}</div>
                                        <div className="col-6">{data1.width}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {(data1.fuelType === "Petrol (Gasoline)" || (data1.fuelType === "Diesel") || (data1.fuelType === "Petrol / LPG")) && <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Engine[localStorage.getItem("language") || 'Engine']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Compressionratio[localStorage.getItem("language") || 'Compression ratio']}</div>
                                        <div className="col-6">{data1.compressionratio}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.CylinderBore[localStorage.getItem("language") || 'Cylinder Bore']}</div>
                                        <div className="col-6">{data1.cylinderBore}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Engineaspiration[localStorage.getItem("language") || 'Engine aspiration']}</div>
                                        <div className="col-6">{data1.engineaspiration}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Enginedisplacement[localStorage.getItem("language") || 'Engine displacement']}</div>
                                        <div className="col-6">{data1.enginedisplacement}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Engineoilcapacity[localStorage.getItem("language") || 'Engine oil capacity']}</div>
                                        <div className="col-6">{data1.engineoilcapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.FuelSystem[localStorage.getItem("language") || 'Fuel System']}</div>
                                        <div className="col-6">{data1.fuelSystem}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.ModelEngine[localStorage.getItem("language") || 'Model Engine']}</div>
                                        <div className="col-6">{data1.modelEngine}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Numberofcylinders[localStorage.getItem("language") || 'Number of cylinders']}</div>
                                        <div className="col-6">{data1.numberofcylinders}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Numberofvalvespercylinder[localStorage.getItem("language") || 'Number of valves per cylinder']}</div>
                                        <div className="col-6">{data1.numberofvalvespercylinder}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Positionofcylinders[localStorage.getItem("language") || 'Position of cylinders']}</div>
                                        <div className="col-6">{data1.positionofcylinders}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Power[localStorage.getItem("language") || 'Power']}</div>
                                        <div className="col-6">{data1.power}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Torque[localStorage.getItem("language") || 'Torque']}</div>
                                        <div className="col-6">{data1.torque}</div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                       {(data1.fuelType === "Electricity")&& <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Electric[localStorage.getItem("language") || 'Electric']}</span> </div>
                            <div className="p-3">
                                <div className="p-4">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Batterycapacity[localStorage.getItem("language") || 'Battery Capacity']}</div>
                                        <div className="col-6">{data1.batterycapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.AverageEnergyconsumptionWLTP[localStorage.getItem("language") || 'Average Energy Consumption (WLTP)']}</div>
                                        <div className="col-6">{data1.averageenergyconsumptionwltp}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Enginelocationnumber1[localStorage.getItem("language") || 'Engine location number 1']}</div>
                                        <div className="col-6">{data1.enginelocationnumber1}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Enginelocationnumber2[localStorage.getItem("language") || 'Engine location number 2']}</div>
                                        <div className="col-6">{data1.enginelocationnumber2}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Systempower[localStorage.getItem("language") || 'System Power']}</div>
                                        <div className="col-6">{data1.systempower}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Systemtorque[localStorage.getItem("language") || 'System torque']}</div>
                                        <div className="col-6">{data1.systemtorque}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.AverageEnergyconsumptionWLTP[localStorage.getItem("language") || 'Average Energy consumption']}</div>
                                        <div className="col-6">{data1.averageenergyconsumption}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Electricmotorpowernumber[localStorage.getItem("language") || 'Electric motor power number 1']}</div>
                                        <div className="col-6">{data1.electricmotorpowernumber1}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Electricmotorpowernumber2[localStorage.getItem("language") || 'Electric motor power number 2']}</div>
                                        <div className="col-6">{data1.electricmotorpowernumber2}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.AllelectricrangeWLTP[localStorage.getItem("language") || 'Electric Range']}</div>
                                        <div className="col-6">{data1.electricrange}</div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Drivetrain[localStorage.getItem("language") || 'Drivetrain']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Drivewheel[localStorage.getItem("language") || 'Drive Wheel']}</div>
                                        <div className="col-6">{data1.drivewheel}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Frontbrakes[localStorage.getItem("language") || 'Front brakes']}</div>
                                        <div className="col-6">{data1.frontbrakes}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Frontsuspension[localStorage.getItem("language") || 'Front suspension']}</div>
                                        <div className="col-6">{data1.frontsuspension}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Numberofgearsandtypeofgearbox[localStorage.getItem("language") || 'Number of Gears (automatic transmission)']}</div>
                                        <div className="col-6">{data1.numberofGears}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Powersteering[localStorage.getItem("language") || 'Power steering']}</div>
                                        <div className="col-6">{data1.powersteering}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Rearbrakes[localStorage.getItem("language") || 'Rear brakes']}</div>
                                        <div className="col-6">{data1.rearbrakes}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Rearsuspension[localStorage.getItem("language") || 'Rear suspension']}</div>
                                        <div className="col-6">{data1.rearsuspension}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Steeringtype[localStorage.getItem("language") || 'Steering type']}</div>
                                        <div className="col-6">{data1.steeringtype}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Tiressize[localStorage.getItem("language") || 'Tires size']}</div>
                                        <div className="col-6">{data1.tiressize}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Wheelrimssize[localStorage.getItem("language") || 'Wheel rims size']}</div>
                                        <div className="col-6">{data1.wheelrimssize}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>{translation.Wheelrimssize[localStorage.getItem("language") || 'Space']}</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fueltankcapacity[localStorage.getItem("language") || 'Fuel tank capacity']}</div>
                                        <div className="col-6">{data1.fueltankcapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.KerbWeight[localStorage.getItem("language") || 'Kerb Weight']}</div>
                                        <div className="col-6">{data1.kerbWeight}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Maxload[localStorage.getItem("language") || 'Max load']}</div>
                                        <div className="col-6">{data1.maxload}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Maxweight[localStorage.getItem("language") || 'Max weight']}</div>
                                        <div className="col-6">{data1.maxweight}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </>}
                        </center>
                    </div>
                </div>
            </div>:<Loader/>}
            <div className="page-title"><span style={{float:"left"}}>Compare Cars</span> <span  style={{float:"right"}}><Link to="/all-compare-cars"  className='no-underline yellow-text'>{translation.seeMore[localStorage.getItem("language") || 'See More']} <AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
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
                                        <img className='vs-image' src={vsImage} alt="vs"/>
                                        </center> <h4 className='blue-text'>{x.car1[0].brand} {x.models} {x.car1[0].generation} {x.car1[0].startofproduction} VS {x.car2[0].brand} {x.models} {x.car2[0].generation} {x.car2[0].startofproduction}</h4>
                                    
                                        <div className='row'>
                                            <div className='col-6' >
                                                <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.car1[0].power}</span>  <br/>
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
        </div>
    </>)
}
