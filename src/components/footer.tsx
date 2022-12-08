import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
        <div id="footer">
            <div className="sec1-f" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <center>
                                <br/>
                                <h4><span className="yellow-text">TOP CHARTS</span></h4>
                                <Link to="#">Top Cars</Link><br/>
                                <Link to="#">Top Electric Cars</Link><br/>
                                <Link to="#">Hot Cars</Link><br/>
                                <Link to="#">Top Hybrid Cars</Link><br/>
                                <Link to="#">All Brands</Link><br/>
                            </center>
                        </div>
                        <div className="col-md-4">
                            <center><h1 className="white-text">Brand Title</h1></center>
                            
                        </div>
                        <div className="col-md-4">
                            <center>
                                <br/>
                                <h4><span className="yellow-text">SUPPORT</span></h4>
                                <Link to="#">Privacy Policy</Link><br/>
                                <Link to="#">Contact Us</Link><br/>
                                <Link to="#">Terms of Use</Link><br/>
                                <Link to="#">DMCA</Link><br/>
                                <Link to="#">Disclaimer</Link><br/>
                            </center>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sec2-f">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <img
                            className="d-block f-logo-img"
                            src= "/images/lamborghini-log.png"
                            alt="First slide"
                            />
                            <img
                            className="d-block f-logo-img"
                            src= "/images/mercedes-benz-l.png"
                            alt="First slide"
                            />
                            <img
                            className="d-block f-logo-img"
                            src= "/images/gmc-logo.png"
                            alt="First slide"
                            />
                            <img
                            className="d-block f-logo-img"
                            src= "/images/chevrolet-logo.png"
                            alt="First slide"
                            />
                        </div>
                        <div className="col-md-4">
                            <center>
                                <img
                                    className="footer-bigcar"
                                    src= "/images/unnamed.png"
                                    alt="First slide"
                                    />

                            </center>
                        </div>
                        <div className="col-md-4">
                            <img
                            className="d-block f-logo-img"
                            src= "/images/bugatti-logo.png"
                            alt="First slide"
                            />
                            <img
                            className="d-block f-logo-img"
                            src= "/images/porsche-logo.png"
                            alt="First slide"
                            />
                            <img
                            className="d-block f-logo-img"
                            src= "/images/bmw-logo.png"
                            alt="First slide"
                            />
                            <img
                            className="d-block f-logo-img"
                            src= "/images/tesla-logo.png"
                            alt="First slide"
                            /></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}