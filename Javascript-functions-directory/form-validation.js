function validateForm() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    if (!emailInput.value.includes('@') || passwordInput.value.length < 8) {
        alert('Invalid email or password. Please check your input.');
        return false;
    }

    // Additional validation logic or form submission code can be added here
    return true;
}