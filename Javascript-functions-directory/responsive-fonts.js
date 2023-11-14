function adjustFontSize() {
    const screenWidth = window.innerWidth;
    const baseFontSize = 16; // Your base font size in pixels
    const scaleFactor = screenWidth / 1200; // Adjust as needed

    document.body.style.fontSize = baseFontSize * scaleFactor + 'px';
}