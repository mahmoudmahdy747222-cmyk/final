
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("mail").value;
    let phone = document.getElementById("tel").value;
    let message = document.getElementById("message").value;

    let msg = document.getElementById("msg");

    if(name === "" || email === "" || phone === "" || message === ""){
        msg.textContent = " Please fill all fields!";
        msg.className = "msg error";
    } else {
        msg.textContent = "Your message has been sent successfullyو,We will resolve the issue or contact you soon.";
        msg.className = "msg success";

        document.getElementById("contactForm").reset();
    }
});