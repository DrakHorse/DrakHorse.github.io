let lastSnapTime = 0;

function snap(event) {
    event.preventDefault();
    const sections = el.querySelectorAll("section");
    const currentTime = new Date().getTime();
    if (currentTime - lastSnapTime < 500) {
        return;
    }
    // 滚动时更新背景屏幕
    const container = document.querySelector('.g-bg');

    function generateRandomPolygon() {
        const points = [];
        for (let i = 0; i < 4; i++) {
            points.push(`${Math.random() * 100}% ${Math.random() * 100}%`);
        }
        return `polygon(${points.join(', ')})`;
    }

    for (let i = 0; i < 4; i++) {
        // Set the final shape after a short delay to allow the transition to take effect
        setTimeout(() => {
            const randomPolygon = generateRandomPolygon();
            container.getElementsByTagName("div")[i].style.clipPath = randomPolygon;
            container.getElementsByTagName("div")[i].style.WebkitClipPath = randomPolygon; // For Safari compatibility
        }, 100);
    }

    if (event.deltaY < 0) {
        window.scrollTo({top: sections[0].offsetTop, behavior: 'smooth'});
    }
    if (event.deltaY > 0) {
        window.scrollTo({top: sections[1].offsetTop, behavior: 'smooth'});
    }

    lastSnapTime = currentTime;
}

const el = document.getElementById("main");
el.onwheel = snap;