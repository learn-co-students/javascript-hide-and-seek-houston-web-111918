function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function deepestChild() {
  let node = document.querySelectorAll('#grand-node div');
  return node[node.length - 1]
}

function increaseRankBy(n) {
  let listItem = document.querySelectorAll('.ranked-list li');

  [...listItem].forEach(function(item) {
    item.innerHTML =  parseInt(item.innerHTML) + n;
  });
}
