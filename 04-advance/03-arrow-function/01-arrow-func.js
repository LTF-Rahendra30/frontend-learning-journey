

// ===== OBJECT LITERAL ARROW FUNCTION ======

const student = {
    nameBob: "Bob",
    age: 12,
    sayBob: () => {
        return `Hello ${nameBob}`;
        
    }
}

// console.log(student.sayBob());


const Person = function(){
    this.name = "Andrew";
    this.age = 80;
    this.sayHello = function(){
        console.log(`hello ${this.name}`);
        
    }

    setInterval(() => {
        console.log(`Age ${this.age++}`);
        
    },1000);
}

// const andrew = new Person();

// The age will increase every 1 second



// ========= DOM FOR CASE STUDY =======

const box = document.querySelector('.box');
box.addEventListener('click', function() {
    // console.log(this);

    this.classList.toggle('size');
    
    setTimeout(() => {
        this.classList.toggle('caption');
    },1000);
    
})