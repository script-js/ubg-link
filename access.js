var mpcode;

var accessoverride;

if (sessionStorage.getItem("accCode") == mpcode) {
  accessoverride = false
}

function checkcode(code) {
  if (code == mpcode) {
    approve()
  } else {
    alert("Incorrect code")
  }
}
