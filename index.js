function getFirstSelector(selector) {
    return document.querySelector(selector);
}

    function nestedTarget(){
    let x = document.querySelector('#nested')
    return x.querySelector('.target')
}


function deepestChild(id, element) {
    let nodes = document.querySelectorAll(`#grand-node div`);
    if(!nodes.length) return false;
    return nodes[nodes.length-1];
  }



function increaseRankBy(n){
    let rankedLists = document.querySelectorAll('.ranked-list')

    for(let i = 0, l = rankedLists.length; i<l; i++){
        let children = rankedLists[i].children;

        for (let j=0, k=children.length; j<k; j++) {
            children[j].innerHTML = parseInt(children[j].innerHTML) + n;
        }
    }

}





