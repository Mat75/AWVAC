var firebaseConfig = {
    apiKey: "AIzaSyBeBiHr8johWxn38e92Pp6gqyvuGAEdKGI",
    authDomain: "awba2-7661e.firebaseapp.com",
    databaseURL: "https://awba2-7661e-default-rtdb.firebaseio.com",
    projectId: "awba2-7661e",
    storageBucket: "awba2-7661e.appspot.com",
    messagingSenderId: "1035051133864",
    appId: "1:1035051133864:web:0a90d33e43872d7e54cb9d"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   UsRname=localStorage.getItem("uname")
  Salan=localStorage.getItem("sname")
  function Send(){
    send=document.getElementById("input").value
    firebase.database().ref(Salan).push({
        name:UsRname,
message:send,
like:0
    })
    document.getElementById("input").value=""
  }
