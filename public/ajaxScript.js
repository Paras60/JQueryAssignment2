$(document).ready(function(){
        var start=0;

    var mySearch = function(start){
    	var title=$(".textClass").val();
        $.ajax({
        	type:'GET',
        	url: 'http://localhost:8080/Players?q='+title+'&_start='+start+'&_limit=20',	
        	dataType:'json',   
        	success: function(jsonData)
        	{
                $(jsonData).each(function(i,val){

                    var table = document.getElementById("myTable");
                    var row = table.insertRow();

                    var cell1 = row.insertCell(0);
                    var cell2 = row.insertCell(1);
                    var cell3 = row.insertCell(2);
                    var cell4 = row.insertCell(3);
                    var cell5 = row.insertCell(4);
                    var cell6 = row.insertCell(5);
                    var cell7 = row.insertCell(6);
                    var cell8 = row.insertCell(7);
                    var cell9 = row.insertCell(8);
                    var cell10 = row.insertCell(9);


                    cell1.innerHTML = val.id;
                    cell2.innerHTML = val.name;
                    cell3.innerHTML = val.foot;
                    cell4.innerHTML = val.age;
                    cell5.innerHTML = val.gender;
                    cell6.innerHTML = val.sponser;
                    cell7.innerHTML = val.email;
                    cell8.innerHTML = val.phone;
                    cell9.innerHTML = val.address;
                    cell10.innerHTML = '<button id="'+val.id+'" href="#myModal-1" class="update" data-toggle="modal">modify</button><br>'+'<button class="delete" id="'+val.id+'">delete</button>';								

                });

                $(".update").click(function(){
                    var id = this.id;
                    $("#modify-butn").click(function(){
                        var modifyItem={
                            "name": $("#updateName").val(),
                            "foot": $("#updateFoot").val(),
                            "age": $("#updateAge").val(),
                            "gender": $("#updateGender").val(), 
                            "sponser": $("#updateSponser").val(),
                            "email": $("#updateEmail").val(),
                            "phone": $("#updatePhone").val(),
                            "address": $("#updateAddress").val()
                        };

                        $.ajax({
                            type:'PUT',
                            url: 'http://localhost:8080/Players/'+id,    
                            dataType:'json',
                            data: JSON.modifyItem,
                            contentType: "application/json; charset=utf-8" , 
                            success: function(data)
                            {   
                                alert(modifyItem.name+"'s Record Manipulated Successfully");
                            },
                            error: function()
                            {
                                alert('error Occured');
                            }
                        });
                    });
                });

                $(".delete").click(function(){
                    if(confirm("Are You Sure")){
                        var id1 = this.id;
                        $.ajax({
                         url: 'http://localhost:8080/Players/'+id1,
                         type: 'DELETE',
                         dataType: 'json',                


                         success: function(result) {

                            alert('Record deleted successfully');
                            document.getElementById(id1).closest('tr').remove();
                        },

                        error: function(result){alert('deleting... Error Occurred in Deletion');}
                    });       }
                        else{
                            return false;
                        }
                           });//end delete record event

            },

            error: function()
            {
             alert('Error in Loading');
         }

     });
    }
    $(".abc").click(function(){
        mySearch(start);

    });
    $(window).scroll(function(){
     
     if($(window).scrollTop() == ($(document).height() - $(window).height())){
         start=start+20;
         mySearch(start);                    
         
     }
 });
});


