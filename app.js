// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyAidKIz3MOUeCmGKfk8sIGOmRTxEE_Imjg",
  authDomain: "akgec-registration.firebaseapp.com",
  databaseURL: "https://akgec-registration-default-rtdb.firebaseio.com",
  projectId: "akgec-registration",
  storageBucket: "akgec-registration.appspot.com",
  messagingSenderId: "1085950002216",
  appId: "1:1085950002216:web:7d331e310f7b48a227e11d",
  measurementId: "G-WDDM744VQ1",
};
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("form").addEventListener("submit", submitForm);

// Submit form
function submitForm(e) {
  e.preventDefault();

  // Get values
  var name = getInputVal("email");
  var password = getInputVal("password");
  var email = getInputVal("name");

  // Save message
  saveMessage(email, password, name);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("form").reset();
}

// Function to get get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(email, password, name) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    email: email,
    password: password,
    name: name,
  });
}
