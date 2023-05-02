const usuario1 = {
    username: "user 1",
    email: "x@x.com"
}


const usuario2 = {
    username: "user 1",
    email: "x@x.com"
}

delete usuario1.username;
usuario1.user = "Juan";

for (const key in usuario1) {
    console.log(key)
}