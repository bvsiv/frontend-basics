// Weź pierwszy element który znajdziesz
// document.querySelector('.upcoming-tasks .tasks div')

// Weź wszystkie elementy
// document.querySelectorAll('.upcoming-tasks .tasks div')

// Konwencje nazywania zmiennych
// camelCase
// PascalCase
// snake_case
// kebab-case

const upcomingTasksFromLocalStorage = localStorage.getItem('upcomingTasks')
// TODO: implement this
const finishedTasksFromLocalStorage = localStorage.getItem('finishedTasks')

const addTaskButton = document.querySelector('.add-task')

const upcomingTasksList = document.querySelector('.upcoming-tasks .tasks')
const upcomingTasksListItems = upcomingTasksList.querySelectorAll('div')

const finishedTasksList = document.querySelector('.finished-tasks .tasks')
const finishedTasksListItems = finishedTasksList.querySelectorAll('div')

const addNewElementToTheList = taskText => {
  if (taskText === '') return

  const listElement = document.createElement('div')
  const listElementText = document.createTextNode(taskText)
  const taskNameElement = document.createElement('span')
  const deleteButton = document.createElement('button')

  listElement.appendChild(listElementText)
  upcomingTasksList.appendChild(listElement)
  listElement.appendChild(taskNameElement)
  listElement.appendChild(deleteButton)
  taskNameElement.append(listElementText)
  deleteButton.classList.add('deleting-button')

  addClickListenersToDeleteButtons()
}

// TODO: reduce indentation
const addClickListenersToDeleteButtons = () => {
  document.querySelectorAll('.deleting-button').forEach(deleteButton => {
    deleteButton.addEventListener('click', () => {
      removeElementFromLocalStorage(deleteButton.parentElement.innerText)
      deleteButton.parentElement.remove()
    })
  })
}

const saveElementInLocalStorage = newTask => {
  if (newTask === '') return

  const existingTasks = localStorage.getItem('upcomingTasks')
  const updatedTasks = existingTasks === null ? newTask : existingTasks + ',' + newTask

  localStorage.setItem('upcomingTasks', updatedTasks)
}

const removeElementFromLocalStorage = taskToRemove => {
  const existingTasks = localStorage.getItem('upcomingTasks')?.split(',') || []
  const updatedTasks = existingTasks.filter(taskText => taskText !== taskToRemove)

  localStorage.setItem('upcomingTasks', updatedTasks.join())
}

/*
let tasks = []

if (upcomingTasksFromLocalStorage !== null) {
  tasks = upcomingTasksFromLocalStorage.split(',')
}

const tasks = upcomingTasksFromLocalStorage ? upcomingTasksFromLocalStorage.split(',') : []
*/

const tasks = upcomingTasksFromLocalStorage?.split(',') || []

tasks.forEach(addNewElementToTheList)

addClickListenersToDeleteButtons()

addTaskButton.addEventListener('click', () => {
  const taskText = window.prompt('Podaj nazwę elementu do listy')

  if (taskText === '') return

  addNewElementToTheList(taskText)
  saveElementInLocalStorage(taskText)
})

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
