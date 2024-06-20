document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.g-bg');

    function generateRandomPolygon() {
        const points = [];
        for (let i = 0; i < 4; i++) {
            points.push(`${Math.random() * 100}% ${Math.random() * 100}%`);
        }
        return `polygon(${points.join(', ')})`;
    }

    function generateRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    for (let i = 0; i < 4; i++) {
        const polygon = document.createElement('div');
        polygon.classList.add('g-polygon');
        polygon.style.background = `linear-gradient(${generateRandomColor()}, ${generateRandomColor()})`;
        container.appendChild(polygon);

        // Set the final shape after a short delay to allow the transition to take effect
        setTimeout(() => {
            const randomPolygon = generateRandomPolygon();
            polygon.style.clipPath = randomPolygon;
            polygon.style.WebkitClipPath = randomPolygon; // For Safari compatibility
        }, 100);
    }
});

