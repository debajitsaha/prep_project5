var popup=document.getElementById('popup')
var parent=document.querySelector(".parant")
console.log(popup)
var taskname=document.getElementById('taskname')
var isOpen=false
var todocount=0
document.querySelector('.link').addEventListener('click',()=>{
popup.classList.add("show")
parent.classList.add("parent")
})
function hide(){
popup.classList.remove("show")
parent.classList.remove("parent")
}
var todos=document.getElementById('todos')

function createPopup(){
    todocount++;
    
    var newtodo =document.createElement('div')
    var todoHeading=document.createElement("h1")
    var tododes=document.createElement('div')
    var deletetodo=document.createElement('button')
    var additem =document.createElement('button')
    todos.appendChild(newtodo)
    newtodo.appendChild(todoHeading)
    newtodo.appendChild(tododes)
    newtodo.appendChild(additem)
    newtodo.appendChild(deletetodo)
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
    deletetodo.addEventListener("click",()=>{
        newtodo.remove()
    })
    var description=document.getElementById("popup2")
    parent.classList.remove("parent")
    popup.classList.remove("show")
    additem.addEventListener('click',()=>{
        parent.classList.add("parent")
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
       newpop.classList.add("popupclass") 
       newpop.classList.add("showclass")
pophead.innerHTML="Add New List"
pophead.classList.add("heading") 
inputpop.classList.add("inputext") 
popcreate.classList.add("create")  
deletepop.classList.add("delete") 
popcreate.innerHTML="Add Item"  
deletepop.innerHTML="Close" 
//
deletepop.addEventListener("click",()=>{
    newpop.remove()
    parent.classList.remove('parent')
})                                   
popcreate.addEventListener("click", () => {
    newpop.classList.remove("showclass")
    parent.classList.remove("parent")
    
    var inputValue = inputpop.value;
    addingitem(inputValue); 
})
})    
var parades=document.getElementById(`sub${todocount}`)
function addingitem(inputValue){
    
    var paradiv=document.createElement('div')
        var para=document.createElement('span')
        var done=document.createElement('button')
        parades.appendChild(paradiv)
        paradiv.appendChild(para)
        paradiv.appendChild(done)
        para.innerHTML=inputValue
        done.innerHTML="Done"
        done.classList.add("done")
        done.addEventListener("click",()=>{
            para.style.textDecoration = "line-through";
          })
     
} 
    







        // var paradiv=document.createElement('div')
        // var para=document.createElement('span')
        // var done=document.createElement('button')
        // description.appendChild(paradiv)
        // paradiv.appendChild(para)
        // paradiv.appendChild(done)
        // para.innerHTML="success"
        // done.innerHTML="Done"
   
       
    
}