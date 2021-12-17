
let AGE_OF_CONSENT = 18;


function validateName() {
    var element = document.getElementById("name");
    
    if (!element.value) {
        element.style.border = "1px solid red";
        return false;
    }
    return true;
}
function validateDob() {
    var element = document.getElementById("birthdate");
    
    if (!element.value) {
        element.style.border = "1px solid red";
        return false;
    }
    return true;
}

function validateAddressline1() {
    var element = document.getElementById("address1");
    
    if (!element.value) {
        element.style.border = "1px solid red";
        return false;
    }
    return true;
}

function validateAddressline2() {
    var element = document.getElementById("address2");
    if (!element.value) {
        element.style.border = "1px solid red";
    }
}

function validatePostCode() {
    var element = document.getElementById("postcode");
    if (!element.value) {
        element.style.border = "1px solid red";
        return false;
    }
    return true;
}

function validatePhone() {
    var element = document.getElementById("phone");
    if (!element.value) {
        element.style.border = "1px solid red";
        return false;
    }
    return true;
}

function validateEmail() {
    var element = document.getElementById("email");
    if (!element.value) {
        element.style.border = "1px solid red";
        return false;
    }
    return true;
}


function validateReason() {
    var element = document.getElementById("reason");
    if (!element.value) {
        element.style.border = "1px solid red";
        return false;
    }
    return true;
}

function validateCv() {
    var element = document.getElementById("cv");
    if (!element.value) {
        element.style.border = "1px solid red";
        return false;
    }
    return true;
}

function validateForm() {
    if (validateName()
        || validateDob()
        || validateAddressline1()
        || validateAddressline2()
        || validatePostCode()
        || validatePhone()
        || validateEmail()) {
        //valid form
        return true;
    } else {
        //Invlid form action
    }
    return false;
}