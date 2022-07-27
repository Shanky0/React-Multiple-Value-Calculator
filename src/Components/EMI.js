import React from 'react'
import { Link } from 'react-router-dom';

const EMI = () => {
    return (
        <>
            <div style={{ background: "url(https://mir-s3-cdn-cf.behance.net/project_modules/fs/4c032e28008799.56e41b3bbd979.gif)", backgroundSize: "cover" }}>
                <div className='container' style={cont}>
                    <div style={{ textAlign: "center" }}>
                        <Link to='/' className='btn btn-outline-dark' style={btn}> &#8592; Go Back</Link>
                        <Link to='/BMI' className='btn btn-outline-dark' style={btn}>BMI Calculator</Link>
                        <Link to='/BILL' className='btn btn-outline-dark' style={btn}>BILL Calculator</Link>
                    </div>
                    <h1 style={{ textAlign: "center", marginTop: "40px", color: "#1a759f" }}>EMI Calculator</h1>
                    <EmiDisplay />
                </div>
            </div>
        </>
    )
}

export default EMI;
let amount, interest, month, year, monthly, rate, time, totalInt, totalPay;
const EmiDisplay = () => {


    const calculate = () => {
        amount = Number(document.querySelector('#amount').value);
        interest = Number(document.querySelector('#interest').value);
        month = Number(document.querySelector('#month').value);
        year = Number(document.querySelector('#year').value);

        if (amount == "" || interest == "" || month == "" || year == "") {
            document.querySelector("#result").innerHTML = "Please fill all fields."
            document.querySelector("#result").style = "font-size:16px;color:red;margin:3%;"
        } else if (amount === -1 || interest === -1 || month === -1 || year === -1) {
            document.querySelector("#result").innerHTML = "Please fill valid values in the fields."
            document.querySelector("#result").style = "font-size:16px;color:red;margin:3%;"
        } else {
            rate = (interest / 12) / 100;
            time = (year * 12) + month;
            monthly = ((amount * rate * (Math.pow((1 + rate), time))) / (Math.pow((1 + rate), time) - 1));
            document.querySelector("#monthly").value = monthly.toFixed(2);
            totalInt = (monthly * time) - amount;
            totalPay = (amount + totalInt).toFixed(2);
            totalInt = totalInt.toFixed(2);
            monthly = monthly.toFixed(2);
            document.querySelector("#result").innerHTML = "";
        }
    }

    const reset = () => {
        document.querySelector("#amount").value = "";
        document.querySelector('#interest').value = " ";
        document.querySelector('#month').value = "";
        document.querySelector('#year').value = "";
        document.querySelector("#result").innerHTML = "";
        document.querySelector("#tab").style.display = "none";
        document.querySelector("#monthly").value = ""
    }

    const details = () => {
        monthly = document.querySelector("#monthly").value;
        if (monthly == "") {
            document.querySelector("#result").innerHTML = "There is nothing to show. Calculate first."
            document.querySelector("#result").style = "font-size:16px;color:red;margin:3%;"
        } else {
            document.querySelector("#result").innerHTML = ""
            document.querySelector("#tab").style.display = "block";
            document.querySelector("#monthlyEMI").innerText = monthly;
            document.querySelector("#totalInt").innerText = totalInt;
            document.querySelector("#totalPay").innerText = totalPay;
        }

    }

    return (
        <>
            <div style={emi}>
                <div class="mb-3">
                    <table class="table" style={{width:"70%",margin:"auto"}}>
                        <tr>
                            <td width="30%"><label className="form-label" style={{ fontWeight: "800", fontSize: "1.2em" }} >Loan Amount</label></td>
                            <td  colspan="2"><input type="number" style={{border:"1px solid"}} className="form-control" id="amount" placeholder="Enter Amount"  /></td>
                            <td></td>
                        </tr>
                        <tr>
                            <th> <label className="form-label" style={{ fontWeight: "800", fontSize: "1.3em" }}>Interest %</label></th>
                            <td  colspan="2"> <input type="number"  style={{border:"1px solid"}} className="form-control" id="interest" placeholder="Enter Rate "/></td>
                        </tr>
                        <tr>
                            <th><label className="form-label" style={{ fontWeight: "800", fontSize: "1.3em" }}>Period</label></th>
                            <td> <input type="number" style={{border:"1px solid"}} className="form-control"  id="year" placeholder="Year " /></td>
                            <td><input type="number" style={{border:"1px solid"}} className="form-control" id="month" placeholder="Months "/></td>
                        </tr>
                        <tr>
                            <th> <label className="form-label" style={{ fontWeight: "800", fontSize: "1.3em", display: "block" }}>EMI</label></th>
                            <td colspan="2"><input type="number" style={{border:"1px solid"}} disabled className="form-control" id="monthly" placeholder="EMI per Month"  /></td>
                        </tr>
                    </table>
                </div>
                <div style={{ marginLeft: "30%" }}>
                <h2 id="result"> </h2>
                    <button className='btn btn-dark' style={btn} id="calculate" onClick={calculate}> Calculate</button>
                    <button className='btn btn-dark' style={btn} id="reset" onClick={reset}>Reset</button>
                    <button className='btn btn-dark' style={btn} id="details" onClick={details}> Details</button>
                </div>

               
                <table id="tab" style={{ width: "70%", display: "none", margin: "3% 15%" }}>
                    <tbody>
                        <tr >
                            <td style={td}>Monthly EMI</td>
                            <td style={td} id="monthlyEMI">  </td>
                        </tr>
                        <tr>
                            <td style={td}>Total Interest</td>
                            <td style={td} id="totalInt"> </td>
                        </tr>
                        <tr style={td}>
                            <td style={td}>Total Payment</td>
                            <td style={td} id="totalPay"></td>
                        </tr>
                    </tbody>

                </table>
            </div>
        </>
    )
}

const cont = {
    backgroundImage: "url(https://marketplace.canva.com/EAD2962NKnQ/2/0/1600w/canva-rainbow-gradient-pink-and-purple-zoom-virtual-background-_Tcjok-d9b4.jpg)",
    border: "1px solid white",
    width: "70%",
    minHeight:"100vh",
    boxShadow: " 0px 0px 102px 25px rgba(80,98,199,1)",
}
const emi = {
    marginTop: "30px"
}
const btn = {
    marginTop: "3vh",
    marginRight: "30px"
}

const td = {
    border: "1px solid blue",
    width: "500px",
    textAlign: "center"
}

