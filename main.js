// Weź pierwszy element który znajdziesz
// document.querySelector('.upcoming-tasks .tasks div')

// Weź wszystkie elementy
// document.querySelectorAll('.upcoming-tasks .tasks div')

// Konwencje nazywania zmiennych
// camelCase
// PascalCase
// snake_case
// kebab-case

console.log('Hello World')

const addTaskButton = document.querySelector('.add-task')

const onClick = () => {
  console.log('Kliknięto przycisk')
  // 1. pokaz okno gdzie user moze dodać wpisac nazwe nowego elementy
  // 2. dodaj element do listy
}

const onMouseEnter = () => {
  console.log('Najechano kursorem')
}

addTaskButton.addEventListener('click', onClick)
addTaskButton.addEventListener('mouseenter', onMouseEnter)
