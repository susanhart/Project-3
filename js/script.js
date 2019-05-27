let total=0
//Set focus on the first text field when the page first loads by default.
$("#name").focus();
//Job Role Section
//Include a text field that will be revealed when the "Other" option is selected from the "Job Role" drop down menu.
$('[for="other-title"]').hide();
$('#other-title').hide();
$('#paymentMsg').hide();
$('#nameMsg').hide();
$("#select_theme").hide();
$('#EmailMsg').hide();
$( "#title" ).change(function(x) {
    if( $(this).val() === 'other'){
      $('#other-title').show();
    }else {
      $('#other-title').hide();
    }
  });
  //T-Shirt Info Section
  //For the T-Shirt "Color" menu, only display the color options that match the design selected in the "Design" menu.
$("#design").on("change", function() {
   let value = $("#design").val()
   console.log(value)
   $("option[value='Please select a T-shirt theme']").attr('disabled', 'true')
   //If the user selects "Theme - JS Puns" then the color menu should only display "Cornflower Blue," "Dark Slate Grey," and "Gold."
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
    //If the user selects "Theme - I ♥ JS" then the color menu should only display "Tomato," "Steel Blue," and "Dim Grey."
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
//Register for Activities Section
$(".activities input").on("change", function() {
    let name = $(this).attr('name')
    // Get the value from a checked checkbox
    let cost = $( "input[type=checkbox][name="+name+"]" ).attr("cost");
    cost = parseInt(cost)
    console.log(total)
    //Preventing the user from scheduling workshops that conflict and meet at the same time.
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
    //Adding a running total amount of cost section to the Workshop section.
    $("#total").text("$"+total)
});
//Hiding the first payment option: "Select payment method."
$("#payment").find("option").eq(0).remove();
  
//Setting the credit card pyment option as the default option.
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
//Adding an event listener to the Register button.
$('#submitBtn').click(function(){
//Setting up the form validations with red error message notifications and alerts so that an incomplete form with unfilled boxes cannot complete the registration process.
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
            //Set up an alert to let the user know their registration process is complete.
            alert("Congratulations, you are now registered!")   
            window.location.reload();   
  });
