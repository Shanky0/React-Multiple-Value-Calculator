import React from 'react';
import { Link } from 'react-router-dom';


const HOME = () => {
    return (
        <div style={{background:"url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/4c032e28008799.56e41b3bbd979.gif)",backgroundSize:"cover"}}>
        <div className='container' style={home}>
            <Home />     
            <Link to='/BILL' className='btn btn-primary' style={btn}>BILL Calculator</Link>
            <Link to='/BMI' className='btn btn-primary' style={btn}>BMI Calculator</Link>
            <Link to='/EMI' className='btn btn-primary' style={btn}>EMI Calculator</Link>
        </div></div>
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
    backgroundImage: "url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v960-ning-30.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=63dd5f402645ef52fb7dfb592aec765a)",
    color: "black",backgroundSize:"cover",
    width:"70%",
    textAlign: "center",
    minHeight: "100vh",
    paddingTop: "10vh",
    boxShadow:" 0px 0px 110px 33px rgba(86,77,117,1)"
}
const btn = {
    marginTop: "3vh",
    marginRight: "30px",
    padding:"13px 20px",
    fontWeight:"800",
    border:"1px solid white"
}