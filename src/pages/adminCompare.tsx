import { getSearch,getComparisonCar,removeCompareCar, addCompare} from "../functions/apiCalls"
import { useEffect,useState } from "react"
import MaterialTable from "material-table"
import AdminNavbar from "../components/adminNavBar";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BsSearch } from 'react-icons/bs';
import Form from 'react-bootstrap/Form';


export default function AdminCompare (){
    const [data, setData] =  useState<any[]>([])
    useEffect(()=>{ 
        console.log("calling")
        getComparisonCar().then((x)=>{setData(x)})
    },[])
    console.log(data)

    const handledelete = (id) =>{
        removeCompareCar(id)
    }


    return (<>
        <div className="adminDashboard row">
            <div className="col-md-2 yellow-bg">
                <div className="page-title">Brands</div>
                <div className="container p-5">
                        <AdminNavbar/> 
                </div>
            </div>
            
            <div className="col-md-10">
                <div className="container p-5">
                    <h2>Compare Cars</h2>
                    <br/>
                    <AddComparison/>
                    <br/><br/>
                    <div>
                        <MaterialTable
                        columns={[
                            { title: "Car 1", field: "name1"},
                            { title: "Car 2", field: "name2"},
                        ]}
                        
                        options={{
                            actionsColumnIndex: -1,
                            pageSize:20,
                        }}
                        data={data}
                        title="Compare Cars"
                        editable={{
                            onRowDelete: oldData =>
                              new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    handledelete(oldData.id)
                                  const dataDelete = [...data];
                                  const index = oldData.tableData.id;
                                  dataDelete.splice(index, 1);
                                  setData([...dataDelete]);
                    
                                  resolve(data);
                                }, 1000)
                              }),
                        }}
                        />
                    </div>
                </div>
            </div>
        </div>
    </>)
}

function AddComparison(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [search,setSearch] = useState('')
    const [data, setData] =  useState<any[]>([])
    const [selectedCars, setCars] =  useState<any[]>([])
    const handleSearch = (event) => {
        event.preventDefault();
        getSearch(search).then((x)=>setData(x))
    }
    
    const selectCar = (id) =>{
        let cars = selectedCars
        cars.push(id)
        setCars(cars)
        const dataDelete = data.filter(x=> x.car_id!==id);
        setData(dataDelete);
        
        if (selectedCars.length===2){
            addCompare(cars[0],cars[1])
            handleClose()
            setTimeout(()=>window.location.reload(),1000)
        }
    }
    return(
        <>
            <Button variant="primary" onClick={handleShow}>
                Select 2 Cars
            </Button>
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
                {(data.length>0)&&<>
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
                </>}
                </Modal.Body>
            <Modal.Footer>
            
            </Modal.Footer>
        </Modal>
        </>
    )
}