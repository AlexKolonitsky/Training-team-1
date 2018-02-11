function isEmpty(str){
    if(str.trim() == ''){
        return true;
    }else {
        return false;
    }
}


(document).getElementById('create').onclick = function () {
    var inputName = document.getElementsByName('name');
    var name = inputName.values;
    var inputSurname = document.getElementsByName('surname');
    var surname = inputSurname.value;
    var inputPhone = document.getElementsByName('phone');
    var phone = inputPhone.value;
    var hr1 = document.getElementsByTagName('hr')[0];
    var hr2 = document.getElementsByTagName('hr')[1];
    var hr3 = document.getElementsByTagName('hr')[2];

    if (isEmpty(name) == false){
        alert('fjjf');
    }


};