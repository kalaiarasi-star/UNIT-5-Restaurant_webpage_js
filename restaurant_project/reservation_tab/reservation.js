const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
    event.preventDefault(); 
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone no").value.trim();
    const email = document.getElementById("email id").value.trim();
    const guests = document.getElementById("guests").value;

    if (name === "") {
        alert("Please enter your name");
        return;
    }

    if (phone === "" || isNaN(phone) || phone.length < 10) {
        alert("Enter a valid phone number");
        return;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter a valid email");
        return;
    }

    if (guests === "") {
        alert("Please select number of guests");
        return;
    }

    alert("Reservation successful! 🎉");
    form.reset();
});

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.style.color = "white");
        this.style.color = "yellow";
    });
});
document.querySelectorAll("a").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        }
    });
});