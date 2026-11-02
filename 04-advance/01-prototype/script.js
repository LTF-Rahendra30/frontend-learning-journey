// ==== OBJECT LITERAL =====

let student = {
    name: "budi",
    age: 12,
    gender: "Female",
    caloryBurn: 0,
    walk: function(steps){
        let calory = steps * 10
        this.caloryBurn = this.caloryBurn + calory;
        console.log(`Total Calory burn: ${this.caloryBurn}`);
        
    }
}