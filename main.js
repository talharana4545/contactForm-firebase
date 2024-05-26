const firebaseConfig = {
    apiKey: "AIzaSyB5hQo-9_vCSpoBEty-sgHCj-G3bGgc6u0",
    authDomain: "contact-form-6d46e.firebaseapp.com",
    projectId: "contact-form-6d46e",
    storageBucket: "contact-form-6d46e.appspot.com",
    messagingSenderId: "200957685899",
    appId: "1:200957685899:web:eb593a9aa966eb8ed1648e",
    measurementId: "G-K7PPZZ15DD"
  };
  
  firebase.initializeApp(config);


  var messagesRef = firebase.database().ref('messages');

document.getElementById('contactForm').addEventListener('submit',submitForm);
function submitForm(e){
    e.preventDefault();
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');

    saveMessage(name,company,email,phone,message);
    
    //show alert

    document.querySelector('.alert').style.display = 'block';
    
    setTimeout(function(){ 
    document.querySelector('.alert').style.display = 'none';
    },3000);

    document.getElementById('contactForm').reset();
}

function getInputVal(id){
    return document.getElementById(id).value;
}

//save message to firebase storage
function saveMessage(name,company,email,phone,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name:name,
        company:company,
        email:email,
        phone:phone,
        message:message
    });
}