function validateForm() {
    let username = document.forms["login-form"]["username"].value;
    let password = document.forms["login-form"]["password"].value;
    if (username == "" || password == "") {
      alert("There is empty values");
      return false;
    }else{
        alert("Successfully logged")
    }
  }