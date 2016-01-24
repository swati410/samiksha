$(document).ready(function(){

     $("#prlink1").click(function(){
	 
	 $("#pricecontents").toggle();
	 $("#prlink1").hide();
	 $("#prlink2").show(); 
	 });
	 
	 
	 $("#prlink2").click(function(){
	 
	 $("#pricecontents").toggle();
	 $("#prlink2").hide();
	 $("#prlink1").show(); 
	 });


    $("#brlink1").click(function(){
	 
	 $("#brandcontent").toggle();
	 $("#brlink1").hide();
	 $("#brlink2").show(); 
	 });


    $("#brlink2").click(function(){
	 
	 $("#brandcontent").toggle();
	 $("#brlink1").show();
	 $("#brlink2").hide(); 
	 });
	 
	 
	 
	 $(".price").change(function(){
	     
		 if(this.checked){
		 
		   $("#prclear").show();
		 }
		 
		 if($('.price:checked').length == 0){
		  
		    $("#prclear").hide();
		 
		 }
	 
	 });
	 
	 
	 $("#prclear").click(function(){
	 
	  $('.price').prop('checked',false);
	  $("#prclear").hide();
	 
	 });

	 
	 
	 
	  $(".brands").change(function(){
	     
		 if(this.checked){
		 
		   $("#brclear").show();
		 }
		 
		 if($('.brands:checked').length == 0){
		  
		    $("#brclear").hide();
		 
		 }
	 
	 });
	 
	 
	 $("#brclear").click(function(){
	 
	  $('.brands').prop("checked",false);
	  $("#brclear").hide();
	 
	 });
});