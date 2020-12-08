var state = {
    num: 0,
    items: []
}

function submitItem(){
    var list=document.getElementById("todo-list");
    var item=document.createElement("li");
    item.id=state.num;
    state.num++;
    var description=document.getElementById("description");
    item.innerText=description.value;
    list.appendChild(item);
    description.value="";
}