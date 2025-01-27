// create a function, that takes user's input value and save it under objects.
function storingUserInput() {
  const bookName = document.getElementById("book-input").value;
  const authorName = document.getElementById("author-input").value;
  const ratingTotal = document.getElementById("rating-input").value;
  
  // Create a new Book object (object constructor) **TO STUDY**
  const newBook = new book(bookName, authorName, ratingTotal);

  // // Add the new Book object to the book collection **TO STUDY**
  bookCollection.push(newBook);

  // Clear input fields for the next entry
  document.getElementById("book-input").value = "";
  document.getElementById("author-input").value = "";
  document.getElementById("rating-input").value = "";
};

// when user clicks "add" button, it will run and store user's input and store those inputs on newBook... which is linked to Book (object constructor). here we use "new" since this is a new object that we will store in the book section.
document.getElementById("add-new-book").addEventListener("click", storingUserInput)



// create a object constructor ***(REFER CHATGPT TO UNDERSTAND EACH CODE)***
function book() {

};










// create another function, that takes from objects and show it under "show-library-output" 

// ***Keep in mind*** needs to use "this" & "new" 
// to create a template when user put thier input, and those will go under object constructor.