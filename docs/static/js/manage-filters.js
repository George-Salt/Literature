
function renderFilters() {
  let fromValues = new Array;
  let subjectValues = new Array;
  books.forEach(book => {
    fromValues.push(book.from);
    subjectValues.push(book.subject);
  });
  fromValues = Array.from(new Set(fromValues));
  subjectValues = Array.from(new Set(subjectValues));

  fromFilterContainer.innerHTML = "";
  fromValues.forEach(value => {
    let checkboxElement = document.createElement("label");
    checkboxElement.className = "checkbox";
    checkboxElement.innerHTML = `<input type="checkbox" name="from" value="${value}" onchange="booksByFilters = renderBooksByFilters()"><span class="no-select">${value}</span>`;

    fromFilterContainer.append(checkboxElement);
  });

  subjectFilterContainer.innerHTML = "";
  subjectValues.forEach(value => {
    let checkboxElement = document.createElement("label");
    checkboxElement.className = "checkbox";
    checkboxElement.innerHTML = `<input type="checkbox" name="from" value="${value}" onchange="booksByFilters = renderBooksByFilters()"><span class="no-select">${value}</span>`;

    subjectFilterContainer.append(checkboxElement);
  });
};


function openCloseFilters() {
  if (filtersContainer.classList.contains("active")) {
    openCloseFiltersButton.textContent = "Фильтры ▾";
    filtersContainer.classList.remove("active");
  } else {
    openCloseFiltersButton.textContent = "Фильтры ▴";
    filtersContainer.classList.add("active");
  };
};


function renderBooksByFilters() {
  let fromFilterInputs = document.querySelectorAll("main .filters .from .inputs input");
  let subjectFilterInputs = document.querySelectorAll("main .filters .subject .inputs input");
  let fromFilters = new Array;
  let subjectFilters = new Array;

  fromFilterInputs.forEach(input => {
    if (input.checked) {fromFilters.push(input.value)};
  });
  subjectFilterInputs.forEach(input => {
    if (input.checked) {subjectFilters.push(input.value)};
  });

  let booksByFilters = [];
  if (fromFilters.length > 0 && subjectFilters.length > 0) {
    books.forEach(book => {
      fromFilters.forEach(fromFilter => {
        subjectFilters.forEach(subjectFilter => {
          if (book.from == fromFilter && book.subject == subjectFilter) {
            booksByFilters.push(book);
          };
        });
      });
    });

    renderBooks(booksByFilters);
  } else if (fromFilters.length > 0) {
    books.forEach(book => {
      fromFilters.forEach(fromFilter => {
        if (book.from == fromFilter) {
          booksByFilters.push(book);
        };
      });
    });

    renderBooks(booksByFilters);
  } else if (subjectFilters.length > 0) {
    books.forEach(book => {
      subjectFilters.forEach(subjectFilter => {
        if (book.subject == subjectFilter) {
          booksByFilters.push(book);
        };
      });
    });

    renderBooks(booksByFilters);
  } else {
    renderBooks(books);
  };

  if (sortedMethod) {
    sortByParameter(sortedMethod)
  };
  return booksByFilters;
};