import {
auth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "./firebase.js";

if (
window.location.pathname.includes("index.html") ||
window.location.pathname === "/"
) {
window.onload = function () {
setTimeout(function () {
window.location.href = "login.html";
}, 5000);
};
}

window.analyzeWater = function () {

let tds = parseInt(document.getElementById("tds").value);

let result = "";

if (isNaN(tds)) {
    result = "Please enter a valid TDS value.";
}
else if (tds <= 150) {
    result =
        "Water Quality: Good <br><br>" +
        "Recommended Purifier: UV Purifier";
}
else if (tds <= 300) {
    result =
        "Water Quality: Excellent <br><br>" +
        "Recommended Purifier: UV + UF";
}
else if (tds <= 600) {
    result =
        "Water Quality: Moderate <br><br>" +
        "Recommended Purifier: RO + UV";
}
else {
    result =
        "Water Quality: Poor <br><br>" +
        "Recommended Purifier: RO + UV + UF";
}

document.getElementById("result").innerHTML =
    "<br><h3>" + result + "</h3>";

};

window.signupUser = function () {

const email =
    document.getElementById("signupEmail").value;

const password =
    document.getElementById("signupPassword").value;

createUserWithEmailAndPassword(
    auth,
    email,
    password
)
    .then(() => {

        alert("Account Created Successfully!");

        window.location.href = "login.html";

    })
    .catch((error) => {

        alert(error.message);

    });

};

window.loginUser = function () {

const email =
    document.getElementById("loginEmail").value;

const password =
    document.getElementById("loginPassword").value;

signInWithEmailAndPassword(
    auth,
    email,
    password
)
    .then(() => {

        alert("Login Successful!");

        window.location.href = "dashboard.html";

    })
    .catch((error) => {

        alert(error.message);

    });

};

window.logoutUser = function () {

signOut(auth)
    .then(() => {

        window.location.href = "login.html";

    })
    .catch((error) => {

        alert(error.message);

    });

};