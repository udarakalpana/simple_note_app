// Declare array for store notes
const notes = JSON.parse(localStorage.getItem('notes')) || []

// This part for accessing all the html elements into the js
const noteForm = document.getElementById('note-form')
const noteAddBtn = document.getElementById('note-add-btn')
const noteInput = document.getElementById('note-input')
const noteList = document.getElementById('note-list')


// Event Listener for adding a note
noteAddBtn.addEventListener('click', () => {
    const note = noteInput.value
    
    if (note) {
        notes.push(note)
        localStorage.setItem('notes', JSON.stringify(notes))
        renderNotes()
        noteInput.value = ''
    }
})

// This function for render in the UI locally store notes
const renderNotes = () => {
    noteList.innerHTML = ''
    notes.map((note, index) => {
        const listItem = document.createElement('li')
        listItem.className = 'list-group-item d-flex justify-content-between mt-4'
        listItem.innerHTML = `${note} <button type='button' class='btn btn-danger btn-sm' data-index='${index}'>Remove Note</button>`
        noteList.appendChild(listItem)
    })
}

// Event Listnere for remove single note
noteList.addEventListener('click', (event) => {
    const index = event.target.getAttribute('data-index')
    notes.splice(index, 1)
    renderNotes()
})

renderNotes()
