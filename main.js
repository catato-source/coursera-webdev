function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("wrapper");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("menu");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  document.getElementById(pageName).style.display = "block";
//  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click();

/* Displays Homepage on loading */
function onload() {
  var pageName = "Home";
  document.getElementById(pageName).style.display = "block";
}

function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

/* Error messages */
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

/* First Name Validation Only */
function validatefName() {
  var fname = document.contactForm.fname.value;
  var fnameErr = true;

  if(fname == "") {
      printError("fnameErr", "Please enter your first name.");
      return fnameErr;
  } else {
      var regex = /^[a-zA-Z\s]+$/;
      if(regex.test(fname) === false) {
          printError("fnameErr", "Please enter a valid name.");
      } else {
          printError("fnameErr", "");
          fnameErr = false;
      }
      return fnameErr;
  }
}

/* Last Name Validation Only */
function validateLName() {
  var lName = document.contactForm.lName.value;
  var lnameErr = true;

  if(lName == "") {
      printError("lnameErr", "Please enter your last name.");
      return lnameErr;
  } else {
      var regex = /^[a-zA-Z\s]+$/;
      if(regex.test(lName) === false) {
          printError("lnameErr", "Please enter a valid name.");
      } else {
          printError("lnameErr", "");
          lnameErr = false;
      }
      return lnameErr;
  }
}

/* Email Validation Only */
function validateEmail() {
  var email = document.contactForm.email.value;
  var emailErr = true;

  if(email == "") {
      printError("emailErr", "Please enter your email.");
      return emailErr;
  } else {
      var regex = /^\S+@\S+\.\S+$/;
      if(regex.test(email) === false) {
          printError("emailErr", "Please enter a valid email.");
      } else {
          printError("emailErr", "");
          emailErr = false;
      }
      return emailErr;
  }
}

/* Country Validation Only */
function validateCountry() {
  var country = document.contactForm.country.value;
  var countryErr = true;

  if(country == "") {
      printError("countryErr", "Please enter your country.");
      return countryErr;
  } else {
      var regex = /^[a-zA-Z\s]+$/;
      if(regex.test(country) === false) {
          printError("countryErr", "Please enter a valid country.");
      } else {
          printError("countryErr", "");
          countryErr = false;
      }
      return countryErr;
  }
}

/* Number Validation Only */
function validateNumber() {
  var number = document.contactForm.number.value;
  var numberErr = true;

  if(number == "") {
      printError("numberErr", "Please enter your mobile number.");
      return numberErr;
  } else {
      var regex = /^[1-9]\d{9}$/;
      if(regex.test(number) === false) {
          printError("numberErr", "Please enter a valid 10 digit mobile number.");
      } else{
          printError("numberErr", "");
          numberErr = false;
      }
      return numberErr;
  }
}

function validateGender() {
  var gender = document.contactForm.gender.value;
  var genderErr = true;

  if(gender == "") {
      printError("genderErr", "Please select your gender.");
      return genderErr;
  } else {
      printError("genderErr", "");
      genderErr = false;
  }
  return genderErr;
}

/* Number Validation Only */
function validateAge() {
  var age = document.contactForm.age.value;
  var ageErr = true;

  if(age == "") {
      printError("ageErr", "Please enter an age.");
      return ageErr;
  } else {
      if(age < 10 ||  age > 150) {
          printError("ageErr", "Please enter a valid age.");
      } else{
          printError("ageErr", "");
          ageErr = false;
      }
      return ageErr;
  }
}

/* Whole Form Validation */
function validateForm() {
  var fname = document.contactForm.fname.value;
  validatefName();
  validateLName();
  validateEmail();
  validateCountry();
  validateNumber();
  validateGender();
  validateAge();

  if((validatefName() || validateLName() || validateEmail() || validateCountry() || validateNumber() || validateGender() || validateAge()) == true) {
    return false;
  } else {
    var dataPreview = "Thank you for volunteering, "+ fname + "!\nYou will now be redirected to the homepage.";
    alert(dataPreview);
    onload();
  }
  
}
