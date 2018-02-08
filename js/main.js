but.onclick = function () {

    var text1 = document.getElementsByTagName("input")[0];
    var val1 = text1.value;
    var text2 = document.getElementsByTagName("input")[1];
    var val2 = text2.value;
    var text3 = document.getElementsByTagName("input")[2];
    var val3 = text3.value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val1) != true || val2 == false || val3 == false ) {
        alert('Проверьте введенные данные');
    } else {
        alert('Все ок');
    }
};