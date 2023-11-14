function generateSecureRandomNumber(length) {
    const array = new Uint32Array(length);
    window.crypto.getRandomValues(array);
    return Array.from(array).map(number => number % 10).join('');
}