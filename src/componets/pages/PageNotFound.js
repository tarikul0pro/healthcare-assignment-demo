import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css'
const PageNotFound = () => {
    return (
        <div className="conatainer">
            <h1 className="text">The Page Was Not Found</h1>

            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvRJwMQmEIIqmNDw_vB_a_TI7gEcoB_PbLPQ&usqp=CAU" alt="" />
            <h1>404 error</h1>
            <Link to='/home' className="btn btn-warning d-block mx-auto w-25">GO BACK</Link>

        </div>
    );
};

export default PageNotFound;