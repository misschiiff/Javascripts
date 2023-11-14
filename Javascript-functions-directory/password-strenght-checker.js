function checkPasswordStrength(password) {
    // Add your password strength criteria
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (regex.test(password)) {
        console.log('Password is strong.');
    } else {
        console.log('Password is weak. Please use a stronger password.');
    }
}