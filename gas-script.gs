function sendHttpPost(message){
   // insert IRKit clientkey & deviceid
   var payload =
   {
     "clientkey" : "",
     "deviceid" : "",
     "message" : message   
   };

   var options =
   {
     "method" : "post",
     "payload" : payload
   };

  UrlFetchApp.fetch("https://api.getirkit.com/1/messages", options);
}


function onEdit(event){
  var sheet = event.source.getActiveSheet();
  var cell = event.source.getActiveRange();
  var value = cell.getValue();
  if(value==0) {
    // Insert infrared signal to stop the air conditioner.
    message=''
  }else if(value==1) {
    // Insert infrared signal to start the air conditioner.
    message=''
  }  
  sheet.getRange('B1').setValue("Value : " + cell.getValue() + "ROW: " + cell.getRow() + "Column : " + cell.getColumn());
  sendHttpPost(message);
}
