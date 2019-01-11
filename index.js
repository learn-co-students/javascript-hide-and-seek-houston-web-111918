function getFirstSelector(selector){
   return document.querySelector(selector)
}

function nestedTarget(){
    return getFirstSelector('#nested .target')
}

function deepestChild() {
    let node = document.querySelectorAll('#grand-node div');
    return node[node.length - 1]
}

// function deepestChild(){
//     return getFirstSelector('#grand-node div div div div')
// }


function increaseRankBy(n){
    const lis = document
        // .getElementById('app')
        .querySelectorAll('ul.ranked-list li');
 
    for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n }


    // let listItem = document.querySelectorAll('.ranked-list li');
    // [...listItem].forEach(function(item) {
    //   item.innerHTML =  parseInt(item.innerHTML) + n;
    // });
}


