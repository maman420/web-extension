let myleads = []
const btn = document.getElementById("input-btn");
const inputel = document.getElementById("input-el")
const ulel = document.getElementById("ul-el")

btn.addEventListener("click", function(){
    myleads.push(inputel.value);
    // let i = 0
    // ulel.textContent = myleads[i]
    // i += 1
}) 
// for (let i = 0; i < myleads.length; i++) {
// }
