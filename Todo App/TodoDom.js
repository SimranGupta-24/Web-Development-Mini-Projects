let input=document.querySelector("#inp");
let ul=document.querySelector("ul");
let btn=document.querySelector(".but");

let del=document.querySelectorAll(".delete");



//this won't work for dynamic objects
//the element which are added new as del takes items which are already present in the webpage
// for (let d of del){   
//     d.addEventListener("click",function(){
//         let par=this.parentElement;
//         ul.removeChild(par);
//     })
// }

btn.addEventListener("click",function(){
   let l=document.createElement("li");
   l.innerText=input.value;

   let btn=document.createElement("button");
   btn.innerHTML="delete";
   btn.classList.add("delete");
   ul.append(l);
   l.appendChild(btn);
   input.value="";
})

ul.addEventListener("click",function(event){
    let btn=event.target; //tells what was the target 
    if(btn.nodeName == "BUTTON"){ 
        this.removeChild(btn.parentElement); //btn.parentElement.remove(); also valid
    }
    
    
})
