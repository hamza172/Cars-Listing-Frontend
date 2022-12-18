import { useState } from 'react';


export default function CompareCars (){
    const [car1,setCar1] = useState()
    const [car2,setCar2] = useState()
    const [car3,setCar3] = useState()

    return (<>
        <div className="container">
            <div className="pageCon">
                
                <center><div className="page-title">Compare Cars Side by Side</div></center>
                <div className='row'>
                    <div className='col-md-3 p-2'>

                    </div>
                    <div className='col-md-3 p-2'>

                    </div>
                    <div className='col-md-3 p-2'>

                    </div>
                </div>
            </div>
        </div>
    </>)
}