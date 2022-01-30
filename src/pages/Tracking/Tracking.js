import SearchIcon from '@mui/icons-material/Search';
import './Tracking.css';
import { useNavigate } from "react-router-dom";


const Tracking = ( props) => {
  
  let navigate = useNavigate();
  const handleChange=(e)=>{
    e.preventDefault();
    const trackingNo = e.target.value;
    props.setShipNumber(trackingNo);
  };
  const handleClick =(e)=>{
    e.preventDefault();
    navigate(`/status/${props.setIsChanged && props.shipNumber}`);

  };
 
  return <div className='container'>
  <p>Please Enter your shipment number and Track your Shipment</p>
  <h1>Track another shipment</h1>
  <form type="submit" onSubmit={handleClick}>
    <input onChange={handleChange} value={props.shipNumber} placeholder='Tracking No.' required></input>
   <span  onClick={handleClick}><SearchIcon color="red"/></span>
  </form>
  </div>
};
export default Tracking;
