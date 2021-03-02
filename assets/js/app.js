$("#languages").on("click", function() {
    $("#languages span").html($("#languages span").html() == 'EN' ? 'AZ' : 'EN');
});

$('#send-button').on("click",function(){
    $("form input, textarea").each(function(){
        var input = $(this); 
        validate(this, !input.val());
       });
});

$("#fullname").on("input", function(){
    const fullname = $(this).val().trim();
    const rawParts = fullname.split(/[ ,]+/);
    const validatedParts = rawParts.filter(p => p.trim());

    validate(this, validatedParts.length < 2);
});

$("#fin").on("input", function(){
    const fin = $(this).val().trim();

    validate(this, fin.length !== 7 || !fin.match(/^[A-Za-z0-9]+$/));
});

$("#email").on("input", function(){
    const email = $(this).val().trim();
    
    validate(this, !email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/));
});

$("#phone").on("input", function(){
    const phone = $(this).val().trim();
    
    validate(this, !phone.match(/^\+(994)(50|51|55|70|77|71|99)\d{7}$/));
});

const validate = (tag, condition) => {
    if (condition) {
        $(tag).removeClass("is-valid");
        $(tag).addClass("is-invalid");
    } else {
        $(tag).removeClass("is-invalid");
        $(tag).addClass("is-valid");
    }
};

const validateNull = (tag, condition) => {
    if (condition) {
        $(tag).removeClass("is-valid");
        $(tag).addClass("is-invalid");
    } else {
        $(tag).removeClass("is-invalid");
        $(tag).addClass("is-valid");
    }
};

$(document).ready(function() {
    $('.js-example-basic-multiple').select2({
        placeholder: "Axtarın...",
        allowClear: true,
        maximumSelectionLength: 1
    });
});

