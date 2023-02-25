$(document).ready(function(){
    $("#signup-form").validate({

        rules:{
            name:{
                
                minlength:4,
                maxlength:8
            },
            message:{
                
                minlength:4
            },
            email:{
                
                email:true
            },
            subject:{
                
                minlength:6,
            },
            
        },
        
        messages:{
            fname:"enter full name"
        }
    })
})