$(document).ready(function () {
  var cands = [];
  var page = 0;

  $.getJSON("/Training-team-1/static-data/candidates.json").then(function (resp) {

    cands = resp.candidates;
    var itemsPerPage = getCountItemsPerPage();
    $(".total-count").text(" of " + cands.length);

    drawList(getCandidatesByPage(cands, itemsPerPage));

  }).catch(function (error) {
    console.log(error);
  });

  function drawList(candidates) {
    var $listBody = $(".candidates-wrapper > .row.no-gutters");
    $listBody.empty();
    $(".no-result").toggle(candidates.length === 0);
    $.each(candidates, function (key, candidate) {
      var candidateHtml = "<div class='col-12 col-sm-6 col-md-4 col-xl-3'><a href='#' class='candidate-card'><div class='candidate-status'>" + candidate["current_status"] + "</div><div class='candidate-card-info'><p class='candidate-position'>" + candidate["position"] + "</p><p class='candidate-full-name'>" + candidate["full_name"] + "</p><p class='candidate-salary'>" + candidate["salary"] + "$" + "</p><p class='candidate-update-date'>" + candidate["update_date"] + " day later" + "</p></div></a></div>";
      $listBody.append(candidateHtml);
    });

    updatePagination();
  }

  function getCandidatesByPage(cands, count) {
    return cands.slice(count * page, count * page + count);
  }

  $("select.filter-selection").change(function () {
    $("#filter-candidates").val("");
    var result = cands;
    result = filterByStatus(result, $(".filter-selection option:selected").val());

    drawList(result);
  });

  function filterByStatus(list, status) {
    var statusInLowerCase = status.toLowerCase();
    var itemsPerPage = getCountItemsPerPage();
    if (statusInLowerCase === "default") return getCandidatesByPage(cands, itemsPerPage);

    return list.filter(function (c) {
      return (c.current_status.toLowerCase()).startsWith(statusInLowerCase);
    });
  }

  function getCountItemsPerPage() {
    return parseInt($(".view-filter-selection option:selected").val());
  }

  function updatePagination() {
    var itemsPerPage = getCountItemsPerPage();

    $(".first-v").text(itemsPerPage * page + 1);
    if (cands.length < (itemsPerPage * page + itemsPerPage)) {
      $(".last-v").text(cands.length);
    } else {
      $(".last-v").text(itemsPerPage * page + itemsPerPage);
    }
  }

  $("#filter-candidates").on("keyup", function () {
    var value = $(this).val().toLowerCase();
    var showNoResultMessage = true;
    $(".col-12.col-sm-6.col-md-4.col-xl-3").each(function () {
      var isCandMatch = $(this).text().toLowerCase().indexOf(value) > -1;
      $(this).toggle(isCandMatch);
      if (isCandMatch) {
        showNoResultMessage = false;
      }
    });

    $(".no-result").toggle(showNoResultMessage);
  });

  $("select.view-filter-selection").change(function () {
    page = 0;
    var itemsPerPage = getCountItemsPerPage();
    $(".last-v").text(itemsPerPage);

    drawList(getCandidatesByPage(cands, itemsPerPage));
  });

  $(".page-switching-button-back").on("click", function () {
    page = (page > 0) ? page - 1 : 0;

    drawList(getCandidatesByPage(cands, getCountItemsPerPage()));
  });
  $(".page-switching-button-forward").on("click", function () {
    var itemsPerPage = getCountItemsPerPage();
    page = (cands.length < itemsPerPage * (page + 1)) ? 0 : page + 1;

    drawList(getCandidatesByPage(cands, itemsPerPage));
  });
});