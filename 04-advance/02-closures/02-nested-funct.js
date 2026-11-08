
function A(){
    console.log("This is A");  
    function B(){
        console.log("This is B");     
        function C(){
            console.log("This is C");    
        }
        // Run C
        C();
    }
    // Run B
    B();    
}
// Run A 
A();