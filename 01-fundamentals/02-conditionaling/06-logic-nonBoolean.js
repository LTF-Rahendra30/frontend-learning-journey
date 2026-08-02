let usersChosenColor = "";
let defultColor = "White";

const currentWebsiteColor = usersChosenColor || defultColor;
console.log(currentWebsiteColor);
// White

// 3 Conditional, with first is False,Null, Undefined
let userTheme = false;
let defaultTheme = "Dark";
let systemTheme = "Light";
const currentTheme = userTheme || defaultTheme || systemTheme;
console.log(currentTheme);
// Dark