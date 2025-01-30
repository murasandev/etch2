const gridContainer = document.querySelector(".grid-container")

function createGrid(xAxis = 16, yAxis = 16){
    for(i = 0; i < yAxis; i++){
        const gridRow = document.createElement('div');
        gridRow.classList.toggle('grid-row');
        
        gridContainer.appendChild(gridRow);
        gridRow.style.height = `${(500 / xAxis)}px`;

        for(j=0; j < xAxis; j++){
            const box = document.createElement('div');
            box.classList.toggle('initialStyle');
            gridRow.appendChild(box);
        }
    }
}

createGrid();

//adds event listener to all divs in grid
const boxes = document.querySelectorAll('.initialStyle');
boxes.forEach((boxDiv) => {
    boxDiv.addEventListener('mouseover', function(e){
        e.target.style.background = 'black';
    });     
});

const btnGrid = document.querySelector('.btn-grid');
btnGrid.addEventListener('click', function(){
    do{
        xAxis = prompt("Enter a number between 16 and 100");
    }while(xAxis <  16 || xAxis > 100);
    console.log(xAxis);
});