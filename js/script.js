let total=0
$("#name").focus();
$("#job_role_other").hide();
$("#select_theme").hide();
$( "#title" ).change(function(x) {
    if( $(this).find(":selected").val() === 'other'){
      $('#job_role_other').show();
    }else {
      $('#job_role_other').hide();
    }
  });
$("#design").on("change", function() {
   let value = $("#design").val()
   console.log(value)
   if (value === "js puns") {
       $("option[value='tomato']").attr("selected", false);
       $("option[value='cornflowerblue']").attr("selected", true);
       $("option[value='cornflowerblue']").show(); 
       $("option[value='darkslategrey']").show();
       $("option[value='gold']").show();
       $("option[value='tomato']").hide();
       $("option[value='steelblue']").hide();
       $("option[value='dimgrey']").hide();
    }
    else if(value==="heart js") {
        $("option[value='tomato']").attr("selected", true);
        $("option[value='cornflowerblue']").attr("selected", false);
        $("option[value='tomato']").show(); 
        $("option[value='steelblue']").show();
        $("option[value='dimgrey']").show(); 
        $("option[value='gold']").hide();
        $("option[value='cornflowerblue']").hide();
        $("option[value='darkslategrey']").hide(); 
    }
});
$(".activities input").on("change", function() {
    let name = $(this).attr('name')
    // Get the value from a checked checkbox
    let cost = $( "input[type=checkbox][name="+name+"]" ).attr("cost");
    cost = parseInt(cost)
    console.log(total)
    if (name==="js-frameworks") {
        if ($("input[name='express']").attr("disabled")) {
            $("input[name='express']").attr("disabled", false); 
            total-=cost  
        }   else {
            $("input[name='express']").attr("disabled", true);
            total+=cost
        }   
    }
    if (name==="express") {
        if ($("input[name='js-frameworks']").attr("disabled")) {
            $("input[name='js-frameworks']").attr("disabled", false); 
            total-=cost  
        }   else {
            $("input[name='js-frameworks']").attr("disabled", true);
            total+=cost
        }   
    }
    if (name==="js-libs") {
        if ($("input[name='node']").attr("disabled")) {
            $("input[name='node']").attr("disabled", false); 
            total-=cost  
        }   else {
            $("input[name='node']").attr("disabled", true);  
            total+=cost
        }
    }  
    if (name==="node") {
        if ($("input[name='js-libs']").attr("disabled")) {
            $("input[name='js-libs']").attr("disabled", false); 
            total-=cost  
        }   else {
            $("input[name='js-libs']").attr("disabled", true);  
            total+=cost
        }
    }  
    if (name==="all") {  
        
        if ($("input[name='all']").is(':checked')) {
            total+=cost     
        }
        else if ($("input[name='all']").is(':checked') == false) {
            total-=cost    
        }
    }
    
    if (name==="build-tools") {  
        
        if ($("input[name='build-tools']").is(':checked')) {
            total+=cost     
        }
        else  {
            total-=cost    
        }
    }
    if (name==="npm") {  
        
        if ($("input[name='npm']").is(':checked')) {
            total+=cost     
        }
        else  {
            total-=cost    
        }
    }
    $("#total").text("$"+total)
});
//Hiding the first payment option: "Select payment method."
$("#payment").find("option").eq(0).remove();

if ($('#payment').val() == "credit card") {
    console.log("credit card selected")
}  // else if ( $('#payment').val() == "paypal");
//$('select option[value="paypal"]').hide();
//$('select option[value="bitcoin"]').hide();