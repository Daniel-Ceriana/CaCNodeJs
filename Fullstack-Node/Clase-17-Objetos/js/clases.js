class Usuario1 {

    constructor(username, email, admin) {
            this.username = username;
            this.email = email;
            this.admin = admin;

        }
        // saludar = () => {
        //     console.log("hola" + this.username);
        // }


    saludar() {
        console.log("hola" + this.username);
    }

}
const usuario4 = new Usuario1("User 4", "x@y.com", false);
usuario4.saludar();
console.log("ASDASDAS")