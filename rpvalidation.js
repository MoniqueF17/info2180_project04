function formValidation()  
{
var id = document.registration.ID;  
var fname = document.registration.firstname;    
var lname = document.registration.lastname;  
var uname = document.registration.username;
var pw = document.registration.password;

if(id_val(id))  
{  
if(fname_val(fname))  
{  
if(lname_val(lname))  
{   
if(username_val(uname))  
{  
if(password_val(pw))  
{ 
}  
}   
}  
}   
}  
return false;
}

function id_val(id)  
{  
var id_len = id.value.length;  
if (id_len == 0)  
{  
alert("Username ID field is empty");  
uname.focus();  
return false;  
}  
return true;  
}

function fname_val(fname)  
{  
var fname_len = fname.value.length;  
if (fname_len == 0)  
{  
alert("Firstname field is empty");  
fname.focus();  
return false;  
}  
return true;  
}

function lname_val(lname)  
{  
var lname_len = lname.value.length;  
if (lname_len == 0)  
{  
alert("Lastname field is empty");  
lname.focus();  
return false;  
}  
return true;  
}

function username_val(uname)  
{  
var uname_len = uname.value.length;  
if (uname_len == 0)  
{  
alert("Username field is empty");  
uname.focus();  
return false;  
}  
return true;  
}

function password_val(pw)  
{  
var format = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
var pw_len = pw.value.length;  
if (pw_len == 0)
{  
alert("Password field is empty");  
pw.focus();  
return false;
}  
else if(pw.value.match(format))
{
alert('User Successfully Registered');  
window.location.reload()  
return true;  
}
else
{
alert('Please enter a valid password.');  
pw.focus();  
return false;  
}
}
