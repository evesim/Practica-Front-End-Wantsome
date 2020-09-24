        document.getElementById("next-button").addEventListener("click", function () {
        let validForm = true;

        let username = document.getElementById("username-input").value;

        let isValid = isUsernameValid(username);
        if (!isValid) {
            document.getElementById("username-error-input").style.display = "block";
            validForm = false;
        }
        else {
            document.getElementById("username-error-input").style.display = "none";;
        }

        let email = document.getElementById("email-input").value;
        isValid = isEmailValid(email);
        if (!isValid) {
            document.getElementById("email-error-input").style.display = "block";
            validForm = false;
        }
        else {
            document.getElementById("email-error-input").style.display = "none";
        }

        let firstName = document.getElementById("first-name-input").value;
        if (!firstName) {
            document.getElementById("first-name-error-input").style.display = "block";
            validForm = false;
        }
        else {
            document.getElementById("first-name-error-input").style.display = "none";
        }

        let lastName = document.getElementById("last-name-input").value;
        if (!lastName) {
            document.getElementById("last-name-error-input").style.display = "block";
            validForm = false;
        }
        else {
            document.getElementById("last-name-error-input").style.display = "none";
        }

        let phone = document.getElementById("phone-input").value;
        isValid = isPhoneValid(phone);
        if (!isValid) {
            document.getElementById("phone-error-input").style.display = "block";
            validForm = false;
        }
        else {
            document.getElementById("phone-error-input").style.display = "none";
        }

        var optionsValue =  document.querySelectorAll("input[name='options']:checked")[0].value;

        //validate the form
        // if (validForm) {
        //     let output = '';
        //     if (optionsValue == 'site') {
        //         output = `http://${firstName}_${lastName}.com`;
        //     } else {
        //         output = `${firstName}.${lastName}`
        //     }
        //     alert(output);
        // }


    });

function isUsernameValid(username) {
    if (username.length < 4)
        return false;

    for (var i = 0; i < username.length; i++) {
        let character = username.charAt(i);
        if (!((character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z') || (character >= '1' && character <= '9')))
            return false;
    }
    return true;
}

function isEmailValid(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

function isPhoneValid(phone) {
    if (phone.length < 10)
        return false;

    for (var i = 0; i < phone.length; i++) {
        let character = phone.charAt(i);
        if (!(character >= '1' && character <= '9'))
            return false;
    }
    return true;
}