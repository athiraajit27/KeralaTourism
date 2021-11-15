function formValidation(){
    var useremai = document.registration.useremail;
    var phone = document.registration.userphone;
    
    
    
    //var passid = document.registration.passid;
    
    
    
    if(ValidateEmail(useremai))        {                 if(ValidatePhone(phone))                {                }                                 }
    
    
    
    return false;
    
    
    } 
    
    
    
    
    
    // function passid_validation(passid,mx)// {// var passid_len = passid.value.length;// if (passid_len == 0 ||passid_len < mx)// {// alert("Password should not be empty / should contain minimum 8 characters");// passid.focus();// return false;// }// return true;// }
    
    
    
    
    function ValidateEmail(useremai){var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    if(useremai.value.match(mailformat) ){
        return true;}else{alert("You have entered an invalid email address!");useremai.focus();return false;}}
    
    
    
    
      function ValidatePhone(phone){  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;  if((phone.value.match(phoneno)))        {
                alert('Form Succesfully Submitted');      return true;        }      else        {        alert("Enter form xxx-xxx-xxxx/xxx.xxx.xxxx/xx xx xxx");        phone.focus();        return false;        }}
    
    