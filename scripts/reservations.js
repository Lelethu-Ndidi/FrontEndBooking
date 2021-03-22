var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = currentDateTime.getMonth() + 1;
var date = currentDateTime.getDate() + 1;

if (date < 10) {
  date = "0" + date;
}
if (month < 10) {
  month = "0" + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var checkinDay = document.querySelector("#checkin-date");
var checkoutDay = document.querySelector("#checkout-date");

checkinDay.setAttribute("min", dateTomorrow);

checkinDay.onchange = function () {
  checkoutDay.setAttribute("min", this.value);
};
