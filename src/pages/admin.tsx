import { getAllCars, removeCar, removeHotCar, toHotCar } from "../functions/apiCalls"
import { useEffect,useState } from "react"
import MaterialTable from "material-table";
import AdminNavbar from "../components/adminNavBar";

export default function Admin (){
    const [data, setData] =  useState<any[]>([])
    useEffect(()=>{ 
        getAllCars().then((x)=>{
            setData(x.map((item) => {
                return {
                    ...item,
                    name: item.brand+ ' ' + item.model+ ' ' + item.generation+ ' ' + item.startofproduction,
                    source: "Qesot"
                }
            })
            )
        })
        
    },[])
    const handledelete = (id) =>{
        removeCar(id)
    }

    const changeHotCar = async(newValue,id) =>{
        console.log(newValue)
        if(newValue==="true"){
            console.log(id)
            await toHotCar(id)
        } else {
            await removeHotCar(id)
        }
        return true
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
                    <h2>All Cars</h2>
                    <br/>
                    <div>
                        <MaterialTable
                        columns={[
                            { title: "Name", field: "name",editable: 'never' },
                            { title: "Brand", field: "brand",editable: 'never' },
                            { title: "Source", field: "source",editable: 'never' },
                            { title: "Hot Car", field: "hotcar", lookup: { true: 'Yes', false: 'No' }},
                            {title: "Scrapping Date",field: 'addedon',editable: 'never'},
                        ]}
                        cellEditable={{
                            onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
                                return new Promise((resolve, reject) => {
                                  if(columnDef.field === 'hotcar'){
                                      rowData.hotcar = newValue;
                                      changeHotCar(newValue,rowData.car_id)
                                  }
                                  setTimeout(resolve, 1000);
                                }
                                )
                            }
                        }}
                        options={{
                            actionsColumnIndex: -1,
                            pageSize:20,
                        }}
                          editable={{
                            onRowDelete: oldData =>
                              new Promise((resolve, reject) => {
                                setTimeout(() => {
                                  handledelete(oldData.car_id)
                                  const dataDelete = [...data];
                                  const index = oldData.tableData.id;
                                  dataDelete.splice(index, 1);
                                  setData([...dataDelete]);
                    
                                  resolve(data);
                                }, 1000)
                              }),
                        }}
                    
                        data={data}
                        title="All Cars"
                        />
                    </div>
                </div>
            </div>
        </div>
    </>)
}