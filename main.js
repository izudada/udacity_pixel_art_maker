//  Get submit button
var submitButton = document.getElementById('submit');

function makeGrid(event) {
    /*
        The reason the below variables are instantiated within 
        this function is to get their current value as they change
    */

    // Select size inputs/values with explicit 
    var inputHeight = Number(document.getElementById('inputHeight').value);
    var inputWidth = Number(document.getElementById('inputWidth').value);

    //  Select pixel canvas
    var pixelCanvas = document.querySelector('#pixelCanvas');
    var criteria = pixelCanvas.innerHTML

    // Condition to check if pixelCanvas is empty or not
    if (criteria){
        pixelCanvas.removeChild('tr')
    } else{
        //  A loop to create the rows for the canvas
        for (var row = 1; row <= inputHeight; row++){
            //  Create new table row
            var pixelRow = document.createElement('tr');
            //  Append pixelRow to pixelCanvas
            pixelCanvas.appendChild(pixelRow);

            //  A loop to create the columns for each respective pixelRow
            for (var column = 1; column <= inputWidth; column++){
                //  Create new pixel cell
                var pixelCell = document.createElement('td'); 
                // Append pixelCell to pixelRow
                pixelRow.appendChild(pixelCell);
            }

        }
    }
    
    event.preventDefault();
}

