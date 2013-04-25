
$(document).ready(function() {
   
   $('.loader').hide(); 
   $('.loader2').hide(); 
   $('.loader3').hide(); 


   $('button').click(function(){
       $('.loader').fadeIn('fast').delay(5000).fadeOut('slow');
       $('.loader2').fadeIn('fast').delay(8000).fadeOut('slow');
       $('.loader3').fadeIn('fast').delay(10000).fadeOut('slow');


       
   });

});