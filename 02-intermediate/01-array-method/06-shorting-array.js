// ============ SHORTING ARRAY OF OBJECT WITH CALLBACK FUNCTION ============

let user = [
    {id: 1, name: "Bob"},
    {id: 2, name: "Steven"},
    {id: 3, name: "Andrew"},
    {id: 4, name: "Chloe"},
];

const result = user.sort((a,b) => {
    const lowerCaseA = a.name.toLowerCase();
    const lowerCaseB = b.name.toLowerCase();
    
    if (lowerCaseA < lowerCaseB) return -1;
})

console.log(result);
/* [
  { id: 3, name: 'Andrew' },
  { id: 1, name: 'Bob' },
  { id: 4, name: 'Chloe' },
  { id: 2, name: 'Steven' }
]
 */
