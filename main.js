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
const upcomingTasksListItems = upcomingTasksList.querySelectorAll('div')

const finishedTasksList = document.querySelector('.finished-tasks .tasks')
const finishedTasksListItems = finishedTasksList.querySelectorAll('div')

const addNewElementToTheList = () => {
  const messageFromUser = window.prompt('Podaj nazwę elementu do listy')
  const listElement = document.createElement('div')
  const listElementText = document.createTextNode(messageFromUser)
  const taskName = document.createElement('span')
  const deleteButton = document.createElement('button')

  listElement.appendChild(listElementText)
  upcomingTasksList.appendChild(listElement)
  listElement.appendChild(taskName)
  listElement.appendChild(deleteButton)
  taskName.append(listElementText)
  deleteButton.classList.add('deleting-button')

  addClickListenersToDeleteButtons()
}

const addClickListenersToDeleteButtons = () => {
  document.querySelectorAll('.deleting-button').forEach(deleteButton => {
    deleteButton.addEventListener('click', () => {
      deleteButton.parentElement.remove()
    })
  })
}

addClickListenersToDeleteButtons()

addTaskButton.addEventListener('click', addNewElementToTheList)

upcomingTasksList.addEventListener('click', event => {
  const clickedItem = event.target

  if (clickedItem.classList.contains('tasks')) return
  if (clickedItem.classList.contains('deleting-button')) return

  finishedTasksList.append(clickedItem)
})

finishedTasksList.addEventListener('click', event => {
  const clickedItem = event.target

  if (clickedItem.classList.contains('tasks')) return
  if (clickedItem.classList.contains('deleting-button')) return

  upcomingTasksList.append(clickedItem)
})
