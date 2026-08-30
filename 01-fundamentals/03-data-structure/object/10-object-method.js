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