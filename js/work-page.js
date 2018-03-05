$(document).ready(function () {
  var vacs = [];

  $.getJSON("/Shake/static-data/test.json").then(function (resp) {

    vacs = resp.vacancies;
    $(".total-count").text(157);
    $(".select-rows-per-page").change(function () {
      var selectedPage = $(".select-rows-per-page option:selected");

    });

    // 1. vacs.length вставить это число в .total-count $('dsfasdf').text(324)
    // (i) 2. html selector element read everything about it. to GOOGLE: How to get the selected value with jQuery
    // 3. insert value of selector into .last-v span

    // (i) learn DOM events click/change catch events with jQuery. to GOGGLE: Selector value changed event
    // (i) Functions. how to use it. what is this? learn.javascript.ru. Advanced: Write function that will be call 3rd step
    // 4. Add onclick event listeners on .switch button back/forward. function () { console.log("Hello!")}

    drawTable(resp.vacancies)
    // Generate table
  }).catch(function (error) {
    console.log(error)
  });

  function drawTable(vacancies) {
    var $tableBody = $(".information-table tbody");
    $tableBody.empty();

    $(".no-result").toggle(vacancies.length === 0);

    $.each(vacancies, function (key, vacancy) {
      var $row = $("<tr />");
      $.each(Object.keys(vacancy), function (k, vk) {
        if (vk !== "id") {
          $row.append($("<td>").text(vacancy[vk]));
        }
      });
      $tableBody.append($row);
    });
  }

  function filterByLastName(lastName) {
    var lastNameInLowerCase = lastName.toLowerCase();
    return vacs.filter(function (v) {
      return (v.last_name.toLowerCase()).startsWith(lastNameInLowerCase)
    });

  }

  function filterByName(name) {
    var nameInLowerCase = name.toLowerCase();
    return vacs.filter(function (v) {
      return (v.name.toLowerCase()).startsWith(nameInLowerCase)
    });
  }

  function filterByPhone(phoneNumber) {
    var result = vacs.filter(function (v) {
      return v.phone_number.includes(phoneNumber)
    });

    return result;
  }

  function filterByPosition(position) {
    var positionInLowerCase = position.toLowerCase();
    return vacs.filter(function (v) {
      return (v.position.toLowerCase()).startsWith(positionInLowerCase)
    });
  }

  // listen keyup event on name input
  $("#phone-filter").on("keyup", function (event) {
    drawTable(filterByPhone($(this).val()));

  });

  $("#last-name-filter").on("keyup", function (event) {
    drawTable(filterByLastName($(this).val()));

  });
  $("#name-filter").on("keyup", function (event) {
    drawTable(filterByName($(this).val()));
  });
  $("#position-filter").on("keyup", function (event) {
    drawTable(filterByPosition($(this).val()));
  });

  $(".search-input").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    var showNoResultMessage = true;
    $("#search-bar-filter tr").each(function () {
      var isVacMatch = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(isVacMatch);

      if (isVacMatch) {
        showNoResultMessage = false;
      }
    });

    $(".no-result").toggle(showNoResultMessage);
  });

});



