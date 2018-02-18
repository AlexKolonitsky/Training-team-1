window.onload = function () {

  document.getElementById('confirm').onclick = function () {
    var inputs = document.getElementsByTagName('input');
    for (var index = 0; index < inputs.length; ++index) {
      if (!inputs[index].value) {
        inputs[index].classList.add('wrongValue');
      }
    }

    var pattern = /[0-9\-\(\)\s]{9}/;
    var phoneInput = document.getElementById('phoneNumber');
    if (!pattern.test(phoneInput.value)) {
      phoneInput.value = "";
      phoneInput.classList.add('wrongValue');
    }
  };

  if(document.getElementById('signUp')){
    document.getElementById('signUp').onclick = function () {
      window.location.replace("register.html");
    };
  }

  var inputs = document.getElementsByTagName('input');
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
    preview.src = "";
  }
}