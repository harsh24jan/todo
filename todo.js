let btn= document.querySelector("button");
let ul=document.querySelector("ul");
let inp=document.querySelector("input");

btn.addEventListener("click",function(){

    if(inp.value==="")
        {
            alert("You must write something!");
        }
        else{
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    delBtn.classList.add("Delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
        }
})


ul.addEventListener("click", function(event){
    if (event.target.nodeName === "BUTTON") {
        let listItem = event.target.parentElement;
        let itemText = listItem.firstChild.textContent;
        listItem.remove();
        setTimeout(function(){
            alert(`${itemText} was Deleted`);
        }, 100);
    }
});
