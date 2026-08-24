const settings = {
  tema: "dark",
  bahasa: "id",
  notifikasi: true
};

// User choose setting (dynamic)
function updateSetting(keyName, newValue) {
  settings[keyName] = newValue;  // Bracket cause keyName is variable
}

updateSetting("tema", "light");
// settings.tema now at "light"

console.log(settings);
// { tema: 'light', bahasa: 'id', notifikasi: true }


// ========= Function Update Property Of Object (Two) ==========
const user = {
    name: "Bob",
    age: 12,
    isStudent: false
}

function updateUser(keyName,newValue){
    user[keyName] = newValue;
}

// Usage
updateUser("isStudent",true);
console.log(user);
// { name: 'Bob', age: 12, isStudent: true }