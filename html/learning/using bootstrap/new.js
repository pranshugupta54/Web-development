function addFunction(TaskText,ListId){
    if(TaskText == ""){
        alert("No input bro")
        return;
    }
    var addText = TaskText;
    let newDiv = document.createElement("li");
    newDiv.classList.add('list-group-item')
    newDiv.innerHTML = `${addText}`;
    ListId.append(newDiv);
}