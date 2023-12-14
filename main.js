const createButton = document.querySelector('.create');
const noteArea = document.querySelector('.noteArea');

// Load notes from local storage
window.addEventListener('DOMContentLoaded', () => {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => createNote(note));
});

createButton.addEventListener('click', () => {
    createNote();
});

let createNote = (content = '') => {
    let noteBox = document.createElement('div');
    noteBox.className = 'noteBox';

    let notes = document.createElement('p');
    notes.className = "notes";
    notes.textContent = content;
    notes.contentEditable = "true";

    notes.addEventListener('input', updateLocalStorage);

    let deleteNote = document.createElement('button');
    deleteNote.innerHTML = "x";
    deleteNote.className = "deleteNote";

    noteBox.appendChild(notes);
    noteBox.appendChild(deleteNote);
    noteArea.appendChild(noteBox);

    deleteNote.addEventListener('click', () => {
        noteBox.remove();
        updateLocalStorage();
    });
}

let updateLocalStorage = () => {
    const notes = Array.from(document.querySelectorAll('.notes')).map(note => note.textContent);
    localStorage.setItem('notes', JSON.stringify(notes));
}
