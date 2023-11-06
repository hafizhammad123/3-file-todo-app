const h1=document.querySelector("#h1")
const h2=document.querySelector("#h2")
const faheem=document.querySelector("#faheem")
const pol=document.querySelector("#p")
const hammad=document.querySelector('#hammad')
const hamza=document.querySelector('#hamza')

for(let i = 0; i < 5; i++){
   document.write("hello world <br>")
}


for(let i = 1; i <= 10; i++){
   h1.innerHTML += `${i} <br>`
}


let user= +prompt("enter value")
let len= +prompt("len")

// h4.innerHTML +=`table of${user} lenght ${len}`

for(let i= 1; i <= len; i++){

   
    h2.innerHTML += ` ${user}   X ${i}  =  ${user*i}  <br>`;
    
}

const A = ["Nokia", "Samsung", "Apple", "Sony", "Huawei"];

for (let i = 0; i < A.length; i++) {
    faheem.innerHTML += (A[i] +'<br>')
}

const abc = ["fruits", "mango", "apple", "banana"]

for(let i=0; i<abc.length; i++){
   pol.innerHTML+= (`${abc[i] }  is index number its ${i} <br>`)
}

// User se array length (N) input lena
const N = (prompt("Array me kitne items chahiye?"));

// Khali array initialize karna
const items = [];

// User se N items input lena
for (let i = 0; i < N; i++) {
    const item = prompt("Item #" + (i + 1) + " enter karein:");
    items.push(item);
}

// Resultant array ko console par print karna
hammad.innerHTML+=("Aapke array ke items:");
hamza.innerHTML+=(items);
