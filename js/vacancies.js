$(document).ready(function () {
  var vacs = [];
  var page = 0;

  $.getJSON("/Training-team-1/static-data/vacancies.json").then(function (resp) {

    vacs = resp.vacancies;
    var itemsPerPage = getCountItemsPerPage();
    $(".total-count").text(" of " + vacs.length);

    drawTable(getVacationsByPage(vacs, itemsPerPage));

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

    updatePagination()
  }

  function getVacationsByPage(vacs, count) {
    return vacs.slice(count * page, count * page + count)
  }

  function filterByLastName(list, lastName) {
    var lastNameInLowerCase = lastName.toLowerCase();
    return list.filter(function (v) {
      return (v.last_name.toLowerCase()).startsWith(lastNameInLowerCase)
    });
  }

  function filterByName(list, name) {
    var nameInLowerCase = name.toLowerCase();
    return list.filter(function (v) {
      return (v.name.toLowerCase()).startsWith(nameInLowerCase)
    });
  }

  function filterByPhone(list, phoneNumber) {
    var result = list.filter(function (v) {
      return v.phone_number.includes(phoneNumber)
    });
    return result;
  }

  function filterByPosition(list, position) {
    var positionInLowerCase = position.toLowerCase();
    return list.filter(function (v) {
      return (v.position.toLowerCase()).startsWith(positionInLowerCase)
    });
  }


  $(".table-filter").on("keyup", function (event) {
    var result = vacs;
    result = filterByLastName(result, $("#last-name-filter").val());
    result = filterByName(result, $("#name-filter").val());
    result = filterByPhone(result, $("#phone-filter").val());
    result = filterByPosition(result, $("#position-filter").val());

    drawTable(result)
  });

  function getCountItemsPerPage() {
    return parseInt($(".view-filter-selection option:selected").val());
  }

  function updatePagination() {

    var itemsPerPage = getCountItemsPerPage()

    $(".first-v").text(itemsPerPage * page + 1);
    if (vacs.length < (itemsPerPage * page + itemsPerPage)) {
      $(".last-v").text(vacs.length);
    } else {
      $(".last-v").text(itemsPerPage * page + itemsPerPage);
    }
  }

  $("#filter-candidates").on("keyup", function () {
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

  $("select.view-filter-selection").change(function () {
    page = 0
    var itemsPerPage = getCountItemsPerPage()
    $(".last-v").text(itemsPerPage);
    drawTable(getVacationsByPage(vacs, itemsPerPage));
  });

  $(".page-switching-button-back").on("click", function () {
    page = (page > 0) ? page - 1 : 0;

    drawTable(getVacationsByPage(vacs, getCountItemsPerPage()));
  });
  $(".page-switching-button-forward").on("click", function () {
    var itemsPerPage = getCountItemsPerPage()

    page = (vacs.length < itemsPerPage * (page + 1)) ? 0 : page + 1

    drawTable(getVacationsByPage(vacs, itemsPerPage));
  });
});


