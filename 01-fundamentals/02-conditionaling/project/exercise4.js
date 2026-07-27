//  ============== Login Validator (Comparison + Logical + Nullish Coalescing) =============


let username = "bob";
let password = "129900";
let statusLogin;

username = username ?? "";
password = password ?? "";

if (!password || !username){
    statusLogin = "Username & Password cant be empty";
} else if(username.length < 3){
    statusLogin = "Username must be >= 3 Char";
} else if (password.length < 6){
    statusLogin = "Password must be >= 6 Char";
} else{
    statusLogin = "Login Successed";
}
console.log(statusLogin)