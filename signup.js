const signup = document.querySelector('#signup-form');
signup.addEventListener('submit', (e) => {
    e.preventDefault();
    //get confirm message via alert box
    var strconfirm = confirm("Are you sure you want to signup?");
    
    //get user info from signup-form
    if (strconfirm == true) {
    const email = signup['signup-email'].value;
    const password = signup['signup-password'].value;

    //sign up the user
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        // console.log(cred.user);
        signup.reset();
        window.alert(cred.user.email +' successfully signed up.');
        window.location.href ="homepage.html"
    });    
    }
});