
function sortByParameter(bookParameter) {
  let booksToSort = books;
  if (booksByFilters.length > 0) {
    booksToSort = booksByFilters;
  };

  let values = new Array();
  let sortedBooks = new Array();
  if (bookParameter == "name") {
    sortedMethod = "name";

    booksToSort.forEach(book => {
      values.push(book.name);
    });
    let sortedValues = values.sort();

    sortedValues.forEach(value => {
      booksToSort.forEach(book => {
        if (book.name == value) {
          sortedBooks.push(book);
        };
      });
    });
  } else if (bookParameter == "date") {
    sortedMethod = "date";

    booksToSort.forEach(book => {
      let days = formatDays(book.date);
      let months = formatMonths(book.date);
      values.push(`${book.date.getFullYear()}.${months}.${days}`);
    });
    let sortedValues = values.sort();

    sortedValues.forEach(value => {
      booksToSort.forEach(book => {
        let days = formatDays(book.date);
        let months = formatMonths(book.date);
        if (`${book.date.getFullYear()}.${months}.${days}` == value) {
          sortedBooks.push(book);
        };
      });
    });
  };
  renderBooks(sortedBooks);
};