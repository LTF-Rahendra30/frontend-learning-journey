const resultContainer = document.querySelector('.result-container');
const button = document.getElementById('search-btn');
const idInput = document.getElementById('user-id');


const users = [
    { id: "001", name: "Andi", email: "andi@gmail.com", role: "Admin" },
    { id: "002", name: "Siti", email: "siti@gmail.com", role: "User" },
    { id: "003", name: "Budi", email: "budi@gmail.com", role: "User" },
    { id: "003", name: "Budi", email: "budi@gmail.com", role: "User" },
    { id: "004", name: "Dewi", email: "dewi@gmail.com", role: "User" },
    { id: "005", name: "Rizky", email: "rizky@gmail.com", role: "User" },
    { id: "006", name: "Lina", email: "lina@gmail.com", role: "User" },
    { id: "007", name: "Fajar", email: "fajar@gmail.com", role: "User" },
    { id: "008", name: "Wowok", email: "wowok@gmail.com", role: "User" },
];



button.addEventListener("click", () => {
    const userId = idInput.value;
    const foundUsers = users.find(usr => usr.id === userId);

    if(!foundUsers){
        console.log('User tidak ada');
        resultContainer.innerHTML = `
        <article class="empty-result">
            <p>User tidak terdaftar</p>
        </article>
        `
        
    }
    else{
        console.log("User ketemu");
        console.log(foundUsers);
        resultContainer.innerHTML = `
        <article class="user-card">
            <div class="profile-section">
                <div class="profile-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                </div>
                <div class="profile-content">
                        <p class="id-section">ID: ${foundUsers.id}</p>
                        <h4>${foundUsers.name}</h4>
                    </div>
                </div>
            <p>${foundUsers.email}</p>
            <span class="role">${foundUsers.role}</span>
        </article>
        `
        
    }
})