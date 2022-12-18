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
                                <Link to="/all-cars" className="white-text">Top Cars</Link><br/>
                                <Link to="/all-electric-cars" className="white-text">Top Electric Cars</Link><br/>
                                <Link to="/hot-cars" className="white-text">Hot Cars</Link><br/>
                                <Link to="#" className="white-text">Top Hybrid Cars</Link><br/>
                                <Link to="/all-brands" className="white-text">All Brands</Link><br/>
                            </center>
                        </div>
                        <div className="col-md-4">
                            <center><h1 className="white-text">Brand Title</h1></center>
                            
                        </div>
                        <div className="col-md-4">
                            <center>
                                <br/>
                                <h4><span className="yellow-text">SUPPORT</span></h4>
                                <Link to="#" className="white-text">Privacy Policy</Link><br/>
                                <Link to="#" className="white-text">Contact Us</Link><br/>
                                <Link to="#" className="white-text">Terms of Use</Link><br/>
                                <Link to="#" className="white-text">DMCA</Link><br/>
                                <Link to="#" className="white-text">Disclaimer</Link><br/>
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