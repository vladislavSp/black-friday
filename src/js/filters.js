const btnsFilter = [...document.querySelectorAll('*[data-filter-btn]')];
const blocks = [...document.querySelectorAll('[data-filter-block]')];

if (btnsFilter.length) {
  btnsFilter.forEach((btn) => {
    btn.checked = false;
    btn.addEventListener('click', filterActivity)
  });
}

function filterActivity() {
  let filter = this.getAttribute('data-filter-btn');
  visibleBlocks(filter);
}

function visibleBlocks(filter) {
  blocks.forEach(block => {
    block.setAttribute('data-vis', false);
    if (block.getAttribute('data-filter-block') === filter) {
      block.setAttribute('data-vis', true);
    }
  });
}
