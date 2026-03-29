const cube = document.getElementById("interactive-cube");

if (cube) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let orbitAngle = 0;
    let frameId = 0;

    const animate = () => {
        orbitAngle += prefersReducedMotion ? 0.0025 : 0.008;

        const rotateX = -26 + Math.sin(orbitAngle * 0.9) * 3.5;
        const rotateY = 38 + Math.cos(orbitAngle * 0.75) * 16;
        const rotateZ = Math.sin(orbitAngle * 0.55) * 1.6;

        cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        frameId = window.requestAnimationFrame(animate);
    };

    frameId = window.requestAnimationFrame(animate);

    window.addEventListener("beforeunload", () => {
        if (frameId) {
            window.cancelAnimationFrame(frameId);
        }
    });
}
