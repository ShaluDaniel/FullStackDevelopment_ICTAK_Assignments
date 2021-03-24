var password=document.getElementById("exampleInputPassword1");
var email=document.getElementById("exampleInputEmail1");

function validate() 
{ 
if (password.value===""||email.value==""){
  alert("fields are empty");
  return false;
}
else
{
   var decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
   if(password.value.match(decimal)) 
    {  
          
            var decimalmail= /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; 
            if(email.value.match(decimalmail)) 
                { 
                    alert('Welcome!You are signed up.');
                    return true;
                 
                }
            else
                { 
                alert('enter a valid email address');
                email.style.border="2px solid red";
                return false;
                }
      
          
         }
   
      
          
 
else
 { 
     alert('Password must be at least 8 characters long and should contain an uppercase, lowercase and number');
    return false;
}
}







} 
function check()
{
    if(password.value.length<8)
    {
        msg.innerText= "weak password";
      password.style.border="2px solid red";
    }
    
    if(password.value.length===8)
    {
        msg.innerText= "good password" ;
      password.style.border="2px solid yellow";
    }
    if(password.value.length>8)
    {
        msg.innerText=  'strong password';
      password.style.border="2px solid green";
    }
    msg.innerText=  message;
    
}
