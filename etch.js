const gridContainer = document.querySelector(".grid-container")
let axisSize = 16;

function createGrid(axisSize){
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

function deleteGrid(){
    const allGridRows = document.querySelectorAll('.grid-row');
    allGridRows.forEach((row) => {
        row.remove();
    });
}

createGrid(axisSize);
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
        axisSize = prompt("Enter a number between 16 and 100");
        deleteGrid();
        createGrid(axisSize);
        addHoverEffect();
    }while(axisSize <  16 || axisSize > 100);
});