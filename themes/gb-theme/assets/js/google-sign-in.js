function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log(profile);
  $('#inputFullName').val(profile.getName());
  $('#inputEmail').val(profile.getEmail());
  $('#loginmessage').text('Logged in as:');
  $('#googleUser').text(profile.getName());
  $('#googleEmail').text(profile.getEmail());
  $('#googleSubmit').prop("disabled", false);
}
function onSuccess(googleUser) {
   console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
   $('#googleUser').text(profile.getName());
   $('#googleEmail').text(profile.getEmail());
   $('#googleSubmit').prop("disabled", false);
 }
