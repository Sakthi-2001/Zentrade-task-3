document.addEventListener("DOMContentLoaded", function() {
    const cities = ['Socially Circle', 'Malibu', 'Snohomish', 'New York', 'Everett', 'Seattle', 'London'];
    const revenue = [16000, 13000, 6200, 5900, 2400, 2100, 1000];
    const barsContainer = document.getElementById('bars');

    for (let i = 0; i < cities.length; i++) {
        const bar = document.createElement('div');
        bar.classList.add('bar');
        
        const label = document.createElement('span');
        label.classList.add('bar-label');
        label.textContent = cities[i];
        bar.appendChild(label);
        
        const value = document.createElement('span');
        value.classList.add('bar-value');
        value.textContent = `$${revenue[i]}`;
        bar.appendChild(value);
        
        bar.style.width = `${revenue[i] / 100}px`; // Adjust the width for better visualization
        barsContainer.appendChild(bar);
    }
});
