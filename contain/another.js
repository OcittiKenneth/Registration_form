/*validation of all inputs with eventListener submit and taking a function 
call myFunction*/

//adding an event listener to the form
document.querySelector("form").addEventListener("submit", myFunction);

function myFunction(e) {

    // User ID specification
    const userId = document.getElementById('users');
    const user = /^[0-9]{5,12}$/;

    if (!user.test(userId.value)) {
        document.getElementById('span1').innerHTML = 'Required and must be of length 5 to 12';
        userId.style.border = '1px solid red';
    } else {
        document.getElementById('span1').innerHTML = "";
        userId.style.border = '1px solid green';
    };

    // password restriction
    const passwordInput = document.getElementById('passwordId');

    if (passwordInput.value.length < 7 || passwordInput.value.length >= 13) {
        document.getElementById('span2').innerHTML = 'Required and must be of leenth 7 to 12';
        passwordInput.style.border = '1px solid red';
    } else {
        document.getElementById('span2').innerHTML = "";
        passwordInput.style.border = '1px solid green';
    };

    // name specification and restriction
    const nameInput = document.getElementById('nameId');
    const forName = /^([A-Z a-z])+$/;

    if (!forName.test(nameInput.value)) {
        document.getElementById('span3').innerHTML = 'Required and alphabates only';
        nameInput.style.border = '1px solid red';
    } else {
        document.getElementById('span3').innerHTML = "";
        nameInput.style.border = '1px solid green';
    };

    // address specifications and it's optional
    const adressInput = document.getElementById('addressid');
    const forAddress = /^[A-Za-z0-9\-_]?$/;
    if (!forAddress.test(adressInput.value)) {
        adressInput.style.border = '1px solid green';
    };

    // select for countries
    const countryInput = document.getElementById('select');

    if (countryInput.selectedIndex == '') {
        document.getElementById('country').innerHTML = 'Required and must select a country';
    } else {
        document.getElementById('country').innerHTML = '';
        countryInput.style.border = '1px solid green';
    };


    // zipcode validation or restriction
    const zipcodeInput = document.getElementById('zipcode');
    const zip = /^[0-9]+$/;

    if (!zip.test(zipcodeInput.value)) {
        zipcodeInput.style.border = '1px solid red';
        document.getElementById('zip_id').innerHTML = 'Required. Must be numeric';
    } else {
        document.getElementById('zip_id').innerHTML = "";
        zipcodeInput.style.border = '1px solid green';
    };

    // email input validation
    const emailInput = document.getElementById('email');

    if (emailInput.value == '') {
        document.getElementById('email_Id').innerHTML = 'Rquired. Must be a valid email';
        emailInput.style.border = '1px solid red';
    } else {
        document.getElementById('email_Id').innerHTML = '';
        emailInput.style.border = '1px solid green';
    };

    // Validtion for gender
    const fisrt = document.getElementById('one');
    const second = document.getElementById('two');

    if ((fisrt.checked == '') && (second.checked == '')) {
        document.getElementById('gender').innerText = 'Required';
    } else {
        document.getElementById('gender').innerText = '';
    };

    // validation for language type
    const nonEng = document.getElementById("nonEng");
    const eng = document.getElementById("eng");

    // function checking if English is checked then non English should be false
    eng.addEventListener("change", () => {
        if (eng.checked == true) {
            nonEng.checked = false;
        }
    });

    // function checking if non English is checked then English should be false
    nonEng.addEventListener("change", () => {
        if (nonEng.checked == true) {
            eng.checked = false;
        }
    });
    if (nonEng.checked == false && eng.checked == false) {
        document.getElementById("lange").innerHTML = "Required";
    } else {
        document.getElementById("lange").innerHTML = "";
    }

    e.preventDefault(); // preveting the default behaviour of the page
};