const counter = document.getElementById('guest-count');
const inputesContainer = document.getElementById('collection-guests');
const guestsList = document.getElementById('guests-list');

let prevValCounter = 0;

counter.addEventListener('keyup', function() {
    
    let count = parseInt(counter.value.trim());

    if(prevValCounter != count) {
        
        if(prevValCounter > count) {
            removeInputs(prevValCounter - count);
        }
        else {
            createFields(count, prevValCounter);
        }

        prevValCounter = count;
    }
    
});

function createFields(count, prevend = 0) {
    
    for(let i = prevend; i < count; i++) {

        let elem = getNewElement(i);

        inputesContainer.appendChild(elem);

    }

}

function removeInputs(removeCount) {

    let collection = document.getElementsByClassName('guest-input');

    let loopFrom = collection.length - 1;

    for(let i = loopFrom; i > loopFrom - removeCount; i--) {
        collection[i].remove();
    }

    guestNameEnterHandler();
}


function getNewElement(id) {
    let coreElem = document.createElement('div');
    coreElem.className = 'row guest-input collection-item';
    coreElem.dataset.id = 'id'

    let firstNameDiv = document.createElement('div');
    firstNameDiv.className = 'input-field guest-field col s6';

    let lastNameDiv = document.createElement('div');
    lastNameDiv.className = firstNameDiv.className;

    let inputFirstName = document.createElement('input');
    inputFirstName.setAttribute('type', 'text');
    inputFirstName.setAttribute('Placeholder', 'First name');
    inputFirstName.setAttribute('id', `first-name-${id}`);
    inputFirstName.setAttribute('name', 'first-name');
    inputFirstName.className = 'name-input';


    let inputLastName = document.createElement('input');
    inputLastName.setAttribute('type', 'text');
    inputLastName.setAttribute('Placeholder', 'Last name');
    inputLastName.setAttribute('id', `last-name-${id}`);
    inputLastName.setAttribute('name', 'last-name');
    inputLastName.className = 'name-input';


    firstNameDiv.appendChild(inputFirstName);
    lastNameDiv.appendChild(inputLastName);

    coreElem.appendChild(firstNameDiv);
    coreElem.appendChild(lastNameDiv);

    inputFirstName.addEventListener('keyup', guestNameEnterHandler)
    inputLastName.addEventListener('keyup', guestNameEnterHandler)

    return coreElem;
}


function guestNameEnterHandler() {
    guestsList.innerText = '';

    let collection = document.getElementsByClassName('guest-input');

    for(let i = 0; i < collection.length; i++){

        let inputs = collection[i].getElementsByClassName('name-input');

        let firstName = inputs[0].value;
        let lastName = inputs[1].value;

        if(firstName.length > 0 || lastName.length > 0){

            let elem = document.createElement('li');
            elem.className = 'collection-item';
    
            elem.innerText = `${firstName} ${lastName}`;
    
            guestsList.append(elem);
        }

    };
}


