let mDown = 0;

const container = document.querySelector('.container');

//Used to check if mosue is currently beign help down or not.
document.body.onmousedown = function() {
    mDown++;
}
document.body.onmouseup = function() {
    mDown--;
}
for(let i = 0; i < 256;i++)
{
    container.append(createDiv());
}

function createDiv()
{
    const sqr = document.createElement('div');
    sqr.style.width = '32px';
    sqr.style.height = '32px';
    
    //outline prevents borders from overlapping
    sqr.style.border = '1px solid black';
    sqr.style.marginTop = '-1px';
    sqr.style.marginLeft= '-1px';

    sqr.addEventListener('mouseenter', function(){
        if(mDown)
        {
            this.style.background ='black';
        }
    });
  return sqr;
}