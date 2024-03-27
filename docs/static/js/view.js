
function setTableView() {
  booksContainer.classList.remove("list", "print");
  booksContainer.classList.add("table");

  listViewButton.classList.remove("active");
  printViewButton.classList.remove("active");
  tableViewButton.classList.add("active");
};


function setListView() {
  booksContainer.classList.remove("table", "print");
  booksContainer.classList.add("list");

  tableViewButton.classList.remove("active");
  printViewButton.classList.remove("active");
  listViewButton.classList.add("active");
};


function setPrintView() {
  booksContainer.classList.remove("table", "list");
  booksContainer.classList.add("print");

  tableViewButton.classList.remove("active");
  listViewButton.classList.remove("active");
  printViewButton.classList.add("active");

  container.classList.add("print");
  window.print();

  container.classList.remove("print");
  setTableView();
};