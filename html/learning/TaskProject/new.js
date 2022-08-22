// function addFunction(TaskText,ListId){
//     if(TaskText == ""){
//         alert("No input bro")
//         return;
//     }
//     var addText = TaskText;
//     let newDiv = document.createElement("li");
//     newDiv.classList.add('list-group-item')
//     newDiv.innerHTML = `${addText}`;
//     ListId.append(newDiv);
// }

function addFunction(InputBoxId,ListId){
    //console.log(InputBoxId.value);
    TaskText = InputBoxId.value;
    if(TaskText == ""){
        alert("No input bro")
        return;
    }
    var addText = TaskText;
    let newDiv = document.createElement("li");
    newDiv.classList.add('list-group-item')
    newDiv.innerHTML = `${addText}`;
    ListId.append(newDiv);
    InputBoxId.value = ``;    
}