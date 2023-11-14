function closeNav() {
    const nav = document.getElementById('myNav');
    if (nav.classList.contains('responsive')) {
        nav.classList.remove('responsive');
    }
}