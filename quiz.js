

function loadInventory() {
    
    var inventoryLoader = new XMLHttpRequest();

    // load event listener

    inventoryLoader.addEventListener("load", function(e) {

    var data = JSON.parse(e.target.responseText);

    // var carDivHTML =    `<div class='row'>`
function populatePage(data) {
    var carDivHTML = '';

    for (var i = 0; i < data.cars.length; i++) {
        if (i % 3 === 0) {
            
            carDivHTML += `<div id="row${i / 3}" class="row">`                
            carDivHTML += `<div id="carCards${[i]}" class= "col-md-4 col-sm-4 col-xs-4 carCard">
                            <span id="makeAndModel">${data.cars[i].make} ${data.cars[i].model}</span>
                            <p id="carYear[i]" class="carYear">Year: ${data.cars[i].year}</p>
                            <p id="carPrice[i]" class="carPrice">Price: $ ${data.cars[i].price}</p>
                            <p id="carDescription[i]" class="carDescriptions">${data.cars[i].description}</p>
                        </div>`

            } else if (i % 3 === 1) {
            
            carDivHTML += `<div id="carCards${[i]}" class= "col-md-4 col-sm-4 col-xs-4 carCard">
                            <span id="makeAndModel">${data.cars[i].make} ${data.cars[i].model}</span>
                            <p id="carYear[i]" class="carYear">Year: ${data.cars[i].year}</p>
                            <p id="carPrice[i]" class="carPrice">Price: $ ${data.cars[i].price}</p>
                            <p id="carDescription[i]" class="carDescriptions">${data.cars[i].description}</p>
                            </div>`
                      
            } else {

            carDivHTML += `<div id="carCards${[i]}" class= "col-md-4 col-sm-4 col-xs-4 carCard">
                            <span id="makeAndModel">${data.cars[i].make} ${data.cars[i].model}</span>
                            <p id="carYear[i]" class="carYear">Year: ${data.cars[i].year}</p>
                            <p id="carPrice[i]" class="carPrice">Price: $ ${data.cars[i].price}</p>
                            <p id="carDescription[i]" class="carDescriptions">${data.cars[i].description}</p>
                        </div>
                        </div>`
            }

        }

         // carDivHTML+= `</div>`

    document.querySelector('#car-container').innerHTML = carDivHTML;

    }

    populatePage(data);

});

inventoryLoader.open('GET', 'inventory.json')
inventoryLoader.send();


}
    
 function activateEvents(){

        document.addEventListener('click', changeStyles);

        document.addEventListener('click', editDescription);

        document.querySelector('#edit-input').addEventListener('keypress', newDescription)

        document.querySelector('#edit-input').addEventListener('click', newDescription)

        document.querySelector('#edit-input').addEventListener('input', newDescriptionLive)

        document.querySelector('#submit').addEventListener('click', newDescriptionButton)

}



activateEvents();


function defaultStyles() {
        var backgroundCards = document.getElementsByClassName('backgroundChange');

        for (var i = 0; i < backgroundCards.length;i++) {

            backgroundCards[i].setAttribute('style', 'background: clear');

            backgroundCards[i].setAttribute('class', 'col-md-4 col-sm-4 col-xs-4 carCard');

                    }

        document.querySelector('#edit-input').value = '';

        document.querySelector('#edit-input').setAttribute('disabled', 'disabled');

        document.querySelector('#submit').setAttribute('disabled', 'disabled')

        document.querySelector('#edit-input').setAttribute('placeholder', 'Click on a car to edit description');
}


// CHANGE CARD STYLE FUNCTION

    function changeStyles(e) {

        function changeCardColor (card, color) {

        if (card[0].className !== 'form-control') {
            defaultStyles();
        }

        if (card[1].className === "row") {    

            document.querySelector('#edit-input').removeAttribute('disabled', 'disabled');

            document.querySelector('#submit').removeAttribute('disabled', 'disabled')

            card[0].classList.toggle('backgroundChange');

            card[0].setAttribute('style', `background-color: ${color}`)
            
        } else if (card[2].className === 'row') {

            document.querySelector('#edit-input').removeAttribute('disabled', 'disabled');

            document.querySelector('#submit').removeAttribute('disabled', 'disabled')

            card[1].classList.toggle('backgroundChange');

            card[1].setAttribute('style', `background-color: ${color}`)
            
        } 

    }

            changeCardColor(e.path, 'lightblue');

} 

    

    function editDescription (e) {

        if (e.path[1].className === "row") {

            document.querySelector('#edit-input').focus();
            
            document.querySelector('#edit-input').value = e.path[0].children[3].innerText;

            e.path[0].children[3].innerText = document.querySelector('#edit-input').value;

        } else if (e.path[2].className === 'row') {

            document.querySelector('#edit-input').focus();

            document.querySelector('#edit-input').value = e.path[1].children[3].innerText;     

            e.path[1].children[3].innerText = document.querySelector('#edit-input').value;

        } 

        document.querySelector('#edit-input').select();

    }

    function newDescriptionButton(e) {
        var selectedDiv = document.querySelector('.backgroundChange');
            
            selectedDiv.children[3].innerText = document.querySelector('#edit-input').value

            for (var i = 0; i < selectedDiv.length;i++) {
            selectedDiv[i].setAttribute('class', 'col-md-4 col-sm-4 col-xs-4 carCard');
            }

            document.querySelector('#edit-input').value= '';
    }

    function newDescription(evt) {
            var key = evt.which || evt.keyCode;
            if (key === 13) { 

            if (document.querySelector('#edit-input').value === '') {
                alert('please enter text');
            }
            
            var selectedDiv = document.querySelector('.backgroundChange');
            
            selectedDiv.children[3].innerText = document.querySelector('#edit-input').value

            for (var i = 0; i < selectedDiv.length;i++) {
            selectedDiv[i].setAttribute('class', 'col-md-4 col-sm-4 col-xs-4 carCard');
            }

            document.querySelector('#edit-input').value= '';

            defaultStyles();
        }
    }

    function newDescriptionLive (e) {
            var selectedDiv = document.querySelector('.backgroundChange');
            
            selectedDiv.children[3].innerText = document.querySelector('#edit-input').value

    }


loadInventory();
