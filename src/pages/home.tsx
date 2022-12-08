import Carousel from 'react-bootstrap/Carousel';

export default function Home() {
    return(<>
         <div className='carousel-homepage'>
         <Carousel >
            <Carousel.Item>
                <img
                className="d-block w-100"
                src= "/images/8960.jpeg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h1 className="title-carousel">FIND the latest <span className="yellow-text">carS</span><br/>
                You Can <span className="yellow-text">compare</span> Cars side by side</h1>
                <p>Thinking of buying a car? Research new and Latest cars, compare vehicles , <br/>
                get car buying advice and reviews & more!<br/>
                Passenger cars, vans, light trucks and even margin cars or damaged vehicles,<br/>
                you’re sure to find what you’re looking for</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
         </div>
    </>)
}