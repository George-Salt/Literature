
function setTableView() {
  booksContainer.classList.remove("list", "compact");
  booksContainer.classList.add("table");

  listViewButton.classList.remove("active");
  compactViewButton.classList.remove("active");
  tableViewButton.classList.add("active");
};


function setListView() {
  booksContainer.classList.remove("table", "compact");
  booksContainer.classList.add("list");

  tableViewButton.classList.remove("active");
  compactViewButton.classList.remove("active");
  listViewButton.classList.add("active");
};


function setCompactView() {
  booksContainer.classList.remove("table", "list");
  booksContainer.classList.add("compact");

  tableViewButton.classList.remove("active");
  listViewButton.classList.remove("active");
  compactViewButton.classList.add("active");
};