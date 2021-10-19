import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Home.css"
import banner from '../../img/1.jpg'
import banner2 from '../../img/r.jpg'
import banner3 from '../../img/26.jpg'
const Home = () => {
    const [medicines, setMedicine] = useState([])


    useEffect(() => {
        fetch('./medicine.JSON')
            .then(res => res.json())
            .then(data => setMedicine(data))
    }, [])

    console.log(medicines);
    return (<>
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner}
                        alt="First slide"
                    />
                 
                    <Carousel.Caption>
                        <h3 className="carosoel">Qualified Doctors
</h3>
                        <p className="carosoel">Contrary to popular belief,    <br />Lorem Ipsum is not simply random text. It has roots in    a piece of classical</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className="carosoel">Blood Bank
</h3>
                        <p className="carosoel">It is a long established fact that    <br />a reader will be distracted by the readable content    of a page when looking at</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className="carosoel">Health Care
</h3>
                        <p className="carosoel">How all this mistaken idea denoucing   <br /> pleasure and praisings pain was born    complete account expound.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
        <div className="container">
  
            <div>
                <div className="educations">
                    <div className="row">
                        {
                            medicines.slice(0,6).map((medicine) => (<div className="col-md-4">
                                <div className="cart">
                                    <div className="logo-img">
                                        <img className="w-75" src={medicine.img} alt="" />
                                    </div>
                                    <p className="name"> Name:{medicine.name}</p>
                                    <p className="name"> service:{medicine.service}</p>
                                    <div className="d-flex card-body">
                                        <a  class="btn btn-primary w-100 me-1"> <Link to="/viewmore"></Link>view more</a>
                                        
                                   </div>
                                    
                                </div>
                            </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
        </>
    );
};

export default Home;