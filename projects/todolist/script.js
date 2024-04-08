let addInput = document.getElementById("input-task");
let addTaskBtn = document.getElementById("add-task-btn");

addTaskBtn.onclick = () => {
    if (addInput.value != ""){
        manageTask(addInput.value);
        addInput.value = "";
    }
}

function manageBtns(){
    let editBtns = document.getElementsByClassName("edit-task");
    let editLength = editBtns.length;
    let checkBtns = document.getElementsByClassName("task-check");
    let checkLength = checkBtns.length;
    //let delBtns = document.getElementsByClassName("delete-task");
    let tasks = document.getElementsByClassName("task");
    //let delLength = delBtns.length;
    //let x = editLength;
    for (let i = 0; i <= editLength-1; i++){
        editBtns[i].onclick = () => {
            let taskDetails = document.getElementsByClassName("task-details")[i];
            taskDetails.style.color = "#000000";
            taskDetails.style.border =  "0.1vw solid #949CF7";
            taskDetails.style.borderradius =  "0.5vw 0.5vw 0.5vw 0.5vw";
            taskDetails.style.boxshadow = "0vw 0vw 0vw 0.2vw #949cf75c";
            taskDetails.disabled = false;
            taskDetails.onblur = () => {
                taskDetails.style.color = "#000000";
                taskDetails.style.border =  "none";
                taskDetails.style.borderradius =  "0vw";
                taskDetails.style.boxshadow = "none";
                taskDetails.disabled = true ;
                taskDetails.placeholder = taskDetails.value;
            }
            storeData();
        }
        //if (x != editLength){
        //    break;
        //}
    }
    for (let i = 0; i <= checkLength-1; i++){
        checkBtns[i].onclick = () => {
            let taskDetails = document.getElementsByClassName("task-details")[i];
            if (checkBtns[i].checked == true){
                taskDetails.value = taskDetails.placeholder;
                taskDetails.style.textDecoration = "line-through";
                taskDetails.style.color = "#9eff7a";
            } else {
                taskDetails.value = "";
                taskDetails.style.textDecoration = "none";
            }
            storeData();
        }
    }
    //for (let i = 0; i <= delLength-1; i++){
    //    delBtns[i].onclick = () => {
    //        tasks[i].remove();
    //        delLength -= 1;
    //        editLength -= 1;
    //        checkLength -= 1
    //    }
    //}
}

function storeData(){
    let task = document.getElementsByClassName("task");
    let taskNames = document.getElementsByClassName("task-details");
    let taskChecks = document.getElementsByClassName("task-check");
    let data = [];
    for (let i = 1; i <= task.length; i++){
        data.push({
            id: i,
            name: taskNames[i-1].placeholder,
            checked: taskChecks[i-1].checked,
        });
    }
    localStorage.setItem("tasks", JSON.stringify(data));
}

function loadData(){
    const con = document.getElementById("task-con-ul");
    let ls = JSON.parse(localStorage.getItem("tasks"));
    for(i = 0; i <= ls.length-1; i++){
        let task = document.createElement("li");
        task.parentElement = con;
        task.className = "task";
        task.innerHTML = `
        <input type="checkbox" class="task-check" name="${ls[i].name}" />
        <input type="text" placeholder="${ls[i].name}" class="task-details" name="${ls[i].name}" disabled />
        <button class="edit-task" name="${ls[i].name}"><img src="   ./images/pen-to-square-solid.svg"/></button>`;
        //<button class="delete-task" name="${name+"delbtn"}"><img src="./images/trash-solid.svg"/></button>
        //`; 
        con.appendChild(task);  
    }
}

function manageTask (name) {
    const con = document.getElementById("task-con-ul");
    let task = document.createElement("li");
    task.parentElement = con;
    task.className = "task";
    task.innerHTML = `
    <input type="checkbox" class="task-check" name="${name}" />
    <input type="text" placeholder="${name}" class="task-details" name="${name}" disabled />
    <button class="edit-task" name="${name}"><img src="   ./images/pen-to-square-solid.svg"/></button>`;
    //<button class="delete-task" name="${name+"delbtn"}"><img src="./images/trash-solid.svg"/></button>
    //`; 
    con.appendChild(task);
    storeData();
    manageBtns();
}

window.onload = () => {
    if (localStorage.length >= 2){
        loadData();
    }  
    setTimeout(manageBtns(), 1000);  
    setTimeout(storeData(), 1000);  
}