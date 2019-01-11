
function getFirstSelector(selector){

    return document.querySelector(selector);
}

function nestedTarget(){
    return document.querySelector('#nested .target')
}

function increaseRankBy(n){
    let x = document.querySelectorAll('.ranked-list li') 
    let newArray = [...x]
    // console.log([...x])
    // let test2= []
    // let num = 0
    // for(element of x){
        
    //     num = parseInt(element.innerText)
    //     num += n
    //     element.innerText = num
        // element.innerText = parseInt(element.innerText) + n
// test2.push(element.innerText)
    // }
    newArray.forEach(function(item){
        item.innerHTML = parseInt(item.innerHTML) + n
    // test2.push(item.innerText)
    })
    // return test2
    
}

// increaseRankBy(2)

function deepestChild(){
    var nodes = document.querySelectorAll('#grand-node div');
    return nodes[nodes.length - 1];
}
