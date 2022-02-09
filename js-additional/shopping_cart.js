$(document).ready(function () {
  let total = $.cookie("amount");
  let total_price = total * 59;

  $("#amount").val(total);
  $("table .total").text(total_price);
  $(".cart-detail .total").text(total_price);

  let final =
    total_price +
    Number($(".cart-detail .transport").text()) -
    Number($(".cart-detail .discount").text());
  $(".cart-detail .final").text(final);

  $("#username").val($.cookie("username"));
  $("#email").val($.cookie("email"));
  $("#account").val($.cookie("account"));
});

$("#shopping-cart-form").validate({
  rules: {
    username: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    account: {
      required: true,
    },
    streetaddress: {
      required: true,
    },
    agree: {
      required: true,
    },
    optradio: {
      required: true,
    },
  },

  messages: {
    username: {
      required: "必填",
    },
    email: {
      required: "必填",
      email: "格式不符",
    },
    account: {
      required: "必填",
    },
    streetaddress: {
      required: "必填",
    },
    agree: {
      required: "尚未勾選同意",
    },
    optradio: {
      required: "請選擇付款方式",
    },
  },

  submitHandler: function (form) {
    var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
    myModal.show();
    return false;
  },
});
