var firebaseConfig = {
    apiKey: "AIzaSyCjVGoo-gKdAhuFrYs-2379rf_GpdZnAmI",
    authDomain: "the-bluebird.firebaseapp.com",
    databaseURL: "https://the-bluebird-default-rtdb.firebaseio.com",
    projectId: "the-bluebird",
    storageBucket: "the-bluebird.appspot.com",
    messagingSenderId: "366773402930",
    appId: "1:366773402930:web:95529ab94385f37c88ab2b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function logout() {
  localStorage.removeItem("username");
  window.location="kwitter_login.html";
}