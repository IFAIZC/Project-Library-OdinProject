// create a object constructor
function Book(bookName, authorName, ratingTotal) {
  this.bookName = bookName
  this.authorName = authorName;
  this.ratingTotal = ratingTotal;
};

// Array to store all books
const bookCollection = [];

// create a function, that takes user's input value and save it under objects.
function storingUserInput() {
  const bookName = document.getElementById("book-input").value;
  const authorName = document.getElementById("author-input").value;
  const ratingTotal = document.getElementById("rating-input").value;
  
  // Create a new Book object , it will run through the Book constructor above and then go to bookCollection to store in an array.
  const newBook = new Book(bookName, authorName, ratingTotal);

  // // Add the new Book object to the book collection
  bookCollection.push(newBook);

  // Clear input fields for the next entry
  document.getElementById("book-input").value = "";
  document.getElementById("author-input").value = "";
  document.getElementById("rating-input").value = "";
};

// when user clicks "add" button, it will run and store user's input and store those inputs on newBook... which is linked to Book (object constructor). here we use "new" since this is a new object that we will store in the book section.
document.getElementById("add-new-book").addEventListener("click", storingUserInput)


// Function to display all books in the book collection
function displayBooks() {
  const outputElement = document.getElementById("show-library-output");
  outputElement.innerHTML = ""; // Clear previous content

  bookCollection.forEach((book, index) => {
    const bookDetails = `
      <div>
        <strong>Book #${index + 1}</strong><br>
        <em>Title:</em> ${book.bookName}<br>
        <em>Author:</em> ${book.authorName}<br>
        <em>Rating:</em> ${book.ratingTotal}<br>
        <hr>
      </div>
    `;
    outputElement.innerHTML += bookDetails;
  });
}

document.getElementById("show-library").addEventListener("click", displayBooks)