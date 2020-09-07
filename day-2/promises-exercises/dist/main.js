
// Exercise 1:
$.get("/randomWord")
  .then(function (word) {
    console.log("the word is:" + word)
    return $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
  })
  .then(function (books) {
    console.log(books.items[0])
  })

// Exercise 2:
const myApiKey = "8MaYvmfAQBrvUKsXPhiPWriSIOXVz6BR"
const renderWord = (word) => $("#container").append(`<p class='word'>${"The word is: " + word}</p>`)
const renderBook = (book) =>
  $("#container").append(`<div class='book'><h1>${book.volumeInfo.title}</h1><h3>${book.volumeInfo.subtitle}</h3></div>`)
const renderGif = (gif) =>
  $("#container").append(`<div class="gif"><iframe src="${gif}"></iframe></div>`)

$.get("/randomWord").then(function (word) {
  const randomWord = word
  const books = $.get(`https://www.googleapis.com/books/v1/volumes?q=title:${word}`)
  const gif = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=${myApiKey}&limit=1`)
  Promise.all([books, gif]).then(function (results) {
    renderWord(randomWord)
    renderBook(results[0].items[0])
    renderGif(results[1].data[0].embed_url)
  })
})
