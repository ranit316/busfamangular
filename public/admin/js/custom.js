$(document).ready(function () {

  $('.multiple-select').select2({
    multiple: true,
  });
  $('.single-select').select2();

})

function goBack() {
  window.history.back(); // Navigates to the previous page in history
}

