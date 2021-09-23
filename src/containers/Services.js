import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
function Services() {
    const myReduxCounterInServicePage = useSelector(state => state.myCounter);
    return (
        <div>
            <h1>Service page</h1>
            <p>Count value in service page {myReduxCounterInServicePage}</p>
        </div>
    )
}

export default Services
