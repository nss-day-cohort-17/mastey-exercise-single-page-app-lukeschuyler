var inventory = [];
loadInventory();




function loadInventory(e) {
    
    var inventoryLoader = new XMLHttpRequest();

    // load event listener

    inventoryLoader.addEventListener("load", function (e) {

    function changeStyles(e) {

        if (e.path[1].className === "row") {
           console.log(e)
            e.path[0].classList.add('backgroundChange');

        } else if (e.path[2].className === 'row') {

            console.log(e)

            e.path[1].classList.add('backgroundChange');
        }

    }

    function defaultStyles(e) {

    }

    var data = JSON.parse(e.target.responseText);

    console.log(data.cars[0].make);

    var carDivHTML =    `<div class='row'>`

    for (var i = 0; i < data.cars.length; i++) {
                            
    carDivHTML +=           `<div id="carCards${[i]}" class= "col-md-4 col-sm-4 col-xs-4 carCard">
                                <span id="makeAndModel">${data.cars[i].make} ${data.cars[i].model}</span>
                                <p id="carYear[i]" class="carYear">Year: ${data.cars[i].year}</p>
                                <p id="carPrics[i]" class="carPrice">Price: $ ${data.cars[i].price}</p>
                            </div>`
                        
            }

            carDivHTML+= `</div>`

            document.querySelector('#car-container').innerHTML = carDivHTML;


         document.addEventListener('click', changeStyles)

    });

inventoryLoader.open('GET', 'inventory.json')
inventoryLoader.send();

}

function defaultCarStyles(e) {

}
