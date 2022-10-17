let posicaoQuadrado = document.querySelector('#pikachu');

// MÉTODO EVENT LISTENER
// var vertical = document.getElementById('vertical')
// var horizontal = document.getElementById('horizontal')

// vertical.addEventListener('input', function(cliqueVertical){
//     console.log(vertical.value);
// })

// horizontal.addEventListener('input', function(cliqueHorizontal){
//     console.log(horizontal.value);
// })


// MÉTODO ONINPUT - HTML
function funcVertical(cliqueVertical){
    var vertical = cliqueVertical;
    posicaoQuadrado.style.top = `${vertical}px`;
}

function funcHorizontal(cliqueHorizontal){
    var horizontal = cliqueHorizontal;
    posicaoQuadrado.style.left = `${horizontal}px`;
}