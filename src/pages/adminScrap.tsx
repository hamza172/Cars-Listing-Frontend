import { scrap } from "../functions/apiCalls"
import { useEffect,useState } from "react"
import AdminNavbar from "../components/adminNavBar";
import  Button from "react-bootstrap/Button"

export default function Scrapping (){
    const handleTime = () =>{
        if (localStorage.getItem("scrapTime")){
            let stime = parseInt(localStorage.getItem("scrapTime")||'0')
            stime=stime+5400000
            let ctime = (new Date()).getTime()
            if (ctime>stime){
                return true
            } 
            else 
            return false
        } else {
            return true
        }
    }
    const [time, setTIme] =  useState(handleTime)
    
    const handleScrapping = ()=> {
        scrap()
        window.location.reload()
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
                <div className="pageCon">
                    <div className="page-title">Scrapping</div>
                    <div className="p-5">
                    Please CLick on the button below and wait for 1.5 hours for the function to extract 10 Cars form Qesot
                    <br/><br/>
                    {(time)&&<Button onClick={handleScrapping}>Scrap Data</Button>}
                    <br/><br/>
                    Thank You
                    </div>
                </div>
                </div>
            </div>
        </div>
    </>)
}