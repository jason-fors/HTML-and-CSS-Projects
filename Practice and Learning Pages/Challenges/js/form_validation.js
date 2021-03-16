
function validateForm() {
    var checkPhone = document.forms["myForm"]["phonenum"].value;
    if (checkPhone == "") {
      alert("Phone number is required.");
      return false;
    }
  }