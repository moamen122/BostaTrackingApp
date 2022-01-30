import Header from "./components/Header/Header.js";
import Tracking from "./pages/Tracking/Tracking";
import Status from "./pages/Status/Status.js";
import {useState} from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom';


function App() {
  const [shipNumber, setShipNumber] = useState('');

  let [isChanged, setIsChanged] = useState(false);

  const trackShipment= (e)=>{
    e.preventDefault();
    setIsChanged = true;

    
  };
  
  return (
    <div className="App">
    <Header/>
       <BrowserRouter>
                <div className="content">
                    <Routes>
                        <Route exact path="/" element={ <Tracking shipNumber={shipNumber} setShipNumber = {setShipNumber} isChanged={isChanged} setIsChanged={setIsChanged} trackShipment={trackShipment} />} />
                        
                        <Route path="/status/:TrackingNumber" element={<Status  shipNumber={shipNumber} setShipNumber={setShipNumber}/>} />
                    </Routes>
                </div>
            </BrowserRouter>
    </div>
  );
}
export default App;
