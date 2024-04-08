let addBtn = document.getElementById("addBtn");
let createBtn = document.getElementById("submitBtn");
let form = document.getElementById("input");


function storeData(){
    let ls = localStorage;
    let data = [];
    for (let i = 1; i <= document.getElementsByClassName("person").length; i++){
        data.push(
            {
                id: i,
                name: document.getElementsByClassName("name")[i-1].innerText,
                phone: document.getElementsByClassName("phone")[i-1].innerText,
                address: document.getElementsByClassName("address")[i-1].innerText,
                others: document.getElementsByClassName("others")[i-1].innerText
            }
        );
        ls.setItem("contacts", JSON.stringify(data));
    }
}

function loadData(){
    let ls = localStorage;
    let data = JSON.parse(ls.getItem("contacts"));
    for (let i = 1; i <= data.length; i++){
        createIdentity(data[i-1].name, data[i-1].phone, data[i-1].address, data[i-1].others);
    }
}

function createIdentity(name, phone, address, others){
    const con = document.getElementById("details");
    let tr = document.createElement("tr");
    tr.className = "person"
    let num = document.getElementsByClassName("person").length+1;
    tr.parentElement = con;
    tr.innerHTML = `
                <td class="sn">${num}</td>
                <td class="name">${name}</td>
                <td class="phone">${phone}</td>
                <td class="address">${address}</td>
                <td class="others">${others}</td>
    `
    con.appendChild(tr);
    storeData();
}

function getInput() {
    let name = "";
    let phone = "";
    let address = "";
    let others = "";
    document.getElementById("name").onblur = () => {name =  document.getElementById("name").value}
    document.getElementById("phone").onblur = () => {phone =  document.getElementById("phone").value}
    document.getElementById("address").onblur= () => {address =  document.getElementById("address").value}
    document.getElementById("others").onblur = () => {others = document.getElementById("others").value}
    createBtn.onclick = () => {
        if (name != "" && phone != "" && address != ""){
            createIdentity(name, phone, address, others);
            form.style.marginTop = "-50vw";
            document.getElementById("others").value = "";
            document.getElementById("address").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("name").value = "";
        }else {
            alert("Cannot leave name, phone or address field empty!")
        }
    }
}

addBtn.onclick = () => {
    form.style.marginTop = "-5vw";
    getInput();
}

window.onload =  () => {
    loadData();
}