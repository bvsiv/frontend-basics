const upcomingTasksFromLocalStorage = localStorage.getItem('upcomingTasks')
const finishedTasksFromLocalStorage = localStorage.getItem('finishedTasks')

const addTaskButton = document.querySelector('.add-task')

const upcomingTasksList = document.querySelector('.upcoming-tasks .tasks')
const upcomingTasksListItems = upcomingTasksList.querySelectorAll('div')

const finishedTasksList = document.querySelector('.finished-tasks .tasks')
const finishedTasksListItems = finishedTasksList.querySelectorAll('div')

const addNewElementToTheList = (taskText, tasksListName) => {
  if (taskText === '') return

  const listElement = document.createElement('div')
  const listElementText = document.createTextNode(taskText)
  const taskNameElement = document.createElement('span')
  const deleteButton = document.createElement('button')
  const tasksList = tasksListName === 'upcomingTasks' ? upcomingTasksList : finishedTasksList

  listElement.appendChild(listElementText)
  tasksList.appendChild(listElement)
  listElement.appendChild(taskNameElement)
  listElement.appendChild(deleteButton)
  taskNameElement.append(listElementText)
  deleteButton.classList.add('deleting-button')

  addClickListenersToDeleteButtons()
}

const removeTask = (event, storageKey) => {
  const clickedButton = event.target
  const taskToDelete = clickedButton.parentElement
  removeElementFromLocalStorage(taskToDelete.innerText, storageKey)
  taskToDelete.remove()
}

const addClickListenersToDeleteButtons = () => {
  document
    .querySelectorAll('.upcoming-tasks .deleting-button')
    .forEach(deleteButton => deleteButton.addEventListener('click', event => removeTask(event, 'upcomingTasks')))

  document
    .querySelectorAll('.finished-tasks .deleting-button')
    .forEach(deleteButton => deleteButton.addEventListener('click', event => removeTask(event, 'finishedTasks')))
}

const saveElementInLocalStorage = (newTask, storageKey) => {
  if (newTask === '') return

  const existingTasks = localStorage.getItem(storageKey)
  const updatedTasks = !existingTasks ? newTask : existingTasks + ',' + newTask

  localStorage.setItem(storageKey, updatedTasks)
}

const removeElementFromLocalStorage = (taskToRemove, storageKey) => {
  const existingTasks = localStorage.getItem(storageKey)?.split(',') || []
  const updatedTasks = existingTasks.filter(taskText => taskText !== taskToRemove)

  localStorage.setItem(storageKey, updatedTasks.join())
}

const upcomingTasks = upcomingTasksFromLocalStorage?.split(',') || []
const finishedTasks = finishedTasksFromLocalStorage?.split(',') || []

upcomingTasks.forEach(task => addNewElementToTheList(task, 'upcomingTasks'))
finishedTasks.forEach(task => addNewElementToTheList(task, 'finishedTasks'))

addClickListenersToDeleteButtons()

addTaskButton.addEventListener('click', () => {
  const taskText = window.prompt('Podaj nazwę elementu do listy')

  if (!taskText) return

  addNewElementToTheList(taskText, 'upcomingTasks')
  saveElementInLocalStorage(taskText, 'upcomingTasks')
})

upcomingTasksList.addEventListener('click', event => {
  const clickedItem = event.target

  if (clickedItem.classList.contains('tasks')) return
  if (clickedItem.classList.contains('deleting-button')) return

  finishedTasksList.append(clickedItem)

  saveElementInLocalStorage(clickedItem.innerText, 'finishedTasks')
  removeElementFromLocalStorage(clickedItem.innerText, 'upcomingTasks')
})

finishedTasksList.addEventListener('click', event => {
  const clickedItem = event.target

  if (clickedItem.classList.contains('tasks')) return
  if (clickedItem.classList.contains('deleting-button')) return

  upcomingTasksList.append(clickedItem)

  saveElementInLocalStorage(clickedItem.innerText, 'upcomingTasks')
  removeElementFromLocalStorage(clickedItem.innerText, 'finishedTasks')
})
