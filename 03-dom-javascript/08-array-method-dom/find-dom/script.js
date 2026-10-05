const resultContainer = document.querySelector('.result-container');
const button = document.getElementById('search-btn');
const idInput = document.getElementById('user-id');
const userGrid = document.querySelector('.user-grid');

const users = [
    { id: "001", name: "Andi", email: "andi@gmail.com", role: "Admin" },
    { id: "002", name: "Siti", email: "siti@gmail.com", role: "User" },
    { id: "003", name: "Budi", email: "budi@gmail.com", role: "User" },
    { id: "004", name: "Dewi", email: "dewi@gmail.com", role: "Moderator" },
    { id: "005", name: "Rizky", email: "rizky@gmail.com", role: "User" },
    { id: "006", name: "Lina", email: "lina@gmail.com", role: "User" },
    { id: "007", name: "Fajar", email: "fajar@gmail.com", role: "User" },
    { id: "008", name: "Wowok", email: "wowok@gmail.com", role: "User" },
];

// ====== USERS GRID RENDER =====
function renderUsers(){
    userGrid.innerHTML = users.map(usr => `
        <article class="user-card">
            <div class="profile-section">
                <div class="profile-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                </div>
                <div class="profile-content">
                        <p class="id-section">ID: ${usr.id}</p>
                        <h4>${usr.name}</h4>
                    </div>
                </div>
            <p>${usr.email}</p>
            <span class="role">${usr.role}</span>
        </article>
        `).join('');
}

// Render users
renderUsers();


// ==== FOR EACH FOR ADD CLASS BY ROLE ====
const userCards = document.querySelectorAll('.user-card');

userCards.forEach(card => {
    const roleElement = card.querySelector('.role');

    if (roleElement.textContent.includes('Admin')){
        roleElement.classList.add('role-admin');
    }
    else if (roleElement.textContent.includes('Moderator')){
        roleElement.classList.add('role-moderator');
    }
    else if (roleElement.textContent.includes('User')){
        roleElement.classList.add('role-user');
    }
})

//  ==== EVENTS =======
button.addEventListener("click", () => {
    const userId = idInput.value;
    const foundUsers = users.find(usr => usr.id === userId);

    if(!foundUsers){
        console.log('User tidak ada');
        resultContainer.innerHTML = `
        <article class="empty-result">
            <div class="empty-logo">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </div>
            <div class="empty-info">
                <h3>User tidak ditemukan</h3>
                <p>ID user "${userId}" tidak ada dalam daftar.</p
            </div>
        </article>
        `
        
    }
    else{
        console.log("User ketemu");
        console.log(foundUsers);
        resultContainer.innerHTML = `
        <article class="ready-usr-card">
            <div class="result-info">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                </svg>
                <p>User Ditemukan!</p>
            </div>
            <div class="profile-info-result">
                <div class="profile-icon-result">
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                    </svg>
                </div>
                <div class="profile-content-result">
                        <p class="id-section">ID: ${foundUsers.id}</p>
                        <h4>${foundUsers.name}</h4>
                        <p>${foundUsers.email}</p>
                        <span class="role">${foundUsers.role}</span>
                </div>
            </div>
        </article>
        `
        
    }
});


// ===== RENDER DATA UI ====
const statsUserContainer = document.querySelector('.statistik-user');


// ==== RENDER FUNCTION OF STATS USER ROLE ====

function renderStats(){
    const totalRole = users.reduce((acc,usr) => { 
       const roleKey = usr.role.toLocaleLowerCase();
       acc[roleKey] = (acc[roleKey] ?? 0) + 1;
       return acc;
    },{});
    
    statsUserContainer.innerHTML = `
        <p>Total User: ${totalRole.user}</p>
        <p>Admin: ${totalRole.admin}</p>
        <p>Moderator: ${totalRole.moderator}</p>
    `
}

renderStats();

