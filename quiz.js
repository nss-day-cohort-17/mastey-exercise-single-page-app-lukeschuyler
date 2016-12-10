var inventory = [];
loadInventory();

var styleChangeBoolian = false;


function loadInventory(e) {
    
    var inventoryLoader = new XMLHttpRequest();

    // load event listener

    inventoryLoader.addEventListener("load", function (e) {

// CHANGE CARD STYLE FUNCTION

    function changeStyles(e) {

        if (e.path[1].className === "row") {

            e.path[0].classList.add('backgroundChange');
            
        } else if (e.path[2].className === 'row') {

            e.path[1].classList.add('backgroundChange');
            
        }

    }

    function changeDescription (e) {
        if (e.path[1].className === "row") {

            document.querySelector('#edit-input').focus();
            document.querySelector('#edit-input').value = e.path[0].children[3].innerText;

        } else if (e.path[2].className === 'row') {

            document.querySelector('#edit-input').focus();

            document.querySelector('#edit-input').value = e.path[1].children[3].innerText;            
        }
    }

    var data = JSON.parse(e.target.responseText);

    var carDivHTML =    `<div class='row'>`

    for (var i = 0; i < data.cars.length; i++) {
                            
    carDivHTML += `<div id="carCards${[i]}" class= "col-md-4 col-sm-4 col-xs-4 carCard">
                      <span id="makeAndModel">${data.cars[i].make} ${data.cars[i].model}</span>
                      <p id="carYear[i]" class="carYear">Year: ${data.cars[i].year}</p>
                      <p id="carPrice[i]" class="carPrice">Price: $ ${data.cars[i].price}</p>
                      <p id="carDescription[i]" class="carDescriptions">${data.cars[i].description}</p>
                  </div>`
                        
            }

         carDivHTML+= `</div>`

         document.querySelector('#car-container').innerHTML = carDivHTML;

         document.addEventListener('click', changeStyles);

         // document.addEventListener('click', defaultStyles);

         document.addEventListener('click', changeDescription)


    });

inventoryLoader.open('GET', 'inventory.json')
inventoryLoader.send();

}

function defaultCarStyles(e) {

}
