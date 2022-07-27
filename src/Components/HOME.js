import React from 'react';
import { Link } from 'react-router-dom';
import BILL from './BILL';
import BMI from './BMI';
import EMI from './EMI';

const HOME = () => {
    return (
        <div className='container' style={home}>
            <Home />     
            <Link to='/BILL' className='btn btn-primary' style={btn}>BILL Calculation</Link>
            <Link to='/BMI' className='btn btn-primary' style={btn}>BMI Calculation</Link>
            <Link to='/EMI' className='btn btn-primary' style={btn}>EMI Calculation</Link>
        </div>
    )
}
export default HOME

const Home = () => {
    return (
        <>
            <h1>Welcome to The Special Calculator</h1>
            <h4>Made with React JS</h4>
            <h2 style={{marginTop:"30vh"}}>Click on any button to start calculating </h2>
        </>
    )
}

const home = {
    backgroundImage: "url(https://webartdevelopers.com/blog/wp-content/uploads/2020/06/css-particles-background.gif)",
    color: "white",
    textAlign: "center",
    minHeight: "100vh",
    paddingTop: "10vh"
}
const btn = {
    marginTop: "3vh",
    marginRight: "30px"
}