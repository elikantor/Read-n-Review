let bookContainer = document.querySelector(".book-container")
let showBookDiv = document.querySelector(".show-book")
let formContainer = document.querySelector('.form-container')
let genreFormContainer = document.querySelector('.genre-form-container')
let genreContainer = document.querySelector('.genre-container')
let featuredBooks = document.querySelector('.featured-books')
featuredBooks.style.border = 'solid black'
// showBookDiv.style.border = 'solid black'

let bookIndexUrl = "http://localhost:3000/books"
let genreIndexUrl = "http://localhost:3000/genres"
let reviewIndexUrl = "http://localhost:3000/reviews"

renderFeaturedBooks()
// Fetches
function fetchAllBooks(){
    return fetch(`${bookIndexUrl}`)
        .then(r => r.json())
}

function fetchAllGenres(){
    return fetch(genreIndexUrl)
        .then(r => r.json())
}

function fetchFeaturedBooks(averageReviewObj){
    return fetch(`${bookIndexUrl}/${averageReviewObj.bookId}`)
        .then(r => r.json())
}

function fetchCreateBook(bookDetails){
    const newBook = {
        title: bookDetails['book-title'].value,
        author: bookDetails['book-author'].value,
        image: bookDetails['book-image'].value,
        genre_id: parseInt(bookDetails['book-genre'].value),
        abstract: bookDetails['book-abstract'].value,
        fiction: bookDetails.fiction.checked
    }
    const configObj = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(newBook)
    }
    return fetch(`${bookIndexUrl}`, configObj)
        .then(r => r.json())
      
}

function fetchCreateReview(review, book){
    const newReview = {
        stars: review.stars.value,
        content: review.content.value,
        book_id: book.id,
    }
    const configObj = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify(newReview)
    }
    return fetch(`${reviewIndexUrl}`, configObj)
        .then(r=>r.json())
}

function fetchUpdateReadThroughs(book){
    let updatedReadThrough = book.attributes.read_throughs +1
    const configObj = {
        method: 'PATCH',
        headers: {
            'content-type': 'application/json',
            'accept': 'application/json'
        },
        body: JSON.stringify({
            read_throughs: updatedReadThrough
        })
    }
    return fetch(`${bookIndexUrl}/${book.id}`, configObj)
        .then(r => r.json())
}
// End Fetches

function renderErrorMessage(){
    bookContainer.innerHTML = '';
    let bookLi = document.createElement("li")
    bookLi.innerText = 'No book found - try your search again! Or create a new book!'
    let bookButton = document.createElement("button")
    bookButton.innerText = "Create Book"
    bookButton.addEventListener("click", (e) => {
        createBook()
    })
    bookContainer.append(bookLi, bookButton)

}
//Renders form to create a new book
function createBook(){
    showBookDiv.innerHTML = ''
    bookContainer.innerHTML = `
        <form>
            Book Title: <input name="book-title" placeholder="Enter a book title..."><br>
            Author: <input name="book-author" placeholder="Enter a book author..."><br>
            Image Url: <input name="book-image" placeholder="Enter a book image_url..."><br>
            Genre: <select name="book-genre" placeholder="Enter a book genre..."></select><br>
            Book Abstract: <textarea name="book-abstract" placeholder="Enter a book abstract..."></textarea><br>
            Fiction?: <input type="checkbox" name="fiction" ><br>
            Create Book: <button>Submit</button>
        </form>
    `
    const newBookForm = bookContainer.querySelector('form')
    const genreSelect = newBookForm.querySelector('select')
        fetchAllGenres().then(json => {
            json.data.forEach(genre =>{
                let genreOption = document.createElement('option')
                genreOption.innerText = genre.attributes.name
                genreOption.value = genre.id
                genreSelect.append(genreOption)
            })
        })
    newBookForm.addEventListener('submit', (e)=>{
        e.preventDefault()
        fetchCreateBook(e.target).then(book => {
            bookContainer.innerHTML ='Successfully created a new book!'
            showBookDetails(book.data)})
    })
    
}

// Renders books in list after search
function renderAFilteredBook(book){
   
    let bookLi = document.createElement("li")
    bookLi.innerText = ` Title: ${book.attributes.title} - Author: ${book.attributes.author}`
    bookContainer.append(bookLi)
    bookLi.addEventListener("click", (e) => {
        showBookDetails(book)
    })
}

// Search Bar
let searchBar = document.createElement("form")
let input = document.createElement("input")
input.name = "book-title"
input.placeholder = "Enter a book title or author..."
input.style.width = '250px'
let searchButton = document.createElement("button")
searchButton.innerText = "Submit"

searchBar.append(input, searchButton)
searchBar.addEventListener("submit", (e) => {
    e.preventDefault()
    showBookDiv.innerHTML = '';
    genreContainer.innerHTML = ''
    fetchAllBooks()
        .then(books => {
            let bookMatches = books.data.filter(book => book.attributes.title.includes(capitalize(e.target['book-title'].value.toLowerCase())) || book.attributes.author.includes(capitalize(e.target['book-title'].value.toLowerCase())))
            if(bookMatches[0]){
                bookContainer.innerHTML = '<h3>Search Results</h3>'
                bookMatches.forEach(book =>{ 
                    renderAFilteredBook(book)
                })
            } else {
                renderErrorMessage()
            }
        })
})
formContainer.append(searchBar)

