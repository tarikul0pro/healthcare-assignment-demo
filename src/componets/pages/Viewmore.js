import React from 'react';
import { useParams } from 'react-router';

const Viewmore = () => {
    const {homeId}=useParams()
    return (
        <div>
            <h1> hello bangladesh:{homeId}</h1>
            
        </div>
    );
};

export default Viewmore;