//Create a 16x16 grid of divs

const body = document.body;
gridContainer = document.querySelector(".gridContainer");

CreateGrid(16);

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
            row.appendChild(gridSquare);
            gridContainer.appendChild(row);
        }
    }
}
