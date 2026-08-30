const user = {
  name: "Budi",
  job: "Developer",
  region: "Jakarta"
};

// =========== EXTRACTION DATA METHOD =======
console.log(Object.keys(user));
// [ 'name', 'job', 'region' ]

console.log(Object.values(user));
// [ 'Budi', 'Developer', 'Jakarta' ]

console.log(Object.entries(user));
/* 
[ [ 'name', 'Budi' ], 
  [ 'job', 'Developer' ], 
    [ 'region', 'Jakarta' ] 
] */


// ======== ASSIGIN OBJECT ===========
const publicData = {name: "Bob", email: "Bob123@mail.com", isRegister: true};
const privateData = {IP_Address: "192.100.10.169", privateChookie: true};

const COMPLATE_DATA = Object.assign({},privateData,publicData);

console.log(COMPLATE_DATA);
/* 
{
  IP_Address: '192.100.10.169',
  privateChookie: true,
  name: 'Bob',
  email: 'Bob123@mail.com',
  isRegister: true
}
 */



// ======== SECURITY DATA ==========
const configuration = {
  theme: "dark",
  versi: "1.0"
};


// ---- Object freeze ---- (lock object, be cannot manipulation)
Object.freeze(configuration);
// try change value property
configuration.theme = "light";
console.log(configuration);
// { theme: 'dark', versi: '1.0' }


// ---- Object has own ----