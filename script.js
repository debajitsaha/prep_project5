var popup=document.getElementById('popup')
var parent=document.querySelector(".parant")
var toptext=document.querySelector(".text")
var topback=document.querySelector(".topback")
var topheading=document.querySelector(".topheading")
var hideadd=document.querySelector(".te")
var noItemMessage = document.getElementById('todotextcon');
var count=0;
var countheading;
console.log(popup)
var taskname=document.getElementById('taskname')
var isOpen=false
var todocount=0
document.querySelector('.link').addEventListener('click',()=>{
  count++;
  countheading=false;
popup.classList.add("show")
parent.classList.add("parent")
var allTodos = document.querySelectorAll(".todocard");
for (var i = 0; i < allTodos.length; i++) {
  allTodos[i].classList.remove("hidden");
  allTodos[i].classList.remove("middle")
}
//middle.classList.remove("middle")
toptext.classList.remove("toptext")
topback.classList.remove("topback1")
topheading.classList.add("topback")
hideadd.classList.remove("hidden")
checkEmpty();
})
function hide(){
popup.classList.remove("show")
parent.classList.remove("parent")
}
var todos=document.getElementById('todos')

function createPopup(){
 
    todocount++;
    
    toptext.classList.remove("toptext")
    topback.classList.remove("topback1")
    var newtodo =document.createElement('div')
    var todoHeading=document.createElement("h2")
    var tododes=document.createElement('div')
    var deletetodo=document.createElement('img')
    var additem =document.createElement('img')
    todos.appendChild(newtodo)
    newtodo.appendChild(todoHeading)
    newtodo.appendChild(tododes)
    newtodo.appendChild(additem)
    newtodo.appendChild(deletetodo)
    deletetodo.src="./delete-icon-image-17.jpg"
    additem.src="./create icon.png";
    todoHeading.classList.add("head")
    todoHeading.innerHTML=taskname.value
    var hr = document.createElement('hr');
  todoHeading.insertAdjacentElement('afterend', hr);
    newtodo.classList.add("todocard")
    deletetodo.innerHTML="Remove"
    deletetodo.style.backgroundColor="red"
    additem.innerText="Add"
    additem.classList.add("addtask1")
    deletetodo.classList.add("removetask")
    tododes.id=`sub${todocount}`
    todoHeading.id=`div${todocount}`
    
   //heading button 
    todoHeading.addEventListener("click",()=>{
      hideadd.classList.add("hidden")
      topheading.classList.remove("topback")
      toptext.classList.add("toptext")
      topback.classList.add("topback1")
      countheading=true;
    //   newtodo.classList.add("discard")
    var allTodos = document.querySelectorAll(".todocard");
    
    for (var i = 0; i < allTodos.length; i++) {
      allTodos[i].classList.add("hidden");
    }
    newtodo.classList.remove("hidden");
    newtodo.classList.add("middle")
    toptext.classList.add("toptext");
    topback.classList.add("topback1");
    // allTodos.classList.add("middle")
    topheading.innerHTML = todoHeading.innerHTML;
    

    })
    ///back button on navbar
    var back=document.querySelector(".back")
      back.addEventListener("click",()=>{
  
       var allTodos = document.querySelectorAll(".todocard");
        for (var i = 0; i < allTodos.length; i++) {
          allTodos[i].classList.remove("hidden");
        }
      newtodo.classList.remove("middle")
      toptext.classList.remove("toptext")
      topback.classList.remove("topback1")
      topheading.classList.add("topback")
      // todoHeading.classList.remove("toback1")
      hideadd.classList.remove("hidden")
      countheading=false;

})

    toptext.classList.remove("toptext")
//delete card from container
     deletetodo.addEventListener("click",()=>{
        newtodo.remove()
        
        
        count--;
        checkEmpty();
        console.log(count)
    })
      var description=document.getElementById("popup2")
      parent.classList.remove("parent")
      popup.classList.remove("show")
    //click on add item on card
    additem.addEventListener('click',()=>{
        parent.classList.add("parent")
        //create popup2 child
       
        var newpop=document.createElement("div")
       var pophead=document.createElement('h2')
       var popcreate=document.createElement('div')
       var deletepop=document.createElement('div')
       var inputpop= document.createElement('input')
       description.appendChild(newpop)
       newpop.appendChild(pophead)
       newpop.appendChild(inputpop)
       newpop.appendChild(popcreate)
       newpop.appendChild(deletepop)
       inputpop.setAttribute("placeholder", "Add New List");
    toptext.classList.remove("toptext")
    topback.classList.remove("topback1")
    topheading.classList.add("topback")
    newpop.classList.add("popupclass") 
    newpop.classList.add("showclass")
    pophead.innerHTML="Add New List"
    pophead.classList.add("heading") 
    inputpop.classList.add("inputext") 
    popcreate.classList.add("create")  
    deletepop.classList.add("delete") 
    popcreate.innerHTML="Add"  
    deletepop.innerHTML="Close" 
// delete popup2
    deletepop.addEventListener("click",()=>{
       newpop.remove()
       parent.classList.remove('parent')
    })   
//////   popup2 add item function declaration                               
    popcreate.addEventListener("click", () => {
      topheading.classList.add("topback")
       if(countheading)
       {
        hideadd.classList.add("hidden")
        topheading.classList.remove("topback")
        toptext.classList.add("toptext")
        topback.classList.add("topback1")
        
       }console.log(countheading)
       newpop.classList.remove("showclass")
       parent.classList.remove("parent")
      var inputValue = inputpop.value;
       addingitem(inputValue); 
    })
})    
var parades=document.getElementById(`sub${todocount}`)
//  popup2 add item function call
function addingitem(inputValue){
  
    var paradiv=document.createElement('div')
        var para=document.createElement('span')
        var done=document.createElement('button')
        parades.appendChild(paradiv)
        paradiv.appendChild(para)
        paradiv.appendChild(done)
        paradiv.classList.add("innerdiv1")
        para.innerHTML=inputValue
        done.innerHTML="Done"
        done.classList.add("done")
        done.addEventListener("click",()=>{
            para.style.textDecoration = "line-through";
            para.style.textDecorationColor = "white";
            done.remove()
          })
     
} 

}
function checkEmpty() {
  if (count === 0) {
    noItemMessage.style.display = "block";
  } else {
    noItemMessage.style.display = "none";
  }
}
    