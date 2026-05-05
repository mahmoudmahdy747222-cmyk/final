function showTab(tab){

    document.getElementById("login").classList.remove("active");
    document.getElementById("register").classList.remove("active");

    document.getElementById("loginTab").classList.remove("active");
    document.getElementById("registerTab").classList.remove("active");

    document.getElementById(tab).classList.add("active");
    document.getElementById(tab + "Tab").classList.add("active");
}

function register(){

    let password = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;
    let msg = document.getElementById("regMsg");

    if(password !== confirm){
    msg.style.color = "red";
    msg.innerText = "Passwords do not match.";
    return;
    }

    msg.style.color = "green";
    msg.innerText = "Account created successfully.";
}

function login(){

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;
    let msg = document.getElementById("loginMsg");

    if(email === "" || password === ""){
    msg.style.color = "red";
    msg.innerText = "Please fill all fields.";
    return;
    }

    msg.style.color = "green";
    msg.innerText = "Login successful.";
}