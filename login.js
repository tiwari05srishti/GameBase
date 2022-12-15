// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // console.log(cred.user);
    // reset form
    loginForm.reset();
    const a = cred.user.email;
    window.alert(a + ' : login successful');
    window.location.href ="homepage.html";
  });

});