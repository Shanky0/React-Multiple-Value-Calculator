import React from 'react'
import { Link } from 'react-router-dom';

const EMI = () => {
    return (
        <>
            <div>EMI Calculation</div>
            <Link to='/' className='btn'>HOME Page</Link>
            <Link to='/BMI' className='btn'>BMI Calculation</Link>
            <Link to='/BILL' className='btn'>BILL Calculation</Link>
        </>
    )
}

export default EMI