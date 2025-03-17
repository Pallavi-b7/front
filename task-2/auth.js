// Task 2: User Authentication Form (JavaScript)
function validateForm() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (!email.includes("@") || password.length < 6) {
        errorMessage.textContent = "Invalid email or password (min 6 characters).";
        return false;
    }
    alert("Login Successful!");
    return true;
}