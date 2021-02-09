
//DOM
let main = document.querySelector(".main");
let grid = document.querySelector(".grid");
main.appendChild(grid);

function multiply (number) {
    //generate number of squares in grid
    for(let i=0; i < (number*number); i++){

        let square = document.createElement("span");
        square.classList.add("square");
        grid.appendChild(square);
    
    //click event to apply color
    function clickColor(event) {
        event.currentTarget.classList.add("aqua");

            if(event.currentTarget.classList.contains("aqua")) {
            event.currentTarget.classList.toggle("salmon");
            }   
    };

    square.addEventListener('click', clickColor);
};
}

multiply(65);