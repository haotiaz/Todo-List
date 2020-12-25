var state = {
    num: 0,
    items: []
}

function newItem(){
    var list=document.getElementById("todo-list");
    var item=document.createElement("li");
    var description=document.getElementById("description");
    if(description.value==""){
        alert("You must enter an event");
    }
    else{
        var descriptionText = document.createTextNode(description.value);
        item.append(descriptionText);
        var close = document.createElement("span");
        close.innerText = "\u00D7";
        close.class="close-button";
        close.onclick=function(){
            var to_delete = this.parentElement;
            var parent=to_delete.parentElement;
            parent.removeChild(to_delete);
        }
        item.appendChild(close);
        list.appendChild(item);
        description.value = "";
    }
    
}


function removeAll(){
    var list=document.getElementById("todo-list");
    list.innerHTML="";

}