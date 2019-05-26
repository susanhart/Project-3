let total=0
$("#name").focus();
$("#job_role_other").hide();
$('#paymentMsg').hide();
$('#nameMsg').hide();
$("#select_theme").hide();
$('#EmailMsg').hide();
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
  
//default credit card..
$('#payment').val('credit card');
$('#bitCoinMsg').hide();
$('#paypalMsg').hide();

var paymentOptionSelected = 'credit card';
//Getting each payment option to show while hiding the other two payment options.
$('#payment').change(function(){
    $('#paymentMsg').hide();
  if( $(this).find(":selected").val() === 'paypal')
  {
    $('#paypalMsg').show();
    $('#credit-card').hide();
    $('#bitCoinMsg').hide();
  }
  if( $(this).find(":selected").val() === 'bitcoin')
  {
    $('#paypalMsg').hide();
    $('#credit-card').hide();
    $('#bitCoinMsg').show();
  }
  if( $(this).find(":selected").val() === 'credit card')
  {
    $('#paypalMsg').hide();
    $('#credit-card').show();
    $('#bitCoinMsg').hide();
  }
});
$('#submitBtn').click(function(){

    if(paymentOptionSelected == 'select_method')
    {
      $('#paymentMsg').show();
      return;
    }
    else {
      $('#paymentMsg').hide();
    }
    if( $('#name').val() == ''){
        $('#nameMsg').show();
        return;
        }
        if( $('#mail').val() == ''){
            $('#EmailMsg').show();
            return;
            }  
            if(total == 0)
    {
      alert("At least one activity must be selected.");
      return;
    }
    if(paymentOptionSelected == 'credit card')
    {
        if( $('#cc-num').val() == ''){
            alert("Credit Card Number is Missing.")
            return;
            } 
            if( $('#zip').val() == ''){
                alert("The zip code is missing.")
                return;
                } 
                if( $('#cvv').val() == ''){
                    alert("The CVV is missing.")
                    return;
                    } 
            }  
            alert("Congratulations you are now registered!")      
  });
