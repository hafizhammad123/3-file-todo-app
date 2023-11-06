const input = document.querySelector('#input')
const ul = document.querySelector("#ul")

function hello(){
   if(input.value === ""){
      alert("Please enter task")
   }else{
      ul.innerHTML += `<li id="h13">${input.value}
       </li> <button id="h11" onclick="abc()">Delete</button>  <button  id="h12">Edit</button>`
      input.value=""
   }
}

function abc(){
  console.log("delete hoga haha")
}