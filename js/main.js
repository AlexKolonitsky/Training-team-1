window.onload = function () {

  var inputs = document.getElementsByTagName('input');
  var phonePattern = /[0-9\-\(\)\s]{9}/;
  var phoneInput = document.getElementById('phoneNumber');
  var signUpButton = document.getElementById('sign-up');

  document.getElementById('confirm').onclick = function () {
    for (var index = 0; index < inputs.length; ++index) {
      if (!inputs[index].value) {
        inputs[index].classList.add('wrongValue');
      }
    }

    if (!phonePattern.test(phoneInput.value)) {
      phoneInput.value = '';
      phoneInput.classList.add('wrongValue');
    }
  };

  if(signUpButton){
    signUpButton.onclick = function () {
      window.location.replace('register.html');
    };
  }

  for (var index = 0; index < inputs.length; ++index) {
    inputs[index].onfocus = function () {
      this.classList.remove('wrongValue');
    }
  }
};

function previewFile() {
  var preview = document.querySelector('img');
  var file = document.querySelector('input[type=file]').files[0];
  var reader = new FileReader();
  
  reader.onloadend = function () {
    document.getElementById('image-container').style.backgroundImage = 'url(' + reader.result + ')';
  }
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
}