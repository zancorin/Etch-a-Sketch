//Create a 16x16 grid of divs

const body = document.body;
let gameContainer = document.querySelector(".gameContainer");

let gridContainer = document.querySelector(".gridContainer");
let gridSize = 16;
let fakeKnobs = document.querySelector(".fakeKnobs");
let knobLeft = document.querySelector(".knobLeft");
let knobRight = document.querySelector(".knobRight");
CreateGrid(gridSize);
let trailEffect = false;
let randomizeColors = false;

knobLeft.addEventListener('click', function(e) {
    if(trailEffect === false)
    {
        trailEffect = true;
    }
    else {
        trailEffect = false;
    }

    if(trailEffect === true)
    {
        e.target.setAttribute('style', `filter: drop-shadow(0 0 1rem #33FF87); invert(1);`);
    }
    else{
        e.target.setAttribute('style', `filter: drop-shadow(0 0 0rem #33FF87); invert(1);`);
    }
   
});
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
            gridSquare.setAttribute('style', `border: 1px solid red; width:${(450/num) - 2}px;
            height:${(450/num) - 2}px;`);
            gridSquare.addEventListener('mouseenter', function(e) {
                e.target.style.background = "black";
            });

                gridSquare.addEventListener('mouseleave', function(e) {
                    if(trailEffect === true)
                    {
                        setTimeout(function() {
                            e.target.style.background = "";
                        }, 500)

                    }

            });

            
            
            row.appendChild(gridSquare);
            gridContainer.appendChild(row);
        }
    }
}


const btnNewGrid = document.querySelector("#btnNewGrid");
btnNewGrid.addEventListener('click', () => 
{
    gridSize = prompt("Enter new grid size");
    if(gridSize<=0)
    {
        gridSize = 16;
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