// Genre Search Button
let genreButton = document.createElement("button")
genreButton.innerText = "Search By Genre"
genreButton.addEventListener("click",(e)=> {
    genreContainer.innerHTML = '<h3>Click a Genre to Filter By</h3>'
    bookContainer.innerHTML = ''
    //Get all Genres, render them, then add event listeners to each
    fetchAllGenres().then(genresObject => {
        let genreList = document.createElement("ul")
        genreContainer.append(genreList)
        genresObject.data.forEach(genre=>{
            let genreLi = document.createElement("li")
            genreLi.name = genre.attributes.name
            genreLi.innerText = genre.attributes.name
            genreLi.addEventListener("click", (e)=>{
                //When clicked, we fetch all books and then render them by the genre clicked
                bookContainer.innerHTML = '<h3>Search Results</h3>'
                fetchAllBooks().then(booksObject=>{
                    let bookArr = booksObject.data.filter(book => book.attributes.genre.name === e.target.name)
                    bookArr.forEach(book=>renderAFilteredBook(book))
                })
            })
            genreList.append(genreLi)
        })
        let closeButton = document.createElement('button')
        closeButton.innerText = 'Exit'
        closeButton.addEventListener('click', e => {
            genreContainer.innerHTML = ''
            bookContainer.innerHTML= ''
        })
        genreContainer.append(closeButton)
    })
})
genreFormContainer.prepend(genreButton)

// creates book elements that will display full book details
function renderBookElements(book){
    let title = document.createElement("p")
    title.innerText = `Title: ${book.attributes.title}`

    let author = document.createElement("p")
    author.innerText = `Author: ${book.attributes.author}`

    let image = document.createElement("img")
    image.src = book.attributes.image

    let abstract = document.createElement("p")
    abstract.innerText = `Abstract: ${book.attributes.abstract}`

    let fiction = document.createElement("p")
    fiction.innerText = (book.attributes.fiction ? 'Fiction':'Non-Fiction')
     
    let elementsArray = [title, author, image, abstract, fiction]
    return elementsArray
}

// Renders the created book elements from renderBookElements with a reviews form + reviews
function showBookDetails(book){
    featuredBooks.innerHTML = ''
    showBookDiv.innerHTML = ''
    
    let numberOfReadings = document.createElement("h4")
    numberOfReadings.innerText = `This book as been read ${book.attributes.read_throughs} times `
    let readingButton = document.createElement("button")
    readingButton.innerText = 'I read this book!'
    readingButton.addEventListener("click",(e)=>{
        fetchUpdateReadThroughs(book).then(json =>{
            numberOfReadings.innerText = `This book as been read ${book.attributes.read_throughs +=1} times `
        })
    })
    // numberOfReadings.append(readingButton)


    let elementsArray = renderBookElements(book)
    
    let reviewForm = document.createElement("form")
    reviewForm.innerHTML = `
        <select name="stars"><option>1</option><option>2</option><option>3</option><option>4</option><option>5</option></select> 
        <textarea name="content" placeholder="Enter a review..."></textarea>
        <input type="submit"></input>
    `
    let reviewDiv = document.createElement("div")
    
    reviewForm.addEventListener("submit", (e)=> {
        e.preventDefault()
        fetchCreateReview(e.target, book).then(json => {
            book.attributes.reviews.push(json.data.attributes)
            showReviews(json.data.attributes, reviewDiv)

        })
    })
    book.attributes.reviews.forEach(review=>{
        showReviews(review, reviewDiv)
    })
    showBookDiv.append(elementsArray[0], elementsArray[1], elementsArray[2], elementsArray[3], elementsArray[4], numberOfReadings, readingButton, reviewForm, reviewDiv)
}

//Displays Reviews for an individual book
function showReviews(review, reviewDiv){
    let starsP = document.createElement("p")
    starsP.innerText = `Star Rating: ${review.stars}`
    let contentP = document.createElement("p")
    contentP.innerText = `Review: ${review.content}`
    reviewDiv.append(starsP, contentP)
}

//Displays books that have the highest ratings in our db
function renderFeaturedBooks(){
    fetchAllBooks().then(json => {
        let reviewsArray = []
        console.log(json.data)
        json.data.forEach(book => {
            let sumStars = book.attributes.reviews.reduce((acc, review) => acc += review.stars , 0)
            let averageReviewObj= {
                bookId: book.id,
                averageReview: sumStars/book.attributes.reviews.length
            }
            reviewsArray.push(averageReviewObj)
        })
        let filteredReviews = reviewsArray.filter(review => review.averageReview >= 1 )
        let sortedReviews = filteredReviews.sort((review1, review2) => (review1.averageReview < review2.averageReview)? 1:-1)
        let topThreeBooks = sortedReviews.slice(0,3)
        topThreeBooks.forEach(averageReviewObj => {
            fetchFeaturedBooks(averageReviewObj).then(json =>{
            let elementsArray = renderBookElements(json.data)
            let bookDiv = document.createElement('div')
            bookDiv.style.width = "33%"
            bookDiv.style.position = 'relative'
            bookDiv.style.display = 'inline-block'
            let bookImg = elementsArray[2]
            bookImg.style.width= '200px'
            let hardRule = document.createElement('hr')
            let averageReviewP = document.createElement("p")
            averageReviewP.innerText = `Average Rating: ${averageReviewObj.averageReview}`
            bookDiv.append(elementsArray[0],elementsArray[1],bookImg,averageReviewP, hardRule)
            featuredBooks.append(bookDiv)
            })
        })
    })
}

// Algorithm to capitalize the first letter of strings
function capitalize(string){
    const words = []
    for(let word of string.split(' ')){
        words.push(word[0].toUpperCase() + word.slice(1))
    }
    return words.join(' ')
}