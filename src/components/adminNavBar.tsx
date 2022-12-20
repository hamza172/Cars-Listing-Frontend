import { Link } from "react-router-dom";

export default function AdminNavbar (){
    return(<div className="admin-navbarr">
        <Link to='/admin'>All Cars</Link><br/>
        <Link to='/scrapping'>Scrapping</Link><br/>
        <Link to='/admin-Compare'>Compare</Link><br/>
        <Link to='/logout'>Logout</Link><br/>
    </div>)
}