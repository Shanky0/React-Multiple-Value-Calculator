import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import BILL from './BILL';
import EMI from './EMI';
import HOME from './HOME';

const BMI = () => {
    return (
        <>
            <div className='container' style={cont}>
                <div style={{ textAlign: "center" }}>
                    <Link to='/' className='btn btn-outline-dark' style={btn}> &#8592; Go Back</Link>
                    <Link to='/BILL' className='btn btn-outline-dark' style={btn}>BILL Calculation</Link>
                    <Link to='/EMI' className='btn btn-outline-dark' style={btn}>EMI Calculation</Link>
                </div>
                <BmDisplay />
            </div>

        </>

    )
}

export default BMI;


const BmDisplay = () => {
    let win, hin, inpW, inpH, BMI;
    const select = () => {
        win = document.getElementById("win").value;
        hin = document.getElementById("hin").value;
        if (win === "kg") {
            document.getElementById('hin').value = "m";
            hin = "m";
        } else if (win === 'pd') {
            document.getElementById('hin').value = "in";
            hin = "in";
        }
        if (hin === 'm') {
            document.getElementById('win').value = "kg";
            win = "kg";
        } else if (hin === "in") {
            document.getElementById('win').value = "pd";
            win = "pd";
        }
    }

    const calculate = (e) => {
        inpH = Number(document.querySelector("#height").value);
        inpW = Number(document.querySelector("#weight").value);
        win = document.getElementById("win").value;
        hin = document.getElementById("hin").value;
        if (win === "-1" || hin === "-1") {
            document.querySelector("#result").innerHTML = "Please Select All Unit fields for Calculation";
            document.querySelector("#result").style = "color:red;font-size:20px;margin-top:15px;text-align:center";
        } else if (inpH === "" || inpW === "") {
            document.querySelector("#result").innerHTML = "Please Fill all fields.";
            document.querySelector("#result").style = "color:red;font-size:20px;margin-top:15px;text-align:center;";
        } else {
            if (win === "kg") {
                BMI = (inpW / Math.pow(inpH, 2)).toFixed(2);
            } else if (win === 'pd') {
                BMI = ((inpW / Math.pow(inpH, 2)) * 703).toFixed(2);
            }

            if (BMI >= 30.00) {
                document.querySelector("#result").innerHTML = "You have Obesity.";
                document.querySelector("#bm").innerHTML = `Your BMI is ${BMI}`;
                document.querySelector("#bm").style = "color:red;font-size:20px;margin-top:15px;text-align:center;";
                document.querySelector("#result").style = "color:red;font-size:20px;margin-top:15px;text-align:center;";

            } else if (BMI >= 25.00 && BMI <= 29.99) {
                document.querySelector("#result").innerHTML = "You are OverWeight.";
                document.querySelector("#bm").innerHTML = `Your BMI is ${BMI}`;
                document.querySelector("#bm").style = "color:coral;font-size:20px;margin-top:15px;text-align:center;";
                document.querySelector("#result").style = "color:coral;font-size:20px;margin-top:15px;text-align:center;";
            } else if (BMI >= 18.50 && BMI <= 24.99) {
                document.querySelector("#result").innerHTML = "You have Healthy Weight.";
                document.querySelector("#bm").innerHTML = `Your BMI is ${BMI}`;
                document.querySelector("#bm").style = "color:green;font-size:20px;margin-top:15px;text-align:center;";
                document.querySelector("#result").style = "color:green;font-size:20px;margin-top:15px;text-align:center;";
            } else if (BMI < 18.50) {
                document.querySelector("#result").innerHTML = "You are UnderWeight.";
                document.querySelector("#bm").innerHTML = `Your BMI is ${BMI}`;
                document.querySelector("#bm").style = "color:blue;font-size:20px;margin-top:15px;text-align:center;";
                document.querySelector("#result").style = "color:blue;font-size:20px;margin-top:15px;text-align:center;";
            }
        }
    }
    return (
        <>
            <div style={bmi}>
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label" style={{ fontWeight: "800", fontSize: "1.6em" }} >Weight -</label>
                    <span ><select class="form-select" style={span} id='win' onClick={select}>
                        <option selected disabled value='-1'>Select Weight Unit </option>
                        <option value="kg">Kilogram</option>
                        <option value="pd">Pounds</option>
                    </select></span>
                    <input type="number" class="form-control" id="weight" placeholder="Enter Weight" />
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label" style={{ fontWeight: "800", fontSize: "1.6em" }}>Height -</label>
                    <span ><select class="form-select" style={span} id='hin' onClick={select}>
                        <option selected disabled value='-1'>Select Height Unit</option>
                        <option value="m">Meters</option>
                        <option value="in">Inches</option>
                    </select></span>

                    <input type="number" class="form-control" id="height" placeholder="Enter Height" />
                </div>
                <button className='btn btn-dark' style={btn} id="calculate" onClick={calculate}> Calculate</button>
                <h2 id="result"> </h2>
                <h3 id="bm"></h3>
            </div>

        </>
    )
}

const cont = {
    backgroundImage: "url(https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg)",
    border: "1px solid white",
    width: "70%",
    height: "100vh",
}
const bmi = {
    margin: "8% 20%",
    fontSize: "20px",

}
const btn = {
    marginTop: "3vh",
    marginRight: "30px"
}
const span = {
    width: "50%",

}