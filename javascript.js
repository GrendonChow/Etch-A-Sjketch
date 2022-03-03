let mDown = 0;

const grid = document.querySelector('.grid');
const slider = document.querySelector('.slider');

//Used to check if mosue is currently being help down or not.
document.body.onmousedown = function() {
    mDown++;
}
document.body.onmouseup = function() {
    mDown--;
}
createGrid();

function createGrid(size = 16)
{
    for(let i = 0; i < size * size;i++)
    {
        grid.appendChild(createSqrs());
    }
}

function createSqrs()
{
    sqr = document.createElement('div');
    sqr.classList.add('square');
    //outline prevents borders from overlapping
    sqr.addEventListener('mouseenter', function(){
        if(mDown)
        {
            this.style.background ='black';
        }
    });
  return sqr;
}

//Clears the board
function clearBoard()
{
    size = parseInt(prompt('How big should it be? (max 100 square side)'));
    console.log(grid.classList)
    const squares = document.querySelectorAll('.square');
    squares.forEach(c => c.remove());
    grid.style.gridTemplateColumns = `repeat(${size}, auto)`;
    grid.style.gridTemplateRows = `repeat(${size}, auto)`;
    createGrid(size);
}

//Tpggles the grid.
function toggleGrid()
{
    const sqr = document.querySelectorAll('.square');
    sqr.forEach(s => {
        if(s.style.border == "1px solid black")
        {
            s.style.border="1px solid transparent";
        }
        else
        {
            s.style.border="1px solid black";
        }
    });
}