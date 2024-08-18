let index=0;

function changeColors()
{
    let colors= ["red", "blue","green","purple", "orange"];
    let body = document.getElementsByTagName("body")[0];
    body.style.background = colors[index++];

    if(index > colors.length - 1)
        {
            index =0;
        }
};