
function sortByAlphabet(books) {
  let names = [];
  books.forEach(book => {
    names.push(book.name);
  });
  let sortedNames = names.sort();

  let sortedBooks = [];
  sortedNames.forEach(name => {
    books.forEach(book => {
      if (book.name == name) {
        sortedBooks.push(book);
      };
    });
  });

  renderBooks(sortedBooks);
};


function sortByDate(books) {
  let dates = [];
  books.forEach(book => {
    let days = formatDays(book.date);
    let months = formatMonths(book.date);
    dates.push(`${book.date.getFullYear()}.${months}.${days}`);
  });
  let sortedDates = dates.sort();

  let sortedBooks = [];
  sortedDates.forEach(date => {
    books.forEach(book => {
      let days = formatDays(book.date);
      let months = formatMonths(book.date);
      if (`${book.date.getFullYear()}.${months}.${days}` == date) {
        sortedBooks.push(book);
      };
    });
  });

  renderBooks(sortedBooks);
};