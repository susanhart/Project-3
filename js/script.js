$("#name").attr("focus", true);
$("#job_role_other").hide();
$("#select_theme").hide();
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
