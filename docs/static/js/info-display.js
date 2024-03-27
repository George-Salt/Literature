
let displayParameters = [
  "Обложка",
  "Номер",
  "Предмет",
  "Источник получения",
  "Дата получения"
];


function renderDisplay() {
  let checkedDisplayParameters = new String();
  if (getData("displayParameters")) {
    checkedDisplayParameters = getData("displayParameters").split(",");
  } else {
    checkedDisplayParameters = displayParameters;
  };

  displayInputsContainer.innerHTML = "";
  displayParameters.forEach(value => {
    let checkboxElement = createDisplayCheckboxElement(value);

    if (checkedDisplayParameters.includes(value)) {
      let checkbox = checkboxElement.querySelector("input");
      checkbox.checked = true;
    };
    displayInputsContainer.append(checkboxElement);
  });

  renderBooksWithDisplay();
};


function createDisplayCheckboxElement(value) {
  let checkboxElement = document.createElement("label");
  checkboxElement.className = "checkbox";
  checkboxElement.innerHTML = `<input type="checkbox" name="display" value="${value}" onchange="renderBooksWithDisplay()"><span class="no-select">${value}</span>`;
  return checkboxElement;
};


function openDisplay() {
  openCloseDisplayButton.textContent = "Отображение ▴";
  displaysContainer.classList.add("active");
};


function closeDisplay() {
  openCloseDisplayButton.textContent = "Отображение ▾";
  displaysContainer.classList.remove("active");
};


function openCloseDisplay() {
  if (displaysContainer.classList.contains("active")) {
    closeDisplay()
  } else {
    openDisplay();
  };
};


function renderBooksWithDisplay() {
  let displayInputs = document.querySelectorAll("main .displays .inputs input");
  let booksImages = document.querySelectorAll("main .books .book img");
  let booksFrom = document.querySelectorAll("main .books .book .from");
  let booksNumbers = document.querySelectorAll("main .books .book .number");
  let booksSubjects = document.querySelectorAll("main .books .book .subject");
  let booksDates = document.querySelectorAll("main .books .book .date");

  displayParameters = Array();
  displayInputs.forEach(input => {
    if (input.value == "Обложка") {
      if (input.checked) {
        booksImages.forEach(image => {
          image.classList.remove("none");
        });
        displayParameters.push("Обложка");
      } else {
        booksImages.forEach(image => {
          image.classList.add("none");
        });
      };
    } else if (input.value == "Номер") {
      if (input.checked) {
        booksNumbers.forEach(text => {
          text.classList.remove("none");
        });
        displayParameters.push("Номер");
      } else {
        booksNumbers.forEach(text => {
          text.classList.add("none");
        });
      };
    } else if (input.value == "Источник получения") {
      if (input.checked) {
        booksFrom.forEach(text => {
          text.classList.remove("none");
        });
        displayParameters.push("Источник получения");
      } else {
        booksFrom.forEach(text => {
          text.classList.add("none");
        });
      };
    } else if (input.value == "Предмет") {
      if (input.checked) {
        booksSubjects.forEach(text => {
          text.classList.remove("none");
        });
        displayParameters.push("Предмет");
      } else {
        booksSubjects.forEach(text => {
          text.classList.add("none");
        });
      };
    } else if (input.value == "Дата получения") {
      if (input.checked) {
        booksDates.forEach(text => {
          text.classList.remove("none");
        });
        displayParameters.push("Дата получения");
      } else {
        booksDates.forEach(text => {
          text.classList.add("none");
        });
      };
    };
  });

  saveData("displayParameters", displayParameters);
};