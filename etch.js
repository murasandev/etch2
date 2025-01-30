//create 16x16 grid
//add hover effect to change color of grid squares

const gridContainer = document.querySelector(".grid-container")

function createGrid(xAxis = 16, yAxis = 16){
    //set dimensions of grid based on x and y axis
    for(i = 0; i < xAxis * yAxis; i++){
        createBox();
    }
}

function createBox(){
    const box = document.createElement('div');
    box.classList.toggle('initialStyle');
    gridContainer.appendChild(box);
}

//set max width and height of box
function setMaxDimensions(){
    //take dimensions of container
    //divide by xAxis or yAxis
    //max width and height = maxwidth / xAxis
} 

createGrid();

const boxes = document.querySelectorAll('.initialStyle');
boxes.forEach((boxDiv) => {
    boxDiv.addEventListener('mouseover', function(e){
        e.target.classList.toggle('testColor');
    });     
});

