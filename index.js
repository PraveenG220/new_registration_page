function validation(){

    var user = document.getElementById('user').value;
    var pass = document.getElementById('pass').value;
    var confpass = document.getElementById('conpass').value;
    var mobilenumber = document.getElementById('mobilenumber').value;
    var Email = document.getElementById('Email').value;


 
    if (user == "")
    {
        document.getElementById('username').innerHTML ="* Please Enter User Name";
        return false;
    }

    if ((user.length<=2) || (user.length > 30))
    {
        document.getElementById('username').innerHTML ="* User Length Must be 2 to 30 Characters";
        return false;
    }
 if(!isNaN(user))
{
        document.getElementById('username').innerHTML ="* Only characters are Allowd";
        return false;
}

    if (pass == " ")
    {
        document.getElementById('Password').innerHTML ="* Please Enter Password ";
        return false;
    }
    if ((pass.length<=5) || (pass.length > 15))
    {
        document.getElementById('password').innerHTML ="* User Length Must be 5 to 15 Characters";
        return false;
    }
    if(pass !=confpass)
    {
        document.getElementById('conpassword').innerHTML ="* Please Enter not a Valid Password";
        return false; 
    }
    if (confpass == "")
    {
        document.getElementById('conpassword').innerHTML ="* Please Enter The Conform Password";
        return false;
    }

    if (mobilenumber == " ")
    {
        document.getElementById('mobile').innerHTML ="* Please Enter The Mobile Number";
        return false;
    }
    if(isNaN(mobilenumber))
    {
        document.getElementById('mobile').innerHTML ="* Please Enter valid Number";
        return false;
    }
    if(mobilenumber.length!=10)
    {
        document.getElementById('mobile').innerHTML ="* Please Enter valid Mobile Number";
        return false;
    }

    if(Email == " ")
    {
        document.getElementById('emailid').innerHTML ="* Please Enter Your Email ID";
        return false;
    }
    if(Email.indexOf('@')<=0)
    {
        document.getElementById('emailid').innerHTML ="* Please Enter Valid Email ID";
        return false;
    }
    if((Email.charAt(Email.length-4)!='.') && (Email.charAt(Email.length-3)!='.'))
    {
        document.getElementById('emailid').innerHTML ="* Please Enter Valid Email ID";
        return false;
    }
}
