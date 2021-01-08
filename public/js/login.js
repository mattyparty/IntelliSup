// Global variable
const $ = window.$;

$(document).ready(() => {
  // Getting references to our form and inputs
  const loginForm = $('form.login');
  const emailInput = $('input#email-input');
  const passwordInput = $('input#password-input');

  // When the form is submitted, we validate there's an email and password entered
  loginForm.on('submit', event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    // If no email or password, return
    if (!userData.email || !userData.password) {
      return;
    }

    // If email and password exist, run loginUser function and clear the form
    loginUser(userData.email, userData.password);
    emailInput.val('');
    passwordInput.val('');
  });

  // loginUser does post to "api/login" route. on success, send to account page
  function loginUser(email, password) {
    $.post('/api/login', {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace('/account');
        // If there's an error, log the error
      })
      .catch(err => {
        console.log(err);
      });
  }
});
