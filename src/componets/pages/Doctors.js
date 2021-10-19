import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import "./Doctors.css"
const Doctors = () => {
    return (
        <div className="CardGroup ">
            <CardGroup >
                <Card className="card-padding">
                    <Card.Img variant="top" src="https://thememakker.com/templates/oreo/hospital/front/assets/images/department-1.jpg" />
                    <Card.Body>
                        <Card.Title>CARDIOLOGY
                        </Card.Title>
                        <Card.Text>
                            How all this mistaken al idea of denouncing pleasure praisings pain [...]
                    </Card.Text>
                    </Card.Body>

                    <button type="button" class="btn btn-warning">view more</button>

                </Card>
                <Card className="card-padding">
                    <Card.Img variant="top" src="https://thememakker.com/templates/oreo/hospital/front/assets/images/department-2.jpg" />
                    <Card.Body>
                        <Card.Title>PULMONOLOGY
                        </Card.Title>
                        <Card.Text>
                            How all this mistaken al idea of denouncing pleasure praisings pain [...]
                        </Card.Text>
                    </Card.Body>

                    <button type="button" class="btn btn-warning">view more</button>
                </Card>
                <Card className="card-padding">
                    <Card.Img variant="top" src="https://thememakker.com/templates/oreo/hospital/front/assets/images/department-3.jpg" />
                    <Card.Body>
                        <Card.Title>GYNECOLOGY
                        </Card.Title>
                        <Card.Text>
                            How all this mistaken al idea of denouncing pleasure praisings pain [...]
                        </Card.Text>
                    </Card.Body>

                    <button type="button" class="btn btn-warning">view more</button>

                </Card>
                
            </CardGroup>
            <CardGroup  className="mt-5">
                <Card className="card-padding">
                    <Card.Img variant="top" src="https://thememakker.com/templates/oreo/hospital/front/assets/images/blog-3.png" />
                    <Card.Body>
                        <Card.Title>CARDIOLOGY
                        </Card.Title>
                        <Card.Text>
                            How all this mistaken al idea of denouncing pleasure praisings pain [...]
                        </Card.Text>
                    </Card.Body>

                    <button type="button" class="btn btn-warning">view more</button>

                </Card>
                <Card className="card-padding">
                    <Card.Img variant="top" src="https://thememakker.com/templates/oreo/hospital/front/assets/images/blog-2.png" />
                    <Card.Body>
                        <Card.Title>PULMONOLOGY
                        </Card.Title>
                        <Card.Text>
                            How all this mistaken al idea of denouncing pleasure praisings pain [...]
                        </Card.Text>
                    </Card.Body>

                    <button type="button" class="btn btn-warning">view more</button>
                </Card >
                <Card className="card-padding">
                    <Card.Img variant="top" src="https://thememakker.com/templates/oreo/hospital/front/assets/images/blog-1.png" />
                    <Card.Body>
                        <Card.Title>GYNECOLOGY
                        </Card.Title>
                        <Card.Text>
                            How all this mistaken al idea of denouncing pleasure praisings pain [...]
                        </Card.Text>
                    </Card.Body>

                    <button type="button" class="btn btn-warning">view more</button>

                </Card>

            </CardGroup>
        </div>
        
    );
};

export default Doctors;