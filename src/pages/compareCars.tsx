import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getCarsByYear, getOne, getYears } from '../functions/apiCalls';
import  { MiniLoader } from '../components/loading';
import { Link } from 'react-router-dom';
import { translation } from "../translation";
import Form from 'react-bootstrap/Form';
import { getHomeComparisonCar } from '../functions/apiCalls';
import { AiOutlineDoubleRight, AiOutlinePlus } from 'react-icons/ai';
import { vsImage } from './images';

export default function CompareCars (){
    const [compareCars, setCompareCars] =  useState<any[]>([])

    useEffect(()=>{ 
        getHomeComparisonCar().then(x=>setCompareCars(x || []))
    },[]) 
    return (<>
        <div className="container">
            <div className="pageCon">
                
                <center><div className="page-title">{translation.compareCarsSidebySide[localStorage.getItem("language") || 'Compare Cars Side by Side']}</div></center>
                <div className='row-comapre'>
                    <div className='row-comapre-p4 p-2'>
                        <center><SearchCar/></center>
                    </div>
                    <div className='row-comapre-p4 p-2'>
                        <center><SearchCar/></center>
                    </div>
                    <div className='row-comapre-p4 p-2'>
                        <center><SearchCar/></center>
                    </div>
                </div>
            </div>
            <div className="page-title"><span style={{float:"left"}}>{translation.compareCars[localStorage.getItem("language") || 'Compare Cars']}</span> <span  style={{float:"right"}}><Link to="/all-compare-cars"  className='no-underline yellow-text'>{translation.seeMore[localStorage.getItem("language") || 'See More']} <AiOutlineDoubleRight style={{marginRight:"10px"}}/></Link></span></div>
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
                                                <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : {x.car1[0].power}</span>  <br/>
                                                <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : {x.car1[0].brand}</span><br/>
                                            </div>
                                            <div className='col-6'>
                                                <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : {x.car2[0].power}</span>  <br/>
                                                <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : {x.car2[0].brand}</span><br/>
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

function SearchCar (){
    const [show, setShow] = useState(false);
    const [loading, setLoading] = useState(false);
    const [searchLoading, setSearchLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [data, setData] =  useState<any[]>([])
    const [data1, setData1] =  useState<{[key: string]: any}>({});
    const [car,setCar] = useState('')
    const [years,setYears] = useState<any[]>([])
    const [brands,setBrands] = useState<any[]>([])
    const [models,setModels] = useState<any[]>([])
    const [generations,setGenerations] = useState<any[]>([])
    const [selectedYear,setSelectedYear] = useState('')
    const [selectedBrand,setSelectedBrand] = useState('')
    const [selectedModel,setSelectedModel] = useState('')
    const [selectedGen,setSelectedGen] = useState('')
    const [brandData, setBrandData] =  useState<any[]>([])
    const [modelData, setModelData] =  useState<any[]>([])
    const [genData, setGenData] =  useState<any[]>([])
    useEffect(()=>{
        getYears().then(x=>setYears(x))
    },[])
    
    const handleYear = (value) => {
        let brandstemp : string[]=[];
        setSelectedYear(value)
        getCarsByYear(value).then((x)=>{
            setData(x)
            setBrandData(x)
            x.map(k=>brandstemp.push(k.brand))
            setBrands(brandstemp.filter((x, i, a) => a.indexOf(x) === i))
        })
    }
    const handleBrand = (value)=>{
        setData(brandData)
        let brandstemp2 : string[]=[];
        setSelectedBrand(value);
        (brandData.filter(x=> x.brand === value)).map(x=>brandstemp2.push(x.model))
        setModels(brandstemp2.filter((x, i, a) => a.indexOf(x) === i))
        setSelectedModel(models[0]);
        setData(brandData.filter(x=>x.brand===value))
        setModelData(data)
    }
    const handleModel = (value) =>{
        setData(modelData)
        let brandstemp2 : string[]=[];
        setSelectedModel(value);
        (modelData.filter(x=> x.model === value)).map(x=>brandstemp2.push(x.generation))
        setGenerations(brandstemp2.filter((x, i, a) => a.indexOf(x) === i))
        setSelectedGen(generations[0]);
        setData(modelData.filter(x=>x.model===value))
        setGenData(data)
    }
    const handleGen = (value) =>{
        setData(genData)
        setSelectedGen(value);
        setData(genData.filter(x=>x.generation===value))
    }

    const selectCar = (id) =>{
        setCar(id)
        getOne(parseInt(id||'')).then((x)=>setData1(x))
        setLoading(true)
        handleClose()
    }

    return (<>
        <Button className='compareCarButtonBlue' variant="primary" onClick={handleShow}>
            <AiOutlinePlus/>
        {translation.selectCar[localStorage.getItem("language") || 'Add A Car']}
        </Button>

        {data1.brand ? <>
            <div className="container">
                <div className="pageCon">
                    <h5><b>{data1.brand} {data1.generation} {data1.startofproduction} </b></h5>    
                    <img src={data1.images[0].image || "https://qesot.com/images/placeholder-img.png"} alt="car" className='single-image-card-archive' />         
                </div>
                <div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.General[localStorage.getItem("language") || 'General']}</span> </div>
                            <div className="p-0">
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
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.Performance[localStorage.getItem("language") || 'Performance']}</span> </div>
                            <div className="p-0">
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
                                        <div className="col-6 blue-text">F{translation.Fuelconsumptioneconomyextraurban[localStorage.getItem("language") || 'Fuel consumption (economy) - extra urban (NEDC)']}</div>
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
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.Dimensions[localStorage.getItem("language") || 'Dimensions']}</span> </div>
                            <div className="p-0">
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
                        {(data1.fuelType === "Petrol (Gasoline)" || (data1.fuelType === "Diesel") || (data1.fuelType === "Petrol / LPG"))&&<div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.Engine[localStorage.getItem("language") || 'Engine']}</span> </div>
                            <div className="p-0">
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
                                        <div className="col-6 blue-text">{translation.Engineoilcapacity[localStorage.getItem("language") || 'Engine oil capacity']}	</div>
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
                        {(data1.fuelType === "Electricity")&&<div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.Electric[localStorage.getItem("language") || 'Electric']}</span> </div>
                            <div className="p-0">
                                <div className="">
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
                                        <div className="col-6 blue-text">{translation.AllelectricrangeWLTP[localStorage.getItem("language") || 'Electric Range']}	</div>
                                        <div className="col-6">{data1.electricrange}</div>
                                    </div>
                                </div>
                            </div>
                        </div>}
                        <div className="pageCon ">
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.Drivetrain[localStorage.getItem("language") || 'Drivetrain']}</span> </div>
                            <div className="p-0">
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
                                        <div className="col-6 blue-text">{translation.Tiressize[localStorage.getItem("language") || 'Tires size']}	</div>
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
                            <div className="page-title  blue-bg"><span style={{float:"left"}}>{translation.Wheelrimssize[localStorage.getItem("language") || 'Space']}</span> </div>
                            <div className="p-0">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">{translation.Fueltankcapacity[localStorage.getItem("language") || 'Fuel tank capacity']}	</div>
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
        </>:<>{loading && <><MiniLoader/></>}</>}



        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>{translation.chooseCarsToCompare[localStorage.getItem("language") || 'Choose Cars To Compare']}</Modal.Title>
            </Modal.Header>
            <Modal.Body><>
                <Form className="">
                  <Form.Select aria-label="Select year"  value={selectedYear} onChange={(e)=>{handleYear(e.target.value)}}>
                    <option defaultChecked >Select Year</option>
                    {years && <>
                        {years.map((x)=><option value={x.year}>{x.year}</option>)}
                    </>}
                    </Form.Select>
                    <br/>
                    <Form.Select aria-label="Select Brand" value={selectedBrand} disabled={brands.length===0} onChange={(e)=>{handleBrand(e.target.value)}}>
                    <option defaultChecked >Select Brand</option>
                    {brands && <>
                        {brands.map((x)=><option value={x}>{x}</option>)}
                    </>}
                    </Form.Select>
                <br/>
                    <Form.Select aria-label="Select Model" value={selectedModel} disabled={models.length===0} onChange={(e)=>{handleModel(e.target.value)}}>
                    <option defaultChecked >Select Model</option>
                    {models && <>
                        {models.map((x)=><option value={x}>{x}</option>)}
                    </>}
                    </Form.Select>
                <br/>
                    <Form.Select aria-label="Select Generation" value={selectedGen} disabled={generations.length===0} onChange={(e)=>{handleGen(e.target.value)}}>
                    <option defaultChecked >Select Generations</option>
                    {generations && <>
                        {generations.map((x)=><option value={x}>{x}</option>)}
                    </>}
                    </Form.Select>
                </Form>
            </>
                {(data.length>0)?<>
                    {data.map((x)=><>
                    <div>
                        <div className="archive-item-cars">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <img src={x.image || "https://qesot.com/images/placeholder-img.png"} alt="car" className='image-card-archive' />    
                                </div>
                                <div className="col-md-7">
                                    <span className='no-underline'>{x.brand} {x.generation} {x.startofproduction} </span><br/>
                                    <span className="grey-text totalcars">{translation.Brand[localStorage.getItem("language") || 'Brand']} : </span><span className='lightgrey-text'>{x.brand}</span><br/>
                                    <span className="grey-text totalcars">{translation.Power[localStorage.getItem("language") || 'Power HP']} : </span><span className='lightgrey-text'>{x.power ? x.power : x.systempower}</span>  <br/>
                                    <Button onClick={()=>selectCar(x.car_id)}>Select</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </>)}
                </>:<>{searchLoading && <><MiniLoader/></>}</>}
                </Modal.Body>
            <Modal.Footer>
            
            </Modal.Footer>
        </Modal>
    </>)
}