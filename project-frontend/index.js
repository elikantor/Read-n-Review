let bookContainer = document.querySelector(".book-container")
let showBookDiv = document.querySelector(".show-book")
let formContainer = document.querySelector('.form-container')

let bookIndexUrl = "http://localhost:3000/books"

showAllBooks()

function fetchAllBooks(){
    return fetch(`${bookIndexUrl}`)
        .then(r => r.json())
}

function showAllBooks(){
    fetchAllBooks().then(books => {
        books.data.forEach(book => {
            renderABook(book)
        })
    })
}

function renderABook(book){
    let bookLi = document.createElement("li")
    bookLi.innerText = book.attributes.title
    bookContainer.append(bookLi)
    bookLi.addEventListener("click", (e) => {
        showBookDetails(book)
    })
}

function renderErrorMessage(){
    bookContainer.innerHTML = '';
    let bookLi = document.createElement("li")
    bookLi.innerText = 'No book found - try your search again! Or create a new book!'
    bookContainer.append(bookLi)

}

function renderAFilteredBook(book){
    bookContainer.innerHTML = '';
    let bookLi = document.createElement("li")
    bookLi.innerText = book.attributes.title
    bookContainer.append(bookLi)
    bookLi.addEventListener("click", (e) => {
        showBookDetails(book)
    })
}

// Search Bar
let searchBar = document.createElement("form")
let input = document.createElement("input")
input.name = "book-title"
input.placeholder = "Enter a book title..."
let searchButton = document.createElement("button")
searchButton.innerText = "Submit"

searchBar.append(input, searchButton)
searchBar.addEventListener("submit", (e) => {
    e.preventDefault()
    fetchAllBooks()
        .then(books => {
            // let bookNames = books.data.map(book =>
            //     book.attributes.title.toUpperCase()
            // )
            // console.log(bookNames[0])
            let bookMatches = books.data.filter(book => book.attributes.title.includes(capitalize(e.target['book-title'].value.toLowerCase())))
            console.log(bookMatches)
            if(bookMatches){
                bookMatches.forEach(book => renderAFilteredBook(book))
            } else {
                renderErrorMessage()
            }
        })
})


formContainer.append(searchBar)


function showBookDetails(book){
    console.log(book)
    showBookDiv.innerHTML = ''
    let title = document.createElement("p")
    title.innerText = book.attributes.title

    let author = document.createElement("p")
    author.innerText = book.attributes.author

    let image = document.createElement("img")
    image.src = book.attributes.image

    let abstract = document.createElement("p")
    abstract.innerText = book.attributes.abstract

    let fiction = document.createElement("p")
    fiction.innerText = book.attributes.fiction

    showBookDiv.append(title, author, image, abstract, fiction)
}


function capitalize(string){
    const words = []

    for(let word of string.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1))
    }

    return words.join(' ')
}