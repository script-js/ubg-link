var mpcode = "test1";

var accessoverride;

if (sessionStorage.getItem("accCode") == mpcode) {
  accessoverride = false
}

function checkcode(code) {
  if (code == mpcode) {
    access()
  } else {
    alert("Incorrect code")
  }
}
