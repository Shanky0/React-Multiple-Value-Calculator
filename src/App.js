
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BMI from './Components/BMI';
import EMI from './Components/EMI';
import BILL from './Components/BILL';
import HOME from './Components/HOME';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HOME />} />
          <Route path='/BILL' element={<BILL />} />
          <Route path='/EMI' element={<EMI />} />
          <Route path='/BMI' element={<BMI />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
