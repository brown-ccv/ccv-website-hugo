function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $('#inputFullName').val(profile.getName());
  $('#inputEmail').val(profile.getEmail());
  $('#loginmessage').text('Logged in as:');
  $('#googleUser').text(profile.getName());
  $('#googleEmail').text(profile.getEmail());
  $('#googleSubmit').removeAttr('disabled');
}
function onSuccess(googleUser) {
   console.log('Logged in as: ' + googleUser.getBasicProfile().getName());
   $('#googleUser').text(profile.getName());
   $('#googleEmail').text(profile.getEmail());
   $('#googleSubmit').removeAttr('disabled');
 }
