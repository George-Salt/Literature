
function getBooks() {
  let books = [
    {
      name: "Моцарт и Сальери",
      number: 22,
      subject: "Литература",
      from: "Из библиотеки",
      date: new Date(2024, 3, 20),
    },
    {
      name: "Мцыри",
      number: 34,
      subject: "Литература",
      from: "Сергей Волков 9А",
      date: new Date(2024, 3, 5),
    },
    {
      name: "Капитанская дочка",
      number: 51,
      subject: "Литература",
      from: "Из библиотеки",
      date: new Date(2024, 3, 8),
    },
    {
      name: "Недоросль",
      number: 12,
      subject: "Литература",
      from: "Из библиотеки",
      date: new Date(2024, 2, 16),
    },
    {
      name: "Пиковая дама",
      number: 84,
      subject: "Литература",
      from: "Из библиотеки",
      date: new Date(2024, 2, 23),
    },
    {
      name: "Будущее разума",
      number: 15,
      subject: "Физика",
      from: "Валера Миронов 9Г",
      date: new Date(2024, 1, 30),
    },
  ];
  return books;
};


function renderBooks(books) {
  booksContainer.innerHTML = "";
  if (books.length > 0) {
    books.forEach(book => {
      let days = formatDays(book.date);
      let months = formatMonths(book.date);
      let date = `${days}.${months}.${book.date.getFullYear()}`;

      let bookElement = document.createElement("div");
      bookElement.className = "book row";
      bookElement.innerHTML = `<img class="no-drag" src="static/img/${book.name}.png" onclick="openPopup('${book.name}')"><div class="texts"><h2 class="name">${book.name}</h2><div class="details"><p class="number">№&nbsp;${book.number}</p><p class="subject">${book.subject}</p><p class="from">${book.from}</p><p class="date">${date}</p></div></div>`;

      booksContainer.append(bookElement);
    });
  } else {
    let notFoundMessageElement = document.createElement("h2");
    notFoundMessageElement.textContent = "Книги с такими параметрами не найдены";
    booksContainer.append(notFoundMessageElement);
  };
};