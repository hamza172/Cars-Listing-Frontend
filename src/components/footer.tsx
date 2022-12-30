import { Link } from "react-router-dom";
import { translation } from "../translation";

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
                                <h4><span className="yellow-text">{translation.topCharts[localStorage.getItem("language") || 'TOP CHARTS']}</span></h4>
                                <Link to="/all-cars" className="white-text">{translation.topCars[localStorage.getItem("language") || 'Top Cars']} </Link><br/>
                                <Link to="/all-electric-cars" className="white-text">{translation.topElectricCars[localStorage.getItem("language") || 'Top Electric Cars']}</Link><br/>
                                <Link to="/hot-cars" className="white-text">{translation.hotCars[localStorage.getItem("language") || 'Hot Cars']}</Link><br/>
                                <Link to="/all-hybrid-cars" className="white-text">{translation.topHybridCars[localStorage.getItem("language") || 'Top Hybrid Cars']} </Link><br/>
                                <Link to="/all-brands" className="white-text">{translation.carBrands[localStorage.getItem("language") || 'All Brands']}</Link><br/>
                            </center>
                        </div>
                        <div className="col-md-4">
                            <center><h1 className="white-text">SOLNCAR</h1></center>
                            
                        </div>
                        <div className="col-md-4">
                            <center>
                                <br/>
                                <h4><span className="yellow-text">{translation.support[localStorage.getItem("language") || 'SUPPORT']}</span></h4>
                                <Link to="/privacy-policy" className="white-text">Privacy Policy</Link><br/>
                                <Link to="/contact-us" className="white-text">{translation.contactUs[localStorage.getItem("language") || 'Contact Us']}</Link><br/>
                                <Link to="/terms-of-service" className="white-text">Terms of Use</Link><br/>
                                <Link to="/dmca" className="white-text">DMCA</Link><br/>
                                <Link to="/disclaimer" className="white-text">Disclaimer</Link><br/>
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