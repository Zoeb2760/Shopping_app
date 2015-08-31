$(document).ready(function() { 

  // adding items to the list
 $('#mybutton').on('click',  (function  () {/*
  When mybutton is clicked take new formed var and add to li */
   var items = $('input').val();
   $('ul').append('<li>'+items+'</li>');
   
// clearing the list
    $('form').find('input').val(''); // to clear the form

    //$('li').prepend (html('&#1003';);

    $('li').prepend("\u2713"); // adding dup checks
    
   // to clear enter list


   //})



 })); 
 
 $('#clearbutton').on('click', (function() {
    $('ul').empty();
 }));

});
	

