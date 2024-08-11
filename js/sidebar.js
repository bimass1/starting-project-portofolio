$(document).ready(function () {
  $("#off").click(function () {
    $("#sidebar").hide();
    $(".content").css("width", "160vh");
    $("#off").hide();
    $("#on").css("display", "block");
  });

  $("#on").click(function () {
    // Mengembalikan sidebar ke keadaan semula dan mengubah tombol
    $("#sidebar").show();
    $(".content").css("width", "133vh");
    $("#on").hide();
    $("#off").css("display", "block");
  });
});
