const h1= document.querySelector("#h1")
const h2=document.querySelector("#h2")
const heading=document.querySelector("#heading")
const h3=document.querySelector("#h3")
const last=document.querySelector("#last")

// Declare an empty array using JS literal notation to store 
// student names in future.

let studentNames = [];

// Declare and initialize a strings array

let studentName = ["hammad", "hamza", "faheem",]

// Declare and initialize a numbers array

let numbers =[1, 2,3,4,5,6,7]

// Declare and initialize a boolean array

let boolean=[true, false, true, false]


// Declare and initialize a mixed array.

let mixed = ["string",23 ,true ,556, false]

// Declare and Initialize an array and store available mobile 
// networks in Pakistan

let mobileNetworks =["jazz", "warid", "zong","ufone"]

// Declare and Initialize an array and store available education 
// qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, 
// M. Phil., PhD). Show the listed qualifications in your browser 
// like

let educationQualifications= ["SSC","HSC","BCS","BS","BCOM","MS","M.PHIL.","PHD"]
     
      h2.innerHTML+=("Pakistan mein maujood taleem darajat (qualifications) <br>")

for(let i=0; i <educationQualifications.length; i++){
     h1.innerHTML+=` ${i}   ${educationQualifications[i]} <br> `
}
// Declare and initialize an empty array to store top movies of 
// 2015. Add movies one by one in an array. Display the elements 
// & length of array in your browser. (Use array’s length method)

heading.innerHTML+=`TOP MOVIES 2015`

let movies = ["Inside out", "Avengers: age of Altron", "spectre", "karachi Nahi jana"]


for(let i=0; i < movies.length; i++ ){

    h3.innerHTML+= `${i} ${movies[i]} <br>`
     
}

last.innerHTML+= `Lenght of the array 4`