function greeatName(name){
    return () => console.log(`hello ${name}`);
    
}

const result = greeatName("Bob");
result()
// hello Bob