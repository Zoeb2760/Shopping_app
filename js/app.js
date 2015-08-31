$(document).ready(function() { 

  
 $('#mybutton').on('click',  (function  () {
   var items = $('input').val();
   $('ul').append('<li>'+items+'</li>');
   

    $('form').find('input').val("");


   

 })); 

});
	

