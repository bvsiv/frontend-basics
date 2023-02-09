// Weź pierwszy element który znajdziesz
// document.querySelector('.upcoming-tasks .tasks div')

// Weź wszystkie elementy
// document.querySelectorAll('.upcoming-tasks .tasks div')

// Konwencje nazywania zmiennych
// camelCase
// PascalCase
// snake_case
// kebab-case

const addTaskButton = document.querySelector('.add-task')
const upcomingTasksList = document.querySelector('.upcoming-tasks .tasks')
const deleteButtons = document.querySelectorAll('.deleting-button')

const addNewElementToTheList = () => {
  const messageFromUser = window.prompt('Podaj nazwę elementu do listy')
  const listElement = document.createElement('div')
  const listElementText = document.createTextNode(messageFromUser)

  listElement.appendChild(listElementText)
  upcomingTasksList.appendChild(listElement)
}

addTaskButton.addEventListener('click', addNewElementToTheList)

deleteButtons.forEach(deleteButton => {
  deleteButton.addEventListener('click', () => {
    deleteButton.parentElement.remove()
  })
})
