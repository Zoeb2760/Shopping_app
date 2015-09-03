$(document).ready(function() { 



  // adding items to the list




 $('#mybutton').on('click',  (function  () {/*
  When mybutton is clicked take new formed var and add to li */
  var items = $('input').val();
   $('ul').append('<li>'+items+'</li>');
  
// clearing the list input
    $('form').find('input').val(''); // to clear the form


    // to allow user to add to list from enter key

    //$("#need-input").on("keydown", function(e) { 
    //if(e.keyCode == 13)
    //$("#myform").on ('click')  
    /*(function  () {
     //var items = $('input').val();
   //$('ul').append('<li>'+items+'</li>');
 //  })); */
//}); 



// to remove item from the list

     $('ul').on('click', 'li', function() {
        $(this).remove();
    });   
      
      
 
        
  // to clear the enitre list
 $('#clearbutton').on('click', (function() {
    $('ul').empty();
 }));

   })); 

});


