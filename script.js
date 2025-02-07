
const addbtn = document.getElementById("add-todo-btn")
const todoInput = document.getElementById("inputs")
const todoContainer = document.querySelector(".todo")

addbtn.addEventListener("click", ()  =>{
    const addPara = document.createElement("p");
    addPara.innerText = todoInput.value ;

    todoContainer.append(addPara);

    todoInput.value = "";

});