
// var list=document.getElementsByTagName("ul")[0];
// list.addEventListener('click',function(event){
//     if(event.target.tagName="LI"){
//         event.target.classList.toggle("checked");
//     }
// },false);

var nodeList=document.getElementsByTagName("LI");
for(let i=0;i<nodeList.length;i++){
    var close = document.createElement("SPAN");
    close.innerText = "\u00D7";
    close.className="close";
    close.onclick = function () {
        var to_delete = this.parentElement;
        var parent = to_delete.parentElement;
        parent.removeChild(to_delete);
    }
    nodeList[i].appendChild(close);
}



var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);


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
        close.classList.toggle("close");
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