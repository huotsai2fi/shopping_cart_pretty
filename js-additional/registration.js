// $("#new-password").keyup(function checkLength() {
//   if ($(this).val().length < 8) {
//     $(this).siblings("small").text("密碼長度不足").css("color", "red");
//   } else {
//     $(this).siblings("small").text("密碼長度OK").css("color", "green");
//   }
// });

// $("#verify-password").keyup(function checkIdentity() {
//   if ($(this).val() != $("#new-password").val()) {
//     $(this).siblings("small").text("密碼不相符").css("color", "red");
//   } else {
//     $(this).siblings("small").text("密碼相符").css("color", "green");
//   }
// });

$("#register-form").validate({
  rules: {
    username: {
      required: true,
    },
    email: {
      required: true,
      email: true,
    },
    "new-account": {
      required: true,
    },
    "new-password": {
      required: true,
      minlength: 8,
    },
    "verify-password": {
      required: true,
      equalTo: "#new-password",
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
    "new-account": {
      required: "必填",
    },
    "new-password": {
      required: "必填",
      minlength: "長度至少為8",
    },
    "verify-password": {
      required: "必填",
      equalTo: "密碼不一致",
    },
  },
  submitHandler: function (form) {
    let username = $("#username").val();
    let email = $("#email").val();
    let newAccount = $("#new-account").val();
    let newPasswd = $("#new-password").val();
    let verifyPasswd = $("#verify-password").val();

    $.post(
      "https://www.townway.com.tw/auth",
      {
        account: newAccount,
        password: newPasswd,
      },
      function (data, status) {
        if (status == "success") {
          $.cookie("authKey", data);
          $.cookie("username", username);
          $.cookie("email", email);
          $.cookie("account", newAccount);
        }
        window.location.replace("cart.html");
      }
    );

    return false;
  },
});
