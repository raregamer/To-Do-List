
//SVG For complete and remove buttons
const removeSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class = "fill"d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" /><path d="M0 0h24v24H0z" fill="none" /></svg>';

const completeSVG = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path class = "fill" d="M0 0h24v24H0z" fill="none"/><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';


//get nodes and set variables to them. 

const newNote = document.querySelector("#newNote");
const addNewNoteButton = document.querySelector("#addNewNoteButton");
const ulList = document.querySelector("ul.all_Notes");

//on click add note.
addNewNoteButton.addEventListener("click", addNote);

//add note method.
function addNote(){
    if(newNote.value){

    let note = document.createTextNode(newNote.value);

    let li = document.createElement("li")
        li.appendChild(note);
      

    let buttons = document.createElement("div");
    buttons.classList.add("buttons");

    let remove = document.createElement("button");
    remove.classList.add("remove");
    remove.innerHTML = removeSVG;
    //remove item from list
    remove.addEventListener('click', removeItem);

    let complete = document.createElement('button');
    complete.classList.add("done");
    complete.innerHTML = completeSVG;
    
    // add item to completed list
    complete.addEventListener('click',addCompleteItem);

    buttons.appendChild(remove);
    buttons.appendChild(complete);
    
    li.appendChild(buttons);
    ulList.insertBefore(li,ulList.childNodes[0]);
    newNote.value = "";

    }
}

//remove item function
function removeItem(){
let item = this.parentNode.parentNode;
parent = item.parentNode;

parent.removeChild(item);



}

//complete item function
function addCompleteItem() {
    var item = this.parentNode.parentNode;
    var parent = item.parentNode;
    var id = parent.id;
    //check if the item shold be added to the completed list or to re-added to the todo list.
    var target = (id === 'todo') ? document.getElementById('completed'): document.getElementById('todo');

    parent.removeChild(item);
    target.insertBefore(item,target.childNodes[0]);


}


