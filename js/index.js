var admin = require('firebase-admin');

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://aupcafeterian.firebaseio.com"
});


// Get a database reference to our blog
var db = admin.database();
var ref = db.ref("server/saving-data/fireblog");

var usersRef = ref.child("users");
usersRef.set({
    alanisawesome: {
        date_of_birth: "June 23, 1912",
        full_name: "Alan Turing"
    },
    gracehop: {
        date_of_birth: "December 9, 1906",
        full_name: "Grace Hopper"
    }
});

var firebaseConfig = {
    apiKey: "AIzaSyBieLwXaDKK7sCca2Y3JsNhWfwIAkiMmWM",
    authDomain: "aupcafeterian.firebaseapp.com",
    databaseURL: "https://aupcafeterian.firebaseio.com",
    projectId: "aupcafeterian",
    storageBucket: "aupcafeterian.appspot.com",
    messagingSenderId: "817710764686",
    appId: "1:817710764686:web:37bf3e59850e437c7befdf",
    measurementId: "G-CR76ZVZXTL"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
console.log(firebase);

firebase.auth.Auth.Persistence.LOCAL;

$("#order").click(function() {
    var name = $("#name").val();
    var id = $("#id").val();
    var address = $("#address").val();

    if (name != "" && id != "" && address != "") {
        var result = firebase.auth().signInWithNameIdAndAddress(name, id, address);

    } else {
        window.alert("Form is incomplete. Please fill out fields.");
    }
});
