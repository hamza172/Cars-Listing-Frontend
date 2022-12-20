import { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { getOne, getSearch } from '../functions/apiCalls';
import Loader, { MiniLoader } from '../components/loading';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';
import { getHomeComparisonCar } from '../functions/apiCalls';

export default function CompareCars (){
    const [compareCars, setCompareCars] =  useState<any[]>([])

    useEffect(()=>{ 
        getHomeComparisonCar().then(x=>setCompareCars(x || []))
    },[]) 
    return (<>
        <div className="container">
            <div className="pageCon">
                
                <center><div className="page-title">Compare Cars Side by Side</div></center>
                <div className='row'>
                    <div className='col-md-4 p-4'>
                        <center><SearchCar/></center>
                    </div>
                    <div className='col-md-4 p-4'>
                        <center><SearchCar/></center>
                    </div>
                    <div className='col-md-4 p-4'>
                        <center><SearchCar/></center>
                    </div>
                </div>
            </div>
            <div className="page-title"><span style={{float:"left"}}>Compare Cars</span> <span  style={{float:"right"}}><Link to="/all-compare-cars"  className='no-underline yellow-text'>See More &gt;&gt;</Link></span></div>
                <div className="archive">
                    <div className="row">
                        {(compareCars.length>0)&&<>
                            {compareCars.map((x)=><>
                            <div className="archive-item-4 col-md-6">
                                    <div className='row'>
                                        <div className='col-6' >
                                            <img src={x.car1[0].image}  alt="car"/>
                                        </div>
                                        <div className='col-6'>
                                            <img src={x.car2[0].image}  alt="car"/>
                                        </div>
                                    </div>
                                    <div className="archive-item-inner-4">
                                     <center>
                                        <img className='vs-image' src="/images/vs.png" alt="vs"/>
                                        </center>
                                        <div className='row'>
                                            <div className='col-6' >
                                            <Link to={'/compare-two-cars/'+x.car1[0].car_id+'/'+x.car2[0].car_id} className='no-underline'>{x.car1[0].brand} {x.car1[0].generation} {x.car1[0].startofproduction} </Link>
                                                <span className="grey-text totalcars">Power HP : {x.car1[0].power}</span>  <br/>
                                                <span className="grey-text totalcars">Brand : {x.car1[0].brand}</span><br/>
                                            </div>
                                            <div className='col-6'>
                                            <Link to={'/compare-two-cars/'+x.car1[0].car_id+'/'+x.car2[0].car_id} className='no-underline'>{x.car2[0].brand} {x.car2[0].generation} {x.car2[0].startofproduction} </Link>
                                                <span className="grey-text totalcars">Power HP : {x.car2[0].power}</span>  <br/>
                                                <span className="grey-text totalcars">Brand : {x.car2[0].brand}</span><br/>
                                            </div>
                                        </div>
                                    </div>
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
    const [search,setSearch] = useState('')
    const [car,setCar] = useState('')

    
    const handleSearch = (event) => {
        event.preventDefault();
        setSearchLoading(true)
        getSearch(search).then((x)=>setData(x))
    }
    const selectCar = (id) =>{
        setCar(id)
        getOne(parseInt(id||'')).then((x)=>setData1(x))
        setLoading(true)
        handleClose()
    }

    return (<>
        <Button variant="primary" onClick={handleShow}>
            Select Car
        </Button>

        {data1.brand ? <>
            <div className="container">
                <div className="pageCon">
                    <h5><b>{data1.brand} {data1.generation} {data1.startofproduction} </b></h5>    
                    <img src={data1.images[0].image} alt="car" className='single-image-card-archive' />         
                </div>
                <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>General</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Body type</div>
                                        <div className="col-6">{data1.bodytype}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Brand</div>
                                        <div className="col-6">{data1.brand}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Doors</div>
                                        <div className="col-6">{data1.doors}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Generation</div>
                                        <div className="col-6">{data1.generation}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Model</div>
                                        <div className="col-6">{data1.model}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Modification (Engine)</div>
                                        <div className="col-6">{data1.modification}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Powertrain Architecture</div>
                                        <div className="col-6">{data1.powertrainArchitecture}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Seats</div>
                                        <div className="col-6">{data1.seats}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Start of production</div>
                                        <div className="col-6">{data1.startofproduction}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Performance</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Acceleration 0 - 100 km/h</div>
                                        <div className="col-6">{data1.acceleration100}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Acceleration 0 - 60 mph</div>
                                        <div className="col-6">{data1.acceleration60}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Acceleration 0 - 62 mph</div>
                                        <div className="col-6">{data1.acceleration60}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel Type</div>
                                        <div className="col-6">{data1.fuelType}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel consumption (economy) - combined (NEDC)</div>
                                        <div className="col-6">{data1.fuelconsumptionCombined}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel consumption (economy) - extra urban (NEDC)</div>
                                        <div className="col-6">{data1.fuelconsumptionExtraurban}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel consumption (economy) - urban (NEDC)</div>
                                        <div className="col-6">{data1.fuelconsumptionUrban}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Maximum Speed</div>
                                        <div className="col-6">{data1.maximumspeed}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Dimensions</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Drag coefficient (Cd)</div>
                                        <div className="col-6">{data1.dragcoefficient}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Front track	</div>
                                        <div className="col-6">{data1.fronttrack}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Height</div>
                                        <div className="col-6">{data1.height}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Length</div>
                                        <div className="col-6">{data1.length}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Minimum turning circle</div>
                                        <div className="col-6">{data1.minimumturningcircle}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Rear (Back) track</div>
                                        <div className="col-6">{data1.rearTrack}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Wheelbase</div>
                                        <div className="col-6">{data1.wheelbase}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Width</div>
                                        <div className="col-6">{data1.width}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Engine</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Compression ratio	</div>
                                        <div className="col-6">{data1.compressionratio}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Cylinder Bore</div>
                                        <div className="col-6">{data1.cylinderBore}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine aspiration</div>
                                        <div className="col-6">{data1.engineaspiration}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine displacement</div>
                                        <div className="col-6">{data1.enginedisplacement}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine oil capacity	</div>
                                        <div className="col-6">{data1.engineoilcapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel System</div>
                                        <div className="col-6">{data1.fuelSystem}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Model Engine</div>
                                        <div className="col-6">{data1.modelEngine}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Number of cylinders</div>
                                        <div className="col-6">{data1.numberofcylinders}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Number of valves per cylinder</div>
                                        <div className="col-6">{data1.numberofvalvespercylinder}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Position of cylinders</div>
                                        <div className="col-6">{data1.positionofcylinders}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Power</div>
                                        <div className="col-6">{data1.power}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Torque</div>
                                        <div className="col-6">{data1.torque}</div>
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
                                        <div className="col-6">{data1.batterycapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Average Energy consumption (WLTP)</div>
                                        <div className="col-6">{data1.averageenergyconsumptionwltp}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine location number 1</div>
                                        <div className="col-6">{data1.enginelocationnumber1}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Engine location number 2	</div>
                                        <div className="col-6">{data1.enginelocationnumber2}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">System power</div>
                                        <div className="col-6">{data1.systempower}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">System torque</div>
                                        <div className="col-6">{data1.systemtorque}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Average Energy consumption</div>
                                        <div className="col-6">{data1.averageenergyconsumption}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Electric motor power number 1</div>
                                        <div className="col-6">{data1.electricmotorpowernumber1}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Electric motor power number 2	</div>
                                        <div className="col-6">{data1.electricmotorpowernumber2}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Electric Range	</div>
                                        <div className="col-6">{data1.electricrange}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Drivetrain</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Drive wheel</div>
                                        <div className="col-6">{data1.drivewheel}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Front brakes</div>
                                        <div className="col-6">{data1.frontbrakes}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Front suspension</div>
                                        <div className="col-6">{data1.frontsuspension}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Number of Gears (automatic transmission)</div>
                                        <div className="col-6">{data1.numberofGears}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Power steering</div>
                                        <div className="col-6">{data1.powersteering}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Rear brakes</div>
                                        <div className="col-6">{data1.rearbrakes}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Rear suspension</div>
                                        <div className="col-6">{data1.rearsuspension}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Steering type</div>
                                        <div className="col-6">{data1.steeringtype}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Tires size	</div>
                                        <div className="col-6">{data1.tiressize}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Wheel rims size</div>
                                        <div className="col-6">{data1.wheelrimssize}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pageCon ">
                            <div className="page-title"><span style={{float:"left"}}>Space</span> </div>
                            <div className="p-3">
                                <div className="">
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Fuel tank capacity	</div>
                                        <div className="col-6">{data1.fueltankcapacity}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Kerb Weight</div>
                                        <div className="col-6">{data1.kerbWeight}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Max load</div>
                                        <div className="col-6">{data1.maxload}</div>
                                    </div>
                                    <div className="row row-techsheet">
                                        <div className="col-6 blue-text">Max weight</div>
                                        <div className="col-6">{data1.maxweight}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
            </div>
        </>:<>{loading && <><MiniLoader/></>}</>}



        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Search Car</Modal.Title>
            </Modal.Header>
            <Modal.Body><>
                <Form className="d-flex" onSubmit={handleSearch}>
                  <Form.Control
                    type="search"
                    style={{width:"100%"}}
                    placeholder="Search"
                    onChange={(e) => setSearch(e.target.value)}
                    className="me-2 searchbar-nav"
                    aria-label="Search"
                  />
                  <Button className="search-button-navbar" type='submit'><BsSearch/></Button>
                </Form>
            </>
                {(data.length>0)?<>
                    {data.map((x)=><>
                    <div>
                        <div className="archive-item-cars">
                            <div className="row align-items-center">
                                <div className="col-md-5">
                                    <img src={x.image} alt="car" className='image-card-archive' />    
                                </div>
                                <div className="col-md-7">
                                    <span className='no-underline'>{x.brand} {x.generation} {x.startofproduction} </span><br/>
                                    <span className="grey-text totalcars">Brand : {x.brand}</span><br/>
                                    <span className="grey-text totalcars">Power HP : {x.power}</span>  <br/>
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