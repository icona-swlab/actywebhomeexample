// Name and Password from the register-form
var name = document.getElementById('name');
var pw = document.getElementById('pw');

function myOnload() {
    console.log("OnLoad")
    console.log("name:"+localStorage.getItem('name' ))
    document.getElementById('name').value = localStorage.getItem('name' )
    document.getElementById('pw').value = localStorage.getItem('pw' )
}

// storing input from register-form
function store() {
    localStorage.setItem('name', document.getElementById('name').value);
    localStorage.setItem('pw', document.getElementById('pw').value);

    return false;
}

// check if stored data from register-form is equal to entered data in the   login-form
function check() {

    // stored data from the register-form
    var storedName = localStorage.getItem('name');
    var storedPw = localStorage.getItem('pw');

    // entered data from the login-form
    var userName = document.getElementById('userName');
    var userPw = document.getElementById('userPw');

    // check if stored data from register-form is equal to data from login form
    if (userName.value !== storedName || userPw.value !== storedPw) {
        alert('ERROR');
    } else {
        alert('You are loged in.');
    }

    return false;
}

function setSession() {
    ACTYObjSetSession(Math.floor(Math.random() * 100000))
}

function ACTYObjSetSession(value) {
    document.getElementById('session').value = value;
}

function internalACTYObjCall() {
    var companycode = document.getElementById('companycode').value;
    if (companycode) {
        console.log("Calling ACTYObjCall with:"+companycode)
        ACTYObjCall(companycode);
    } else {
        console.log("Calling ACTYObjCall")
        ACTYObjCall();
    }

}

function internalACTYObjChat() {
    var companycode = document.getElementById('chatcompanycode').value;
    if (companycode) {
        console.log("Calling ACTYObjChat with:"+companycode)
        ACTYObjChat(companycode);
    } else {
        console.log("Calling ACTYObjChat")
        ACTYObjChat();
    }

}

function setGPS() {
    ACTYObjSetGPS(Math.floor(Math.random() * 100000))
}

function ACTYObjSetGPS(value) {
    document.getElementById('gps').value = value;
}