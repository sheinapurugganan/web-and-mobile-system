function login() {
 const username = document.getElementById('username').value;
 
 const password = document.getElementById('password').value;

 const confirm = document.getElementById('confirm').value;

if (username=== "") {
  alert("username required");
  return;
}
if (password===confirm) {
  alert("Registration Successful!");
} else{
  alert("password mismatch");
   }
}
