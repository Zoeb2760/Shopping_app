$(document).ready(function() { 

//$("#myform").keypress(function(enter){

    //var keycode = (event.keyCode || event.which);
    //if(enter.keycode == '13') {
    //.alert("enter"); }
//        //$('mybutton').click();  

  // adding items to the list

//$( ".mybutton" ).on( "buttonsetcreate", (function() {
  //var items = $('input').val();
   //$('ul').append('<li>'+items+'</li>');


 $('#mybutton').on('click',  (function  () {/*
  When mybutton is clicked take new formed var and add to li */
  var items = $('input').val();
   $('ul').append('<li>'+items+'</li>');
   $( 'li' ).eq( 1 ).toggleClass( 'hidden' );
   //$('div.appear ul li').prepend('<input type="checkbox" value="1" />');

  //$('<input type="checkbox" value="1" />').appendTo('li');



   //$('ul li:last').after("<li>" + value + "</li>")
   
// clearing the list input
    $('form').find('input').val(''); // to clear the form

/*  var $current = $('li.active');
  if(!$current.length){
    $current = $('li:first');
    $current.addClass('active');
  }else{
    $current.removeClass('active');
    $current.next('li').addClass('active');
  }  
  if ($tabs.hasClass('active')) {
    tab.prepend('\u2713');
    //count++;
  } 
    //$('li.active').prepend('\u2713'); 

 //}); */
var $tabs = $('li');
var count = 0; 
}));

//$('.mybutton').on('click', (function () {
    



//$tabs.next('ul').addClass('active');


//}));

/*$('#mybutton').click(function () {
  var tab = $tabs.eq(count);
  tab.addClass('active')   
  

  if ($tabs.hasClass('active')) {
    tab.prepend('\u2713');
    count++;
  } 
}); */

/*var $tabs = $('li');
var count = 0;

$('.next').click(function () {
  var tab = $tabs.eq(count);   
  var link = tab.find('a[data-toggle="tab"]');
  link.addClass("active").css("background-color","yellow");

  if (link.hasClass("active")) {
    tab.prepend('YES');
    count++;
  } else {
    tab.append('NO');
  }
}); */







    //$('li').prepend (html('&#1003';);
      //if ($('li').contains !='\u2713') {
        //$('li').prepend('\u2713'); 
      

      //$("ul").add ('li').html('\u2713');

      
    //$('li').each (function() { 
      //(this).prepend('\u2713'); });

      //$('li').prepend('\u2713'); 

      // to add ticks
      //$( "#radio" ).buttonset();

    //$( "ul li" ).addClass(function( index ) {
  //return "item-" + index;
  // });


 //$( "ul li" ).addClass(function( index ) {
  //return "item-" + index;
//});

 /*$('.next').on('click', function () {
  var $current = $('li.active');
  if(!$current.length){
    $current = $('li:first');
    $current.addClass('active');
  }else{
    $current.removeClass('active');
    $current.next('li').addClass('active');
  }   
 });*/

 
    

//}});

//});


      //$( "#myform" ).on('click',(function() {
        //var items = $('input').val();
   //$('ul').append('<li>'+items+'</li>');
   //}));


  //alert( "Handler for .submit() called." );
  //event.preventDefault();
//});



     //var check = $( "li" ).html('\u2713');
      //if('li').find(check){
  // code to be executed if condition is true
//} 
//lse {$('li').prepend("\u2713"); 
  // code to be executed if condition is false
//}

    // adding dup checks// 
    // also try adding to append with li on the end

    //$('li').prepend('<input type="checkbox" name="myCheckbox"/>');
    
   
//$( "li.item-ii" ).find( allListElements );


 /*$('#remove').on ('click',(function()
        //$('li').each( function() {
            //$('li').append("\u2713"+$(this).val());
            $(this).remove(); } )
      })); */
        
// to remove item from the list

     $('ul').on('click', 'li', function() {
        $(this).remove();
    });   

      //$('ul').on('click', 'li', function() {
        //$(this).prepend('\u2713');
        
    //});   
        /*$('li input')*/

        //$('li').remove();
        //}));
    

    //$('#clearbutton').on('click', (function() {
    //$('ul').empty();


 /* $('#btn-remove').click(function(){
        $('#select-to option:selected').each( function() {
            $('#select-from').append("<option value='"+$(this).val()+"'>"+$(this).text()+"</option>");
            $(this).remove();
        });
    }); */







   /* $('#remove').on('click',  (function  () {
    // to remove individual li
  
   $('li').empty(); */


   //})



 

// })); 
  // to clear the enitre list
 $('#clearbutton').on('click', (function() {
    $('ul').empty();
 }));

});


