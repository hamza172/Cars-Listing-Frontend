
import Spinner from 'react-bootstrap/Spinner';
export default function Loader(){
    return(<>
        <div className="loader"><center><Spinner animation="border" /></center></div>
            
    </>)
}
export function MiniLoader(){
    return(<>
        <center><br/><br/><Spinner animation="border" /><br/><br/></center>
            
    </>)
}