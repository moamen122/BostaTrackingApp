import * as ReactBootstrap from "react-bootstrap"
import  "./Transit.css";


function Transit({shipment}) {
  var branch ="";
  var status = "";
const transitEvents = shipment.TransitEvents;

const renderTransitEvents =(transitEvents,index)=>{
  if(transitEvents.hub ==="Katamya Hub"){
    branch = "فرع القاطمية "
  } else if (transitEvents.hub ==="Cairo Sorting Facility"){
    branch = "فرع القاهرة "
  } else if (transitEvents.hub ==="Tanta Hub"){
    branch = "فرع طنطا"

  }else if (transitEvents.hub ==="Bosta HQ"){
    branch = "فرع الرئيسي"

  }else {
    branch = ""
  };
  if(transitEvents.state === "TICKET_CREATED" ){
   
    status = "تم الانشاء "
  }else if(transitEvents.state === "PACKAGE_RECEIVED") {
    
    status = "تم استلام الشحنة  "
  } else if (transitEvents.state === "NOT_YET_SHIPPED"){
    
    status = "لم يتم الشحن بعد "
  }else  if (transitEvents.state === "WAITING_FOR_CUSTOMER_ACTION"){
   
    status = "في انتظار رد العميل ";
  }else  if (transitEvents.state === "DELIVERED"){
    status = "تم التوصيل ";
  }else  if (transitEvents.state === "OUT_FOR_DELIVERY"){
    status = "خارج للتوصيل ";
  } else  if (transitEvents.state === "IN_TRANSIT"){
    status = "في مرحلة انتقالية";
  }else {
    status = transitEvents.state
  };
  return (
    <tr key={index}>
      <td>{branch}</td>  
      <td>{status}</td>
      <td>{transitEvents.timestamp}</td>
      <td>{transitEvents.reason}</td>
    </tr>
  )


}
  return (
    <div className="shipment-table" >
 <ReactBootstrap.Table striped bordered hover>
  <thead>
    <tr>
      <th>الفرع</th>
      <th>الحالة</th>
      <th>التاريخ</th>
      <th>تفاصيل</th>
    </tr>
  </thead>
  <tbody>
  {transitEvents.map(renderTransitEvents)}
   
  </tbody>
</ReactBootstrap.Table>


   
    </div>
  );
}

export default Transit;
