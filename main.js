//  Get submit button
var submitButton = document.getElementById('submit');

// Select size inputs/values with explicit 
var inputHeight = document.getElementById('inputHeight');
var inputWidth = document.getElementById('inputWidth');
var colorCounter = false;

//  Select pixel canvas
var pixelCanvas = document.querySelector('#pixelCanvas');
var modeButton = document.querySelector(".material-icons");

function makeGrid(event) {
    event.preventDefault();
    /*
        * @desc create a grid of squares 
        * @param int $width - number of squares representing the width/rows of the grid
        * @param int $height - number of squares representing the height/colomns of the grid
        * @param DOM-element $pixelCanvas - The main area housing the pixel canvas
        * @param str $criteria - Variable that stores content of pixelCanavas
        * @param DOM-element $pixelRow - A tr element representing a row of the grid
        * @param DOM-element $pixelCell - A td element representing a cell of the grid
    */
   let height = inputHeight.value;
   let width = inputWidth.value;
    if (pixelCanvas.hasChildNodes() && colorCounter == false){
        submitButton.removeEventListener('click', makeGrid);
    }else if (pixelCanvas.hasChildNodes() && colorCounter == true){
        pixelCanvas.innerHTML = "";
        colorCounter = false;
    }else{
        //  A loop to create the rows for the canvas
        for (var row = 1; row <= height; row++){
            var pixelRow = document.createElement('tr');
            pixelCanvas.appendChild(pixelRow);

            for (var column = 1; column <= width; column++){
                var pixelCell = document.createElement('td'); 
                pixelRow.appendChild(pixelCell);
            }

        }
    }
    

}

function colorGrid(action){
    /*
        * @desc adds a selected color to a cell on the grid 
        * @param str $colorInput - stores the selected color which is to be painted on the cell.
    */

    var colorInput = document.querySelector('#colorPicker').value;
    if (action.target.nodeName.toLowerCase() === 'td'){
        action.target.setAttribute('style', 'background-color : '+colorInput+'');
        colorCounter = true;
    }
    submitButton.addEventListener('click', makeGrid);
}

function mode() {
    /*
        * @desc adds classes to body and grid table data
        * @param str $body - gets the body element
        * @param str $tableData - gets an array of table datas when grid exists
    */
    var body = document.body;
    var tableData = document.querySelectorAll("td")
    body.classList.toggle("dark-mode");
    tableData.forEach(td => {
        td.classList.toggle("table-data");
    });
}


submitButton.addEventListener('click', makeGrid);
pixelCanvas.addEventListener('click', colorGrid);
modeButton.addEventListener('click', mode);