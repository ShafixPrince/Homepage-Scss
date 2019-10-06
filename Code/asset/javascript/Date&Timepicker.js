$( function() {
  $( "#datepicker" ).datepicker();

    $( "#datepicker2" ).datepicker();

        $( "#datepicker3" ).datepicker();

            $( "#datepicker4" ).datepicker();

} );


$(document).ready(function(){

      $('#boxcheck').on('click',function(){
       if($(this).is(':checked'))
         {


           $("#checked-form").removeClass('d-none');
           $("#unchecked-form").addClass('d-none');


         }
       else{

         $("#checked-form").addClass('d-none');
         $("#unchecked-form").removeClass('d-none');
       }
});
    })



//
document.getElementById('today').valueAsDate = new Date();
document.getElementById('today2').valueAsDate = new Date();


//js
