
$(function(){
$("#nav-placeholder").load("asset/html_components/navbar.html");

});


$(function(){
$("#footer-placeholder").load("asset/html_components/Footer.html");

});





$(function(){
$("#promotioncomponent").load("asset/html_components/PromotionsBrowseComponent.html");

});

$(function(){
$("#BookingForm").load("asset/html_components/FormComponent.html",function(){

  $.getScript("asset/javascript/Date&TimePicker.js");
    $.getScript("asset/javascript/autocomplete.js");
});

});
