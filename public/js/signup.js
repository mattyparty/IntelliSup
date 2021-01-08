$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $('form#signup');
  const emailInput = $('input#email-input');
  const passwordInput = $('input#password-input');

  // When signup button is clicked, validate email and password are not blank
  signUpForm.on('submit', event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim()
    };

    // If no email or password, return
    if (!userData.email || !userData.password) {
      return;
    }

    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password);
    emailInput.val('');
    passwordInput.val('');
  });

  // Does a post to signup route. On success, redirect to account page
  // Otherwise we log any errors
  function signUpUser(email, password) {
    $.post('/api/signup', {
      email: email,
      password: password
    })
      .then(() => {
        window.location.replace('/account');
      })
      .catch(err);
  }
});
