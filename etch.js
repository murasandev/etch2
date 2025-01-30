const gridContainer = document.querySelector(".grid-container")

function createGrid(axisSize = 16){
    for(i = 0; i < axisSize; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.toggle('grid-row');
        
        gridContainer.appendChild(gridRow);
        gridRow.style.height = `${(500 / axisSize)}px`;

        for(j=0; j < axisSize; j++){
            const box = document.createElement('div');
            box.classList.toggle('initialStyle');
            gridRow.appendChild(box);
        }
    }
}

createGrid();
addHoverEffect();

function addHoverEffect(){
    //adds event listener to all divs in grid
    const boxes = document.querySelectorAll('.initialStyle');
    boxes.forEach((boxDiv) => {
        boxDiv.addEventListener('mouseover', function(e){
            e.target.style.background = 'black';
        });     
    });
}


const btnGrid = document.querySelector('.btn-grid');
btnGrid.addEventListener('click', function(){
    do{
        xAxis = prompt("Enter a number between 16 and 100");
        createGrid(xAxis);
        addHoverEffect();
    }while(xAxis <  16 || xAxis > 100);
});