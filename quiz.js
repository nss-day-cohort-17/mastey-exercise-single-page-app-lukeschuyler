

function loadInventory() {
    
    var inventoryLoader = new XMLHttpRequest();

    // load event listener

    inventoryLoader.addEventListener("load", function(e) {


function defaultStyles() {
        var backgroundCards = document.getElementsByClassName('backgroundChange');

        for (var i = 0; i < backgroundCards.length;i++) {
            backgroundCards[i].setAttribute('class', 'col-md-4 col-sm-4 col-xs-4 carCard');
        }
}


// CHANGE CARD STYLE FUNCTION

    function changeStyles(e) {

        console.log(e)

        defaultStyles();

        if (e.path[1].className === "row") {    

            e.path[0].classList.toggle('backgroundChange');
            
        } else if (e.path[2].className === 'row') {

            e.path[1].classList.toggle('backgroundChange');
            
        }
         else if (e.path[0] === body) {
            defaultStyles()
         }

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
        }
    }

    function newDescriptionLive (e) {
            var selectedDiv = document.querySelector('.backgroundChange');
            
            selectedDiv.children[3].innerText = document.querySelector('#edit-input').value

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

    // document.querySelector('.form-control').addEventListener('click', preventDeleteStyle);

    document.addEventListener('click', editDescription);

    document.querySelector('#edit-input').addEventListener('keypress', newDescription)

    document.querySelector('#edit-input').addEventListener('click', newDescription)

    document.querySelector('#edit-input').addEventListener('input', newDescriptionLive)

    document.querySelector('#submit').addEventListener('click', newDescriptionButton)







  


    });

inventoryLoader.open('GET', 'inventory.json')
inventoryLoader.send();

}
loadInventory();
