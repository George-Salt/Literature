
function renderFilters() {
  let fromValues = new Array();
  let subjectValues = new Array();
  books.forEach(book => {
    fromValues.push(book.from);
    subjectValues.push(book.subject);
  });
  fromValues = Array.from(new Set(fromValues));
  subjectValues = Array.from(new Set(subjectValues));

  let checkedFromFiltersParameters = new Array();
  if (getData("fromFilters")) {
    checkedFromFiltersParameters = getData("fromFilters").split(",");
  };

  let checkedSubjectFiltersParameters = new Array();
  if (getData("subjectFilters")) {
    checkedSubjectFiltersParameters = getData("subjectFilters").split(",");
  };

  fromFilterContainer.innerHTML = "";
  fromValues.forEach(value => {
    let checkboxElement = createFilterCheckboxElement("from", value);

    if (checkedFromFiltersParameters.includes(value)) {
      let checkbox = checkboxElement.querySelector("input");
      checkbox.checked = true;
    };
    fromFilterContainer.append(checkboxElement);
  });

  subjectFilterContainer.innerHTML = "";
  subjectValues.forEach(value => {
    let checkboxElement = createFilterCheckboxElement("subject", value);

    if (checkedSubjectFiltersParameters.includes(value)) {
      let checkbox = checkboxElement.querySelector("input");
      checkbox.checked = true;
    };
    subjectFilterContainer.append(checkboxElement);
  });

  renderBooksByFilters();
};


function createFilterCheckboxElement(name, value) {
  let checkboxElement = document.createElement("label");
  checkboxElement.className = "checkbox";
  checkboxElement.innerHTML = `<input type="checkbox" name="${name}" value="${value}" onchange="booksByFilters = renderBooksByFilters()"><span class="no-select">${value}</span>`;
  return checkboxElement;
};


function openFilters() {
  openCloseFiltersButton.textContent = "Фильтры ▴";
  filtersContainer.classList.add("active");
};


function closeFilters() {
  openCloseFiltersButton.textContent = "Фильтры ▾";
  filtersContainer.classList.remove("active");
};


function openCloseFilters() {
  if (filtersContainer.classList.contains("active")) {
    closeFilters()
  } else {
    openFilters();
  };
};


function renderBooksByFilters() {
  let fromFilterInputs = document.querySelectorAll("main .filters .from .inputs input");
  let subjectFilterInputs = document.querySelectorAll("main .filters .subject .inputs input");

  let fromFilters = new Array();
  fromFilterInputs.forEach(input => {
    if (input.checked) {fromFilters.push(input.value)};
  });

  let subjectFilters = new Array();
  subjectFilterInputs.forEach(input => {
    if (input.checked) {subjectFilters.push(input.value)};
  });

  let booksByFilters = new Array();
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
  } else if (fromFilters.length > 0) {
    books.forEach(book => {
      fromFilters.forEach(fromFilter => {
        if (book.from == fromFilter) {
          booksByFilters.push(book);
        };
      });
    });
  } else if (subjectFilters.length > 0) {
    books.forEach(book => {
      subjectFilters.forEach(subjectFilter => {
        if (book.subject == subjectFilter) {
          booksByFilters.push(book);
        };
      });
    });
  } else {
    booksByFilters = books;
  };

  saveData("fromFilters", fromFilters);
  saveData("subjectFilters", subjectFilters);
  renderBooks(booksByFilters);
  renderBooksWithDisplay();
  return booksByFilters;
};