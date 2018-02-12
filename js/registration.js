function isEmpty(str) {
    if (str.trim() === '') {
        return true;
    } else {
        return false;
    }
}

var input1 = document.getElementsByTagName("input")[1];
var input2 = document.getElementsByTagName("input")[2];
var input3 = document.getElementsByTagName("input")[3];
var hr1 = document.getElementsByTagName("hr")[0];
var hr2 = document.getElementsByTagName("hr")[1];
var hr3 = document.getElementsByTagName("hr")[2];
var hint1 = document.getElementsByClassName("hint")[0];
var hint2 = document.getElementsByClassName("hint")[1];
var hint3 = document.getElementsByClassName("hint")[2];

input1.onfocus = function () {
    hint1.style.display = 'block';
    hint1.style.borderColor = 'yellow';
    hr1.style.borderColor = 'yellow';
    hint1.innerHTML = '&#9998  Enter your name';
};
input1.onblur = function () {
    hint1.style.display = 'none';
    hr1.style.borderColor = ' #e3e3e3';
};
input2.onfocus = function () {
    hint2.style.display = 'block';
    hint2.style.borderColor = 'yellow';
    hr2.style.borderColor = 'yellow';
    hint2.innerHTML = '&#9998  Enter your surname';
};
input2.onblur = function () {
    hint2.style.display = 'none';
    hr2.style.borderColor = ' #e3e3e3';
};
input3.onfocus = function () {
    hint3.style.display = 'block';
    hint3.style.borderColor = 'yellow';
    hr3.style.borderColor = 'yellow';
    hint3.innerHTML = '&#9998 Enter your phone in format 375XXXXXXXXX';
};
input3.onblur = function () {
    hint3.style.display = 'none';
    hr3.style.borderColor = ' #e3e3e3';
};

(document).getElementById('create').onclick = function () {

    var phonereg = /375[0-9]{9}/;
    var errors = [];
    var name = input1.value;
    var surname = input2.value;
    var phone = input3.value;

    if (isEmpty(name) === true) {
        errors.push("name");
        hint1.style.display = 'block';
        hint1.style.borderColor = 'red';
        hr1.style.borderColor = 'red';
        hint1.innerHTML = '&#10008  Enter your name';
    } else {
        hint1.innerHTML = '&#10004 Checked';
        hint1.style.top = '172px';
        hint1.style.right = '327px';
        hr1.style.borderColor = '#05AA00';
        hint1.style.borderColor = '#05AA00';
        hint1.style.display = 'block';
    }
    if (isEmpty(surname) === true) {
        errors.push("surname");
        hint2.style.display = 'block';
        hint2.style.borderColor = 'red';
        hr2.style.borderColor = 'red';
        hint2.innerHTML = '&#10008  Enter your surname';
    } else {
        hint2.innerHTML = '&#10004 Checked';
        hint2.style.top = '246px';
        hint2.style.right = '324px';
        hr2.style.borderColor = '#05AA00';
        hint2.style.borderColor = '#05AA00';
        hint2.style.display = 'block';
    }
    if (isEmpty(phone) === true || phonereg.test(phone) === false) {
        errors.push("phone");
        hint3.style.display = 'block';
        hint3.style.borderColor = 'red';
        hr3.style.borderColor = 'red';
        hint3.innerHTML = '&#10008  Enter your phone in format 375XXXXXXXXX';
    } else {
        hint3.style.top = '317px';
        hint3.style.right = '324px';
        hint3.innerHTML = '&#10004 Checked';
        hr3.style.borderColor = '#05AA00';
        hint3.style.borderColor = '#05AA00';
        hint3.style.display = 'block';

    }
    if (errors.length === 0) {
        alert('Account successfully created');
        location.href = 'index.html';
        hint1.style.display = 'none';
        hint2.style.display = 'none';
        hint3.style.display = 'none';
    }
};

