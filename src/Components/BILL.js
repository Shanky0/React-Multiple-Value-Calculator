import React from 'react'
import { Link } from 'react-router-dom';
import BMI from './BMI';
import EMI from './EMI';
import HOME from './HOME';


const BILL = () => {
    return (
        <>
            <div>BILL Calculation</div>
            <Link to='/' className='btn'>HOME Page</Link>
            <Link to='/BMI' className='btn'>BMI Calculation</Link>
            <Link to='/EMI' className='btn'>EMI Calculation</Link>
        </>
    )
}

export default BILL