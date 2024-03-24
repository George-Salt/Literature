
function renderBooks(books) {
  booksContainer.innerHTML = "";
  books.forEach(book => {
    let days = formatDays(book.date);
    let months = formatMonths(book.date);
    let date = `${days}.${months}.${book.date.getFullYear()}`;

    let bookElement = document.createElement("div");
    bookElement.className = "book row";
    bookElement.innerHTML = `<img class="no-drag" src="static/img/${book.name}.png" onclick="openPopup('${book.name}')"><div class="texts"><h2 class="name">${book.name}</h2><div class="details"><p class="number">№&nbsp;${book.number}</p><p class="subject">${book.subject}</p><p class="from">${book.from}</p><p class="date">${date}</p></div></div>`;

    booksContainer.append(bookElement);
  });
};