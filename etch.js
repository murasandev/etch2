const gridContainer = document.querySelector(".grid-container")

function createGrid(xAxis = 16, yAxis = 16){
    //set dimensions of grid based on x and y axis
    // gridContainer.style.height = `${1000 + 'px'}`;
    for(i = 0; i < yAxis; i++){
        //create row
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

function createRow(){
    const gridRow = document.createElement('div');
    gridRow.classList.toggle('gridRow');
    gridContainer.appendChild(gridRow);
}

function createBox(){
    const box = document.createElement('div');
    box.classList.toggle('initialStyle');
    box.style.width = `${gridContainer.style.width / 16}px`;
    box.style.height = box.style.width;
    gridContainer.appendChild(box);
}

//set max width and height of box
function setBoxDimensions(xAxis = 16, box){
    //take dimensions of container
    //divide by xAxis or yAxis
    //max width and height = maxwidth / xAxis
    //width = parent width / xAxis
    
    console.log(gridContainer.style.width);
    console.log(box.style.width);
} 

createGrid();

const boxes = document.querySelectorAll('.initialStyle');
boxes.forEach((boxDiv) => {
    boxDiv.addEventListener('mouseover', function(e){
        e.target.style.background = 'black';
    });     
});

