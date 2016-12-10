
loadInventory();

var styleChangeBoolian = false;


function loadInventory() {
    
    var inventoryLoader = new XMLHttpRequest();

    // load event listener

    inventoryLoader.addEventListener("load", function(e) {



     




// CHANGE CARD STYLE FUNCTION

    function changeStyles(e) {

        var backgroundCards = document.getElementsByClassName('backgroundChange');

        // console.log(backgroundCards.length);

        for (var i = 0; i < backgroundCards.length;i++) {
            backgroundCards[i].setAttribute('class', 'col-md-4 col-sm-4 col-xs-4 carCard');
        }


        if (e.path[1].className === "row") {
            // console.log(e);     

            e.path[0].classList.toggle('backgroundChange');
            
        } else if (e.path[2].className === 'row') {

            e.path[1].classList.toggle('backgroundChange');
            
        }

}

    

    function editDescription (e) {
        if (e.path[1].className === "row") {

            document.querySelector('#edit-input').focus();
            
            document.querySelector('#edit-input').value = e.path[0].children[3].innerText;

            e.path[0].children[3].innerText = document.querySelector('#edit-input').value;

            console.log(e)

        } else if (e.path[2].className === 'row') {

            document.querySelector('#edit-input').focus();

            document.querySelector('#edit-input').value = e.path[1].children[3].innerText;     

            e.path[1].children[3].innerText = document.querySelector('#edit-input').value;

            
        }

    }

    function newDescription(evt) {
            var key = evt.which || evt.keyCode;
            if (key === 13) { 
            
            var selectedDiv = document.querySelector('.backgroundChange');
            
            selectedDiv.children[3].innerText = document.querySelector('#edit-input').value

            console.log(selectedDiv.children[3].innerText)

            for (var i = 0; i < backgroundCards.length;i++) {
            backgroundCards[i].setAttribute('class', 'col-md-4 col-sm-4 col-xs-4 carCard');
        }


        }
    }

    function newDescriptionLive (e) {
            var selectedDiv = document.querySelector('.backgroundChange');
            
            selectedDiv.children[3].innerText = document.querySelector('#edit-input').value

            console.log(selectedDiv.children[3].innerText)
    }




    var data = JSON.parse(e.target.responseText);

    var carDivHTML =    `<div class='row'>`
    window.data = data
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

    document.addEventListener('click', editDescription);

    document.querySelector('#edit-input').addEventListener('keypress', newDescription)

    document.querySelector('#edit-input').addEventListener('change', newDescriptionLive)









  


    });

inventoryLoader.open('GET', 'inventory.json')
inventoryLoader.send();

}


function defaultCarStyles(e) {

}
