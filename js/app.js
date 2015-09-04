$(document).ready(function() { 



  // adding items to the list
   function Add (items){
      return ($('ul').append('<li>&#10004'+items+'</li>'));  
   }



 $('#mybutton').on('click',  (function  () {/*
  When mybutton is clicked take new formed var and add to li */
  var items = $('input').val();
   //$('ul').append('<li>checkmark'+items+'</li>');
   Add($('input').val());
   $('.list').find('input').val(''); 
   }));



// clearing the list input
    // to clear the form


    // to allow user to add to list from enter key

    $(document).on("keypress", (function(e) { 
        if(e.which == 13) {
        Add($('input').val());
         $('.list').find('input').val(''); 
        }
    })); 



    // to remove item from the list

    $('ul').on('click', 'li', function() {
       $(this).remove();
    });   
      
      
 
        
     // to clear the enitre list
     
     $('#clearbutton').on('click', (function() {
     $('ul').empty();
    }));

    });


