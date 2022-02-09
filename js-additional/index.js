// function verify() {
//   let username = document.querySelector("#username").value;
//   let phone = document.querySelector("#phone").value;
//   let county = document.querySelector("#county").value;
//   let address = document.querySelector("#address").value;

//   let alertMessage = [];

//   if (username == "") {
//     alertMessage.push("姓名");
//   }
//   if (phone == "") {
//     alertMessage.push("連絡電話");
//   }
//   if (county == "" || address == "") {
//     alertMessage.push("通訊地址");
//   }

//   if (alertMessage.length != 0) {
//     alert("請輸入您的" + alertMessage.join());
//     return false;
//   }

//   let password = document.querySelector("#password").value;

//   if (password.length < 8) {
//     alert("密碼長度不得小於8");
//     return false;
//   }
// }

// function openModal() {
//   var myModal = new bootstrap.Modal(document.getElementById("exampleModal"));
//   myModal.show();
// }

function savePerchaseAmount(num) {
  $.cookie("amount", Number(num));
}

function verifyInput() {
  if (document.getElementsByName("purchase_amount")[0].value === "") {
    alert("請選擇購買數量");
  } else {
    window.location.replace("checkout.html");
  }
}
