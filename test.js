let input = prompt("Who's there?", "");
if (input === null || input === "")  {
    alert("Canceled");

} else if (input === "Admin") {
    let password = prompt("Password?");
    if (password === null || password === "") {
        alert("Canceled");
    } else if (password === 'TheMaster') {
        alert("Welcome!");
    } else {
        alert("Wrong Password");
    }
} else {
    alert("I don't know you");
}

