document.querySelector('button').addEventListener("click", valideate);
function valideate(){
  var email = document.querySelector(".email").value;
  if(valideateEmaile(email) ==false){
    document.querySelector('input').style.borderColor ="hsl(354, 100%, 66%)";
    document.querySelector('.error-message').style.display="block";
    document.querySelector('input').setAttribute("placeholder","example@email/com");
    document.querySelector('input').classList.remove("placeholder")

  }
}

function valideateEmaile(email){
  const re =/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
