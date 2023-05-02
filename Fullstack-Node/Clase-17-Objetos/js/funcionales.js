function Usuario(username, email, admin) {
    this.username = username;
    this.email = email;
    this.admin = admin;

    this.saludar = () => {
        console.log("hola" + this.username);
    }
}

const usuario3 = new Usuario("User 3", "x@z.com", false);