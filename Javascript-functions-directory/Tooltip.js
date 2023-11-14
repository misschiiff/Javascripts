function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = message;

    element.appendChild(tooltip);

    setTimeout(() => {
        element.removeChild(tooltip);
    }, 2000);
}