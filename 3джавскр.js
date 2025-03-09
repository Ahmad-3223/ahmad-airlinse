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
document.querySelector(".menu-toggle").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});
document.getElementById("ticket-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let date = document.getElementById("date").value;

    document.getElementById("result").innerHTML = 
        `Рейсы из ${from} в ${to} на дату ${date} найдены!`;
});


