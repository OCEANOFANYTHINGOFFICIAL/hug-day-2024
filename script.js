// Create a canvas element
const container = document.createElement("div");
document.body.appendChild(container);
const snowflakes = [];

function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    container.appendChild(snowflake);
    snowflakes.push(snowflake);
}

function updateSnowflakes() {
    for (let i = 0; i < snowflakes.length; i++) {
        const snowflake = snowflakes[i];
        const y = parseFloat(snowflake.style.top) || 0;
        const speedY = parseFloat(snowflake.getAttribute("data-speed")) || 1;
        snowflake.style.top = y + speedY + "px";

        if (y > window.innerHeight) {
            container.removeChild(snowflake);
            snowflakes.splice(i, 1);
            i--;
        }
    }
}

function animateSnowflakes() {
    createSnowflake();
    updateSnowflakes();

    requestAnimationFrame(animateSnowflakes);
}

animateSnowflakes();
