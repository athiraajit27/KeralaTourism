function formValidation()
{

var useremai = document.registration.useremail;
var phone = document.registration.userphone;
var name = document.registration.username;




//var passid = document.registration.passid;


if (ValidateAllFields(useremai,phone,name))
        {

          if(ValidateEmail(useremai))
          {
            if(ValidatePhone(phone))
            {
            }  

          }



          
        }






return false;



} 






function ValidateAllFields(useremai,phone,name)
{
  if (useremai===""||phone===""||name==="")
  {
    
    alert("Fields Should not be empty");
    return false;
  
  }
  else
  {
    return true;
  }
    
  

}




function ValidateEmail(useremai)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


if(useremai.value.match(mailformat) )
{

    
return true;
}
else
{
alert("You have entered an invalid email address!");
useremai.focus();
return false;
}
}





  
function ValidatePhone(phone)
{
  var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
  if((phone.value.match(phoneno)))
        {

            alert('Form Succesfully Submitted');
      return true;
        }
      else
        {
        alert("Enter form xxx-xxx-xxxx/xxx.xxx.xxxx/xx xx xxx");
        phone.focus();
        return false;
        }
}










