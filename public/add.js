$(document).ready(function(){
 $("#add-btn").click(function(){
   var addItem={
     "name": $("#inputName").val(),
     "foot": $("#inputFoot").val(),
     "age": $("#inputAge").val(),
     "gender": $("#inputGender").val(), 
     "sponser": $("#inputSponser").val(),
     "email": $("#inputEmail").val(),
     "phone": $("#inputPhone").val(),
     "address": $("#inputAddress").val()
   };

   $.ajax({
     type:'POST',
     url: 'http://localhost:8080/Players',    
     dataType:'json',
     data: JSON.stringify(addItem),
     contentType: "application/json; charset=utf-8", 
     success: function(data)
     {   
       alert(addItem.name+"'s Record Added Successfully");
     },
     error: function()
     {
       alert('error Occured');
     }
   });
 });

 $("#main-btn").click(function(){
   $("#myModal").find('form').trigger("reset");
 });

});