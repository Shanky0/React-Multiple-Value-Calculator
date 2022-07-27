import React from 'react'
import { Link } from 'react-router-dom';

const BILL = () => {
    return (
        <>
            <div style={{ background: "url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/4c032e28008799.56e41b3bbd979.gif)",backgroundSize:"cover" }}>
                <div className='container' style={cont}>
                    <div style={{ textAlign: "center" }}>
                        <Link to='/' className='btn ' style={btn}> &#8592; Go Back</Link>
                        <Link to='/BMI' className='btn ' style={btn}>BMI Calculation</Link>
                        <Link to='/EMI' className='btn ' style={btn}>EMI Calculation</Link>
                    </div>
                    <h1 style={{ textAlign: "center", color: "white", border: "1px solid white", width: "60%", margin: "50px auto", background: "linear-gradient(90deg, #0b2e5c, #4c3b6f, #7e487a, #aa587d, #cf6f7b, #ea8c78, #faaf78, #ffd582)" }}>BILL Calculator</h1>
                    <BillDisplay />
                </div>
            </div>

        </>
    )
}
export default BILL;

const BillDisplay = () => {
    let unit, price;
    const calculate = () => {
        unit = Number(document.querySelector("#unit").value);
        if (unit == "") {
            document.querySelector("#result").innerHTML = "Please enter units for Calculation";
            document.querySelector("#result").style = "color:red;font-size:20px;margin-top:15px;text-align:center";
        } else if (unit < 0) {
            document.querySelector("#result").innerHTML = "Please enter valid units for Calculation";
            document.querySelector("#result").style = "color:red;font-size:20px;margin-top:15px;text-align:center";
        } else {

            if (unit <= 50) {
                price = unit * 3.50;
            } else if (unit > 50 && unit <= 100) {
                price = 50 * 3.50;
                price += (unit - 50) * 4.00;
            } else if (unit > 100 && unit <= 250) {
                price = 50 * 3.50;
                unit -= 50;
                price += 100 * 4.00;
                unit -= 100;
                price += unit * 5.20;
            } else if (unit > 250) {
                price = 50 * 3.50;
                unit -= 50;
                price += 100 * 4.00;
                unit -= 100;
                price += 100 * 5.20;
                unit -= 100;
                price += unit * 6.50;
            }
            document.querySelector("#result").innerHTML = `Your Electricity bill is : ${price}`;
            document.querySelector("#result").style = "border:1px solid;padding:1px;background-color:#6d6875;width:60%;margin:auto;color:white;text-align:center;border-radius:20px"
        }
    }

    return (
        <>
            <div style={bmi}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" className="form-label" style={{ fontWeight: "800", fontSize: "1.6em", color: "#003566" }} >Electricity Used -</label>
                    <input type="number" className="form-control" id="unit" placeholder="Enter units" />
                </div>
                <button className='btn' style={{ backgroundColor: "#0077b6", color: "white" }} id="calculate" onClick={calculate}> Calculate</button>
            </div>
            <h2 id="result"> </h2>
            <h3 id="bm"> </h3>
        </>
    )
}

const cont = {
    backgroundImage: "url(https://videohive.img.customer.envatousercontent.com/files/a520307e-8e7a-4b9c-9cb5-60cb91405691/inline_image_preview.jpg?auto=compress%2Cformat&fit=crop&crop=top&max-h=8000&max-w=590&s=8faba409bcd263eeb170d860015ee274)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: "1px solid white",
    width: "70%",
    height: "100vh",
    boxShadow: "0px 0px 64px 47px rgba(128,224,237,0.88)"
}
const btn = {
    marginTop: "3vh",
    marginRight: "30px",
    color: "white",
    background: "hsla(221, 55%, 73%, .7)",
    outline: "black",
}
const bmi = {
    margin: "5% 20%",
    fontSize: "20px",
}