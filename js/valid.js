function init(ev) {
  let form = document.getElementById('regForm');
  form.addEventListener('submit', validateForm);
  //add individual listeners
  let fullname = document.getElementById('fullname');
  fullname.addEventListener('change', validateName);
  let email = document.getElementById('email');
  email.addEventListener('change', validateEmail);
  let address = document.getElementById('address');
  address.addEventListener('change', validateAddress);
  let city = document.getElementById('city');
  city.addEventListener('change', validateCity);
  let post = document.getElementById('post');
  post.addEventListener('change', validatePost);
  let selectprov = document.getElementById('prov');
  selectprov.addEventListener('change',validateProv);
}

function validateForm(ev) {
  //validate the whole form
  ev.preventDefault();
  //console.log('ascas');
  let dataArray = [];
  let confirmName = validateName();
  let confirmEmail = validateEmail();
  let confirmAddress = validateAddress();
  let confirmCity = validateCity();
  let confirmPost = validatePost();
  let confirmProv = validateProv();
  dataArray.push(confirmName, confirmEmail, confirmAddress, confirmCity, confirmPost, confirmProv);
  console.log(dataArray);
  let count;
  let sum = dataArray.reduce((data1, data2) => {
    count = data1 + data2;
    return count;
  }, 0);
  //console.log(sum);
  //let errors = document.querySelectorAll('span');
  let div = document.querySelector('div');
  if(sum === 6){
    div.innerHTML = 'The form has been submitted!';
    div.style.color = '#6c2e2a';
  }else{
    div.innerHTML = 'please correct invalid items'
    div.style.color = '#d51b4b';
  }

}

function validateName(ev) {
  //validate the full name input with a regular expression
  let regName = /^[A-Z][a-z]+(( |-)?[A-Z][a-z]+){1,}/g;
  let inputName = document.getElementById('fullname').value;
  let spanName = document.querySelector('#fullname + .error');
  if(inputName){
    if(regName.test(inputName)){
      spanName.innerHTML = '';
      spanName.style.backgroundColor = '#3DA662';
      spanName.style.display = 'inline-block';
      return 1;
    }else{
      spanName.innerHTML = 'Invalid Name.'
      spanName.style.backgroundColor = '#d51b4b';
      spanName.style.display = 'inline-block';
      return 0;
    };
  }else{
    spanName.style.display = 'none';
    return 0;
  }
}
function validateEmail(ev){
  let regEmail = /^\w+\.?\w+@[a-zA-Z_]+?(\.[a-zA-Z]{2,3}){1,2}$/mg;
  let inputEmail = document.getElementById('email').value;
  let spanEmail = document.querySelector('#email + .error');
  if(inputEmail){
    if(regEmail.test(inputEmail)){
      spanEmail.innerHTML = '';
      spanEmail.style.backgroundColor = '#3DA662';
      spanEmail.style.display = 'inline-block';
      return 1;
    }else{
      spanEmail.innerHTML = 'Invalid Email.'
      spanEmail.style.backgroundColor = '#d51b4b';
      spanEmail.style.display = 'inline-block';
      return 0;
    };
  }else{
    spanEmail.style.display = 'none';
    return 0;
  }
}
function validateAddress(ev){
  let regAddress = /^\d{1,7}( |-)?([a-zA-Z]|\d)*( [a-zA-Z-]+\.?){1,3}$/mg;
  let inputAddress = document.getElementById('address').value;
  let spanAddress = document.querySelector('#address + .error');
  if(inputAddress){
    if(regAddress.test(inputAddress)){
      spanAddress.innerHTML = '';
      spanAddress.style.backgroundColor = '#3DA662';
      spanAddress.style.display = 'inline-block';
      return 1;
    }else{
      spanAddress.innerHTML = 'Invalid Address.'
      spanAddress.style.backgroundColor = '#d51b4b';
      spanAddress.style.display = 'inline-block';
      return 0;
    };
  }else{
    spanAddress.style.display = 'none';
    return 0;
  }
}
function validateCity(ev){
  let regCity = /^[A-Z][a-z]*(\s[A-Z][a-z]*){0,2}$/mg;
  let inputCity = document.getElementById('city').value;
  let spanCity = document.querySelector('#city + .error');
  if(inputCity){
    if(regCity.test(inputCity)){
      spanCity.innerHTML = '';
      spanCity.style.backgroundColor = '#3DA662';
      spanCity.style.display = 'inline-block';
      return 1;
    }else{
      spanCity.innerHTML = 'Invalid City.'
      spanCity.style.backgroundColor = '#d51b4b';
      spanCity.style.display = 'inline-block';
      return 0;
    };
  }else{
    spanCity.style.display = 'none';
    return 0;
  }
}
function validatePost(ev){
  let regPost = /^[A-Z0-9]{3}\s[A-Z0-9]{3}$/mg;
  let inputPost = document.getElementById('post').value;
  let spanPost = document.querySelector('#post + .error');
  if(inputPost){
    if(regPost.test(inputPost)){
      spanPost.innerHTML = '';
      spanPost.style.backgroundColor = '#3DA662';
      spanPost.style.display = 'inline-block';
      return 1;
    }else{
      spanPost.innerHTML = 'Invalid post number.'
      spanPost.style.backgroundColor = '#d51b4b';
      spanPost.style.display = 'inline-block';
      return 0;
    };
  }else{
    spanPost.style.display = 'none';
    return 0;
  }
}
function validateProv(){
  let selectValue = document.getElementById('prov').value;
  //console.log(selectValue);
  let spanProv = document.querySelector('#prov + .error');
  if(selectValue){
    spanProv.innerHTML = '';
    spanProv.style.backgroundColor = '#3DA662';
    spanProv.style.display = 'inline-block';
    return 1;
  }else{
    spanProv.innerHTML = 'Please choose one place';
    spanProv.style.backgroundColor = '#d51b4b';
    spanProv.style.display = 'inline-block';
    return 0;
  }
}

document.addEventListener('DOMContentLoaded', init);