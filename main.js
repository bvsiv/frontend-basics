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

const onClick = event => {
  console.log('Kliknięto przycisk')

  const messageFromUser = window.prompt('Podaj nazwe elementu do listy')
  const listElement = document.createElement('div')
  const listElementText = document.createTextNode(messageFromUser)

  listElement.appendChild(listElementText)
  document.querySelector('.upcoming-tasks .tasks').appendChild(listElement)
}

addTaskButton.addEventListener('click', onClick)
