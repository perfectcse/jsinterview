//function login(user){
    //if (!user){
    // return  "user not found ";
  //  }
//return "login successful";
//}
//console.log(login());

function login(user) {
    if (!user) {
        return "User not found";
    }

    return "Login Successful";
}

console.log(login("Vishal")); // Login Successful
console.log(login(""));       // User not found
console.log(login(null));     // User not found