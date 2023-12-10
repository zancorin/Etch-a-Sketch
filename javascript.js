//Create a 16x16 grid of divs

const body = document.body;
let gridContainer = document.querySelector(".gridContainer");
let gridSize = 16;
let fakeKnobs = document.querySelector(".fakeKnobs");
CreateGrid(gridSize);


function CreateGrid(num)
{
    for(let j = 0; j < num; j++)
    {
        const row = document.createElement("div");
        row.classList.add("row");
        for(let i = 0; i < num; i++)
        {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("gridSquare");
            gridSquare.addEventListener('mouseenter', function(e) {
                e.target.style.background = "black";
            });
            row.appendChild(gridSquare);
            gridContainer.appendChild(row);
            fakeKnobs.setAttribute('style', `gap: ${num*10}px;`);
        }
    }
}


const btnNewGrid = document.querySelector("#btnNewGrid");
btnNewGrid.addEventListener('click', () => 
{
    gridSize = prompt("Enter new grid size");
    if(gridSize<=0)
    {
        gridSize = 0;
    }
    else if (gridSize > 100)
    {
        gridSize = 100;
    }
    else if (isNaN(gridSize))
    {
        gridSize = 16;
    }

    DeleteGrid();
    CreateGrid(gridSize);
}
)

function DeleteGrid()
{
   // allSquares = document.querySelectorAll(".gridSquare");
    allRows = document.querySelectorAll(".row");
    /*
    allSquares.forEach((square) =>{
        console.log("delete square");
        square.remove();
     });*/
    allRows.forEach((row) => {
        row.remove();
     });



}
