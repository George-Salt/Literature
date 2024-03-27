
function setTableView() {
  booksContainer.classList.remove("list");
  booksContainer.classList.add("table");

  listViewButton.classList.remove("active");
  tableViewButton.classList.add("active");

  saveData("view", "table");
};


function setListView() {
  booksContainer.classList.remove("table");
  booksContainer.classList.add("list");

  tableViewButton.classList.remove("active");
  listViewButton.classList.add("active");

  saveData("view", "list");
};


function setPrintView() {
  booksContainer.classList.remove("table", "list");
  booksContainer.classList.add("print");

  container.classList.add("print");
  window.print();

  container.classList.remove("print");

  booksContainer.classList.remove("print");
  booksContainer.classList.add(getData("view"));
};