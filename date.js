module.exports = getdate;
function getdate() {
  var todayday = new Date();
  let Currentday = todayday.getDay();
  let day = "";

  var option = { weekday: "long", day: "numeric", month: "long" };
  day = todayday.toLocaleDateString("en-us", option);
  return day;
}
