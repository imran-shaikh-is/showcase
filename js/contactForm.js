(function() {
    emailjs.init("jlFwiBhYC8dsh5y5E"); // Initialize EmailJS
})();

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const body = document.getElementById("body").value.trim();
    const notification = document.getElementById("notification");

    if (!name || !email || !subject || !body) {
        notification.style.display = "block";
        notification.style.color = "red";
        notification.textContent = "Please fill all the fields correctly.";
        return;
    }

    emailjs
        .send("service_jt5zxam", "template_zyjbrzi", {
            name: name,
            email: email,
            subject: subject,
            message: body,
        })
        .then(() => {
            notification.style.display = "block";
            notification.style.color = "green";
            notification.textContent = "Message sent successfully!";
            document.getElementById("myForm").reset();
        })
        .catch((error) => {
            console.error("EmailJS failed:", error);
            notification.style.display = "block";
            notification.style.color = "red";
            notification.textContent = "Failed to send message. Please try again.";
        });
});
