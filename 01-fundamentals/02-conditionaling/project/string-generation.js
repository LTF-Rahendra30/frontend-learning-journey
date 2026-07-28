// ================== STRING GENERATION WITH JAVASCRIPT =============

// Data Input Object

const userData = {
    name : "Boby Charley",
    email : "boby123@gmail.com",
    age : 15,
}
// Validator
const isValidName = userData.name !== "" && userData.name.length >= 3;

const isValidEmail = userData.email !== "" && userData.email.includes("@");

const isValidAge = userData.age >= 13 && userData.age <=100;

const isValidform = isValidName && isValidEmail && isValidAge;
// --- HTML String ---

let htmlOutput = `
    <html>
      <head>
        <title>Form Validator</title>
        <style>
          body { font-family: Arial; margin: 20px; }
          .valid { color: green; font-weight: bold; }
          .invalid { color: red; font-weight: bold; }
        </style>
      </head>
      <body>
        <h1>Form Validation Result</h1>

        <!-- Display input data -->
        <div class="input-section">
          <p><strong>Nama:</strong> ${userData.name}</p>
          <p><strong>Email:</strong> ${userData.email}</p>
          <p><strong>Umur:</strong> ${userData.age}</p>
        </div>

        <!-- Display validation results -->
        <div class="validation-section">
          <h2>Hasil Validasi</h2>
          <p>Nama: <span class="${isValidName ? 'valid' : 'invalid'}">
            ${isValidName ? '✅ Valid' : '❌ Invalid (minimal 3 karakter)'}
          </span></p>

          <p>Email: <span class="${isValidEmail ? 'valid' : 'invalid'}">
            ${isValidEmail ? '✅ Valid' : '❌ Invalid (harus punya @)'}
          </span></p>

          <p>Umur: <span class="${isValidAge ? 'valid' : 'invalid'}">
            ${isValidAge ? '✅ Valid' : '❌ Invalid (13-120 tahun)'}
          </span></p>
        </div>

        <!-- Overall status -->
        <div class="status-section">
          ${isValidform 
            ? '<h2 style="color: green;">✅ Form Ready for Submit!</h2>' 
            : '<h2 style="color: red;">❌ Please fix errors above</h2>'}
        </div>
      </body>
    </html>
`;

console.log(htmlOutput);