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
    // console.log(InputBoxId);
    // console.log(InputBoxId.value);
    TaskText = InputBoxId.value;
    if(TaskText == ""){
        alert("No input bro")
        return;
    }
    var addText = TaskText;
    // input box formation
    let newDiv = document.createElement("input");
    newDiv.setAttribute('type', "input");
    // console.log("------");
    // console.log(addText);
    newDiv.setAttribute('value', `${addText}`);
    newDiv.setAttribute('disabled', true);
    newDiv.classList.add('m-0', 'mt-2', 'form-control', 'w-75', 'rounded-0');
    newDiv.innerHTML = `${addText}`;
    ListId.append(newDiv);

    //Remove Button formation
    let newButton = document.createElement("button");
    newButton.classList.add('btn', 'mt-2', 'btn-outline-danger', 'rounded-0');
    newButton.setAttribute('type', "button");
    newButton.setAttribute('onclick', 'removeFunction(this)')
    newButton.innerHTML = "Remove";
    
    ListId.append(newButton);
    InputBoxId.value = ``;
    newInputId = ListId.id + "-" + newDiv.parentNode.children.length + "-b-i";
    newButtonId = ListId.id + "-" + newDiv.parentNode.children.length + "-b";
    newDiv.setAttribute('id',newInputId);
    newButton.setAttribute('id',newButtonId);
    console.log(newDiv.textContent + " => " + newDiv.id);
    console.log(newDiv.textContent + " => " + newButton.id);
    
}

/*
newId = ListId.id + "-" + newDiv.parentNode.children.length;
newDiv.getAttribute("id", newId)
ListId.append(newDiv);
*/




function removeFunction(obj){
// console.log("<--- Remove Button --->");
// console.log(obj.id);
InputBoxId = obj.id + "-i";
// console.log("----")
// console.log(InputBoxId);
document.getElementById(InputBoxId).remove();
document.getElementById(obj.id).remove();
console.log("Deleted => " + obj.id);
}
