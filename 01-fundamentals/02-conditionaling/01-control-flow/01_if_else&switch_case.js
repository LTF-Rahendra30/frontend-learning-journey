const name = "bob"
const age = 17
let legalAge = null

// With If Else
if (age >= 17){
    legalAge = true
} else{
    legalAge = false
}
console.log(legalAge)
// Output : true

// With Switch Case
const day = null

switch(day){
    case "Monday":
        console.log("Time to work")
        break
    case "Tuesday":
        console.log("Time to work")
        break
    case "Wedneday":
        console.log("Time to work")
        break
    case "Friday":
        console.log("Time to work")
        break
    case "Monday":
        console.log("Time to work")
        break
    case "Sunday":
        console.log("Holiday")
        break
    case "Suturday":
        console.log("Holiday")
        break
    default:
        console.log("Nothing")
        break
}

// day = null ==> "Nothing"
// day = "Monday - Friday" ==> "Time to work"
// day = "Sunday - Saturday" ==> "Holiday"