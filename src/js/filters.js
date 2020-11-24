const btnsFilter = [...document.querySelectorAll('*[data-filter-btn]')];

function filterActivity() {
  let filter = this.getAttribute('data-filter-btn');
  console.log(filter);
}

if (btnsFilter.length) {
  btnsFilter.forEach((btn) => btn.addEventListener('click', filterActivity));
}
