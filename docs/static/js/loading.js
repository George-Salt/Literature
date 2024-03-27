
function renderPage() {
  if (getData("view") == "table") {
    setTableView();
  } else if (getData("view") == "list") {
    setListView();
  } else {
    setTableView();
  };

  renderBooks(books);
  renderFilters();
  renderDisplay();
};