import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
const Home = () => {
    const [medicines, setMedicine] = useState([])


    useEffect(() => {
        fetch('./medicine.JSON')
            .then(res => res.json())
            .then(data => setMedicine(data))
    }, [])

    console.log(medicines);
    return (
        <div className="container">

            <h1 className="TEXT">Worlds Top doctores</h1>
            <div className="mt-3">
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
    );
};

export default Home;