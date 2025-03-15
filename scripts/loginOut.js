const login = () =>{
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        if (username === "") {
            Swal.fire({
                position: "top",
                title: "Please enter your name!!",
              });
            return;
        }
    
        if (password === "123456") {
            Swal.fire({
                title: "Good job!",
                text: "You logged in successfully!",
                icon: "success"
            });
            document.getElementById('username').value = "";
            document.getElementById('password').value = "";

            document.getElementById('banner').classList.add("hidden");
            document.getElementById('LEARN').classList.remove("hidden");
            document.getElementById('FAQ').classList.remove("hidden");
            document.getElementById('menu').classList.remove("hidden");
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Oops...Incorrect Password",
              });
              document.getElementById('password').value = "";
        }
}

const logOut = () =>{
    document.getElementById('banner').classList.remove("hidden");
    document.getElementById('LEARN').classList.add("hidden");
    document.getElementById('FAQ').classList.add("hidden");
    document.getElementById('menu').classList.add("hidden");
}