function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  $('#inputFullName').val(profile.getName());
  $('#inputEmail').val(profile.getEmail());
  $('#loginmessage').text('Logged in as:');
  $('#googleUser').text(profile.getName());
  $('#googleEmail').text(profile.getEmail());
}
