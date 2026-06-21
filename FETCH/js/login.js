document.getElementById("loginForm").addEventListener("submit", function(e) { // Add event listener for form submission
    e.preventDefault(); // Prevent form from submitting normally

    const usernameInput = document.getElementById("username").value;    // Get the username input value
    const passwordInput = document.getElementById("password").value; // Get the password input value
    const message = document.getElementById("message");

    // Fixed username and password
    const fixedUsername = "admin";
    const fixedPassword = "12345";

    if (usernameInput === fixedUsername && passwordInput === fixedPassword) { // Check if the input matches the fixed credentials
        message.style.color = "green"; 
        message.textContent = "Login successful! Redirecting...";

        setTimeout(() => { // Redirect to index.html after a short delay
            window.location.href = "index.html"; // Redirect to the main page after successful login
        }, 1000); // Delay of 1.5 seconds before redirecting
    } else {
        message.style.color = "red"; // Set message color to red for error
        message.textContent = "Invalid username or password."; // Display error message for invalid credentials
    }
});
