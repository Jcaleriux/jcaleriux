const cube = document.getElementById("interactive-cube");

if (cube) {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let orbitAngle = 0;
    let frameId = 0;

    const animate = () => {
        orbitAngle += prefersReducedMotion ? 0.0035 : 0.012;

        const rotateX = -20 + Math.sin(orbitAngle * 0.7) * 5;
        const rotateY = orbitAngle * 28;
        const rotateZ = Math.sin(orbitAngle * 0.45) * 2.5;

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
