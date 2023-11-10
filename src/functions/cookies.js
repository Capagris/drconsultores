var domain = "drconsultores";
export function setCookie(name, value, days) {
  name = domain + "_" + name;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}
export function getCookie(name) {
  name = domain + "_" + name;
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) === " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}
export function eraseCookie(name) {
  name = domain + "_" + name;
  setCookie(name, "", -1);
}
