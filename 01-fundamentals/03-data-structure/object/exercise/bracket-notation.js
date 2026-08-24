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