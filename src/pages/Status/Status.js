

import styled from "styled-components";
import Transit from "../../components/Transit/Transit"
import axios from 'axios'
import { useEffect ,useState} from "react";
import { ProgressBar } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import "./Status.css"
 


const Progress = styled.div `
width: 92%;
margin: 10px;
padding:15px;
`

const Status = (props) => {

  const params = useParams();
  var score = 0; 
  var color ="";
  var status = "";
  const [shipment,setShipment]= useState(null);
  
  
  const url = `https://tracking.bosta.co/shipments/track/${params.TrackingNumber}`;
  useEffect(()=>{
    axios.get(url).then(response=>{
      var shipmentData = response.data;
        setShipment(shipmentData);
        
  
    }).catch(error => console.log(error))
   

  },[url]);



  

 
  if(shipment){
    
    if(shipment.CurrentStatus.state === "DELIVERED" ){
      score = 100 ;
      color = "success"
      status = "تم التسليم "
      

      
    }else if(shipment.CurrentStatus.state==="DELIVERED_TO_SENDER") {
      score = 100 ;
      color = "danger"
      status = "تم التسليم للراسل  "
    } else if (shipment.CurrentStatus.state === "SHiPMENT_CREATED "){
      score = 25;
      color = "primary"
      status = "تم انشاء الشحنة  "
    }else  if (shipment.CurrentStatus.state === "OUT_FOR_DELIVERY "){
      score = 50;
      color= "info";
      status = "تم انشاء الشحنة  ";
      
    };
   

   
    return (
      <div className="contain">
        <div className="row bg-light g-4" dir="rtl">
          <div className="col-md-6 col-lg-3">
            <div className="card bg-light">
              <div className="card-body text-center">
               
                <h5 className="card-title mb-3"> رقم الشحنة : {shipment.TrackingNumber}</h5>
                <h3 className="card-text">
                    {(status)}
                </h3>
               
              </div>
            </div>
          </div>

          <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                 
                  <h4 className="card-title mb-3">اخر تحديث</h4>
                  <h5small className="card-text">
                    {shipment.CurrentStatus.timestamp}
                  </h5small>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                 
                  <h4 className="card-title mb-3"> اسم التاجر  </h4>
                  <h5small className="card-text">
                    SOUQ.COM
                  </h5small>
                 
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="card bg-light">
                <div className="card-body text-center">
                 
                  <h4 className="card-title mb-3"> موعد التسليم خلال </h4>
                  <h5small className="card-text">
                       ٣ايام 
                  </h5small>
                 
                </div>
              </div>
            </div>
            </div>

            <Progress>  <ProgressBar variant={color} now={score}  label={`${status}`}/> 
            </Progress>
           
            <div className="row align-items-center justify-content-between">
            <div className="col-md m-3 p-3" dir="rtl">
                    <h3>تفاصيل الشحنة</h3>
                    <Transit shipment={shipment} />
            </div>
            <div className="col-md p-3 m-5 bg-light " dir="rtl" >
            <h4>عنوان التسليم </h4>
            <div className="alert alert-light m-3 p-2 bg-light" role="alert">
            <p>مبابة شارع طلعت حرب مدينة العمال بجوار البرنس منزل ١٧ بلوك ٢٢ </p>
            </div>
            <div className=" alert alert-light m-3 p-2" role="alert">
            <div className="d-flex flex-row align-items-center justify-content-between m-3 p-2">
            <img
                  src="https://i.ibb.co/wcmcd0s/question-mark-2.png"
                  className="p-3 rounded-circle mb-3 "
                  alt=""
                />
            <h4 className = "p-3">هل عندك مشكة؟ </h4>
            <button type="button" className="btn btn-danger btn-lg m-3 p-2" >اضغط هنا للمساعدة </button>
            </div>
              
            </div>
            </div>
            </div>
     
    
   </div>
  
  
   )
  } 
 

  return(
     <div>
   
  </div>

  )
}

export default Status;
