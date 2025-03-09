function showAlert() {
    alert("Забронируйте билет прямо сейчас!");
}

setInterval(() => {
    const statuses = document.querySelectorAll(".status");
    statuses.forEach(status => {
        let random = Math.random();
        if (random > 0.7) {
            status.textContent = "Задержка";
            status.style.color = "red";
        } else if (random > 0.4) {
            status.textContent = "В пути";
            status.style.color = "green";
        } else {
            status.textContent = "Ожидается";
            status.style.color = "orange";
        }
    });
}, 5000);
