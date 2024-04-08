const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll('.input-box');

// Function to show notes from local storage
showNotes = () => {notesContainer.innerHTML = localStorage.getItem("notes");}

updateStorage = () => { localStorage.setItem("notes",notesContainer.innerHTML);}

// Show notes when the page loads
showNotes();

createBtn.addEventListener('click', () => {
    // Create a new editable paragraph element
    let inputBox = document.createElement('p');
    
    // Create an image element for delete button
    let img = document.createElement('img');
    
    // Set class and attribute for the input box
    inputBox.className = "input-box";
    inputBox.setAttribute('contenteditable', 'true'); 
    
    // Set source for the delete button image
    img.src = "images/delete.png";
    
    // Append the input box and delete button image to the notes container
    notesContainer.appendChild(inputBox).appendChild(img);
})

notesContainer.addEventListener('click',function(e){
    if (e.target.tagName === 'IMG'){
        e.target.parentElement.remove();// Remove the note when delete button is clicked
        updateStorage();// Update local storage after removing the note
    }
    else if(e.target.tagName ==="P") {
        notes = document.querySelectorAll('.input-box');
        notes.forEach(nt => {
            nt.onkeyup = function(){
                updateStorage();
            }
        })
    }
})

document.addEventListener("keydown", event =>{
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})